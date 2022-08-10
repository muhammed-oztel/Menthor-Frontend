<script>
  import Paper, { Title, Content } from "@smui/paper";
  import { onMount } from "svelte";
  import StarRatting from "@ernane/svelte-star-rating";
  import { getUserRate } from "../services/rating";
  import {
    getUserInfos,
    getEventList,
    checkCurrentEvent,
  } from "../services/profile.js";
  import { fetchInterest } from "../services/settings.js";
  import Drawer from "../components/Drawer.svelte";
  import Navbar from "../components/Navbar.svelte";
  let user = {
    nameSurname: "",
    email: "",
    role: "",
    picture: "",

    about: "",
    city: "",
    birth: "",
  };
  export let id;

  $: id = localStorage.getItem("target");

  // id = "";
  let token = "";
  let displayerRole = "";
  let interests = [];
  let events = [];

  let getRateResponse;
  let userRatingConfig = {
    readOnly: true,
    countStars: 5,
    range: {
      min: 0,
      max: 5,
      step: 0.1,
    },
    score: 0.0,
    showScore: true,
    starConfig: {
      size: 30,
      fillColor: "#F9ED4F",
      strokeColor: "#BB8511",
    },
  };

  async function getUserData(id) {
    // console.log(history.state.user.response.id);
    await getUserInfos(id)
      .then((response) => {
        console.log(response);
        let today = new Date();
        let birthDate = parseInt(response.birth.split("-")[0]);
        let age = today.getFullYear() - birthDate;
        user = {
          nameSurname: response.name + " " + response.surname,
          email: response.email,
          role: response.role,
          picture: response.picture,
          city: response.city,
          about: response.about,
          birth: age.toString(),
        };
      })
      .catch((err) => {
        console.log(err);
      });

    await fetchInterest(id)
      .then((response) => {
        response.forEach((element) => {
          interests = [...interests, element.field];
        });
      })
      .catch((err) => {
        console.log(err);
      });
    await getEventList(id)
      .then((response) => {
        if (response != "") {
          console.log(response);
          events = checkCurrentEvent(response);
        } else {
          console.log("No events");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onMount(() => {
    token = localStorage.getItem("token");
    displayerRole = localStorage.getItem("role");
    if (!displayerRole) {
      displayerRole = "guest";
    }
    console.log(displayerRole);
    getUserData(id);
    getUserRate(id).then((res) => {
      userRatingConfig.score = res.userRating;
    });
  });
</script>

{#if token}
  <Drawer {id} />
{:else if !token}
  <Navbar />
{/if}

{#if displayerRole}
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 mx-auto d-flex flex-column align-items-center">
        <div class="profile-pic text-center">
          <img
            class="card-img-top shadow"
            src={user.picture == null
              ? "https://cdn-icons-png.flaticon.com/512/7710/7710521.png"
              : user.picture}
            alt=""
          />
          <div class="mt-2">
            <h2 class="text-center ">{user.nameSurname}</h2>
          </div>
          <h6 class="text-center">{user.birth}</h6>
          <h6 class="text-center">{user.role}</h6>
          {#if user.role.toLowerCase() == "mentee"}
            <StarRatting bind:config={userRatingConfig} />
          {/if}
          <h6 class="text-center text-muted">
            {#if user.city != null}
              {user.city}
            {:else}
              Lütfen şehrinizi ekleyiniz
            {/if}
          </h6>
          <h6 class="text-center text-muted">{user.email}</h6>
          <div class="d-flex justify-content-evenly align-items-center">
            {#if interests.length > 0}
              {#each interests as interest}
                <span class="badge bg-dark me-2" style="font-size: 14px;">
                  {interest}
                </span>
              {/each}
            {:else}
              Lütfen ilgi alanlarınızı ekleyiniz
            {/if}
          </div>
        </div>
        <div class="mb-p" />
        <div class="paper-container paper-shaped-round">
          <Paper color="primary" variant="unelevated">
            <Title>Hakkımda</Title>
            <Content>
              {#if user.about || user.about == ""}
                “{user.about}"
              {:else}
                Lütfen açıklamanızı ekleyiniz
              {/if}
            </Content>
          </Paper>
        </div>

        {#if token}
          <div class="card">
            <div class="card-header text-white">Yaklaşan Görüşmeler</div>
            <div class="card-body">
              {#if events.length > 0}
                {#each events as item}
                  <blockquote class="blockquote mb-0">
                    <p>
                      {`${item.start.split("-")[2].slice(0, 2)}/${
                        item.start.split("-")[1]
                      }/${item.start.split("-")[0]}`}
                      - {item.start.split("-")[2].slice(2)}
                    </p>
                    <p>{item.title}</p>
                    <footer class="blockquote-footer">
                      {item.description}
                    </footer>
                  </blockquote>
                  <div class="row">
                    <hr class="text-muted" />
                  </div>
                {/each}
              {:else}
                <blockquote class="blockquote mb-0">
                  <p>Yaklaşan görüşme bulunmuyor</p>
                </blockquote>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .mb-p {
    margin-bottom: 13rem;
  }
  .paper-container {
    width: 60%;
    margin: 50px;
    margin-bottom: 20px;
    border-radius: 30px;
  }

  .card {
    margin: 50px;
    margin-bottom: 20px;
    width: 60%;
    border-radius: 30px;
  }
  .card-header {
    background-color: black;
    border-radius: 30px;
  }

  * :global(.card-media-square) {
    background-image: url(https://place-hold.it/100x100?text=square&fontsize=20);
  }

  .profile-pic {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
  .card-img-top {
    border: 1px solid black;
    width: 100% !important;
    height: 100% !important;
    max-width: 150px !important;
    max-height: 150px !important;
    margin: auto;
    background-size: cover;
    border-radius: 100%;
    position: relative;
  }
</style>
