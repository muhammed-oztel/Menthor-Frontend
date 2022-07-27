<script>
  import { MaterialApp } from "svelte-materialify";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
  import Slider from "./Carousel.svelte";
  import Carousel from "./Carousel.svelte";
  import DiscoverSlider from "./DiscoverSlider.svelte";
</script>

<MaterialApp>
  <Navbar />
  <main class="ma-5">
    <article>
      <section>
        <div>
          <h3>Alanında en iyi mentorları keşfet</h3>
          <Carousel />
        </div>
      </section>
      <section>
        <h3>En favori mentorlar</h3>
        <DiscoverSlider />
      </section>
      <section>
        <h3>En başarılı menteeler</h3>
        <DiscoverSlider />
      </section>
    </article>
  </main>
  <Footer />
</MaterialApp>

<style>
</style>
