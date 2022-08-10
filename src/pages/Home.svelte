<script>
  import { onMount } from "svelte";

  import Carousel from "../components/Carousel.svelte";
  import FaqExpandable from "../components/FaqExpandable.svelte";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Splide from "../components/Splide.svelte";
  import TypeWriter from "../components/TypeWriter.svelte";
  import { fetchMentors } from "../services/slider_home";
  let mentors = [];
  let favoriteMentors = [
    {
      id: 1,
      name: "John Doe",
      title: "Web Developer",
      image: "https://i.pravatar.cc/150?img=3",
      likeCount: 300,
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Web Designer",
      image: "https://i.pravatar.cc/150?img=4",
      likeCount: 200,
    },
    {
      id: 3,
      name: "Jack Doe",
      title: "Web Designer",
      image: "https://i.pravatar.cc/150?img=5",
      likeCount: 100,
    },
    {
      id: 4,
      name: "Jill Doe",
      title: "Web Developer",
      image: "https://i.pravatar.cc/150?img=6",
      likeCount: 50,
    },
    {
      id: 5,
      name: "John Doe",
      title: "Web Developer",
      image: "https://i.pravatar.cc/150?img=7",
      likeCount: 40,
    },
  ];
  async function sendMentors() {
    await fetchMentors().then((response) => {
      mentors = response;
    });
  }
  onMount(() => {
    sendMentors();
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
        {#each favoriteMentors as mentor}
          <div class="card me-3 rounded-5">
            <img
              src={mentor.image}
              class="card-img-top rounded-circle mx-auto my-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <h1 class="display-6">
                  <strong>{mentor.name}</strong>
                </h1>
                <h5 class="text-muted">{mentor.title}</h5>
                <div class="d-flex justify-content-center">
                  <i class="bi bi-heart-fill me-2" />
                  <h5>{mentor.likeCount}</h5>
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
</style>
