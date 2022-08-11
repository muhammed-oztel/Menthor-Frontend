<script>
  import { onMount } from "svelte";

  import Carousel from "../components/Carousel.svelte";
  import FaqExpandable from "../components/FaqExpandable.svelte";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Splide from "../components/Splide.svelte";
  import TypeWriter from "../components/TypeWriter.svelte";
  import { fetchMentors } from "../services/slider_home";
  import { getBestMenteeRate } from "../services/rating";
  import { getUserInfos } from "../services/profile";
  import StarRatting from "@ernane/svelte-star-rating";
  let mentors = [];
  let favoriteMentees = [];
  let userRatingConfig = {
    readOnly: true,
    countStars: 5,
    range: {
      min: 0,
      max: 5,
      step: 0.1,
    },
    score: 0.0,
    showScore: false,
    starConfig: {
      size: 30,
      fillColor: "#F9ED4F",
      strokeColor: "#BB8511",
    },
  };

  async function sendMentors() {
    await fetchMentors().then((response) => {
      mentors = response;
    });
  }

  async function fetchBestMentees() {
    await getBestMenteeRate().then((response) => {
      response.forEach((element) => {
        favoriteMentees = [
          ...favoriteMentees,
          {
            name: element.nameSurname,
            picture: element.picture,
            rate: element.userRating,
            config: { ...userRatingConfig, score: element.userRating },
          },
        ];
      });
    });
  }
  onMount(() => {
    sendMentors();
    fetchBestMentees();
  });
</script>

<Navbar />
<main class="mt-4">
  <div class="container">
    <div class="d-flex flex-row mb-3 justify-content-between align-items-start">
      <div class="row">
        <h1 class="display-2 fw-bold">
          Sektörün ileri gelen mentorları sizlere yardım etmek için bekliyor
        </h1>
        <p class="display-6 text-muted">
          Mentorunla <b>birebir</b> görüşme şansını yakala
        </p>
        <p class="display-6 text-muted">
          Önde gelen bir çok sektörde mentorluk desteği sizleri bekliyor
        </p>
        <p class="display-6 text-muted">
          <TypeWriter />
        </p>
      </div>
      <div class="mb-3 me-3">
        <Splide {mentors} interval={3000} />
      </div>
      <div class="mb-3 me-3">
        <Splide {mentors} interval={4000} />
      </div>
      <div class="mb-3">
        <Splide {mentors} interval={5000} />
      </div>
    </div>
    <br /><br />
    <hr />
    <div class="row mb-5">
      <h1 class="mb-4">En başarılı menteeler</h1>

      <div class="d-flex">
        {#each favoriteMentees as mentee}
          <div class="card me-3 rounded-5">
            <img
              src={mentee.picture == null
                ? "https://cdn-icons-png.flaticon.com/512/7710/7710521.png"
                : mentee.picture}
              class="card-img-top rounded-circle mx-auto my-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <h2 class="display-6">
                  <strong>{mentee.name}</strong>
                </h2>
                <!-- <h5 class="text-muted">{mentee.title}</h5> -->
                <div class="d-flex justify-content-center">
                  <StarRatting bind:config={mentee.config} />
                </div>
              </h5>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <hr />
    <div class="row mb-5">
      <h1 class="mb-4">Özellikler</h1>
      <div class="d-flex">
        <Carousel />
      </div>
    </div>
    <hr />
    <div class="row mb-5">
      <h1>İstatistikler</h1>
      <div class="d-flex justify-content-evenly align-items-center">
        <div class="me-3">
          <h1>1000+</h1>
          <h5>Mentor</h5>
        </div>
        <div>
          <h1>1000+</h1>
          <h5>Mentee</h5>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mb-5">
      <h1 class="mb-4">Hakkımızda</h1>
      <div class="d-flex">
        <div class="row">
          <h5 class="lead">
            2022 yılında 8 kişilik bir ekip tarafından kurulmuş olan, asıl amacı
            gençlerimizin kariyer yolunda onlara destek olmak üzere kurulmuş bir
            firmayız. Önceliğimiz akıl hocalığının yanı sıra gelecek nesillerin
            iş hayatına mümkün oldukça hazırlıklı başlamasıdır. Bu yolda bize
            eşlik eden değerli takım arkadaşlarımız ve mentorlarımızla birlikte
            gün geçtikçe büyüyen ve gelişen bir platform olmaya devam ediyoruz.
          </h5>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mb-5">
      <h1 class="mb-4">Sıkça Sorulan Sorular</h1>
      <div class="d-flex flex-column  align-items-center">
        <FaqExpandable />
      </div>
    </div>
  </div>
</main>
<Footer />

<style>
  .card {
    width: 18rem;
  }
  .card-img-top {
    width: 50%;
  }
  main {
    display: flex;
    flex-direction: column;
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
