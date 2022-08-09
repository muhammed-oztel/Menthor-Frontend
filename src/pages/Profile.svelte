<script lang="ts">
  import Paper, { Title, Content } from "@smui/paper";
  import { onMount } from "svelte";
  import { getUserInfos } from "../services/profile.js";
  import { fetchInterest } from "../services/settings.js";
  import Drawer from "../components/Drawer.svelte";
  import { format } from "date-fns";
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

  async function getUserData(id) {
    // console.log(history.state.user.response.id);
    await getUserInfos(id)
      .then((response) => {
        console.log(response);
        let today = new Date();
        console.log();

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
  }
  onMount(() => {
    // id = localStorage.getItem("uid") || localStorage.getItem("target");
    token = localStorage.getItem("token");
    displayerRole = localStorage.getItem("role");
    if (!displayerRole) {
      displayerRole = "guest";
    }
    console.log(displayerRole);
    getUserData(id);
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
        <div class="profile-pic">
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
          <h6 class="text-center text-muted">
            {#if user.city != null}
              {user.city}
            {:else}
              Lütfen şehrinizi ekleyiniz
            {/if}
          </h6>
          <h6 class="text-center text-muted">{user.email}</h6>
          <div class="d-flex justify-content-evenly align-items-center">
            {#each interests as interest}
              <span class="badge bg-dark me-2" style="font-size: 14px;">
                {interest}
              </span>
            {/each}
          </div>
        </div>
        <div class="mb-p" />
        <div class="paper-container paper-shaped-round">
          <Paper color="primary" variant="unelevated">
            <Title>Hakkımda</Title>
            <Content>
              {#if user.about != null}
                “{user.about}"
              {:else}
                Lütfen açıklamanızı ekleyiniz
              {/if}
            </Content>
          </Paper>
        </div>

        {#if token}
          <div class="card">
            <div class="card-header">Yaklaşan Görüşmeler</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>13.08.22 - Sektörün Son Durumu Hakkında</p>
                <footer class="blockquote-footer">Ayşe Yılmaz ile</footer>
              </blockquote>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  /* These classes are only needed because the
      drawer is in a container on the page. */

  .mb-p {
    margin-bottom: 10rem;
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

  * :global(.card-media-square) {
    background-image: url(https://place-hold.it/100x100?text=square&fontsize=20);
  }

  .profile-pic {
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .card-img-top {
    border-radius: 50%;
    border: 1px solid black;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
