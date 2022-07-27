<script>
  import Carousel from "svelte-carousel";
  const images = [
    { url: "https://picsum.photos/id/4/800/200", desc: "mentor" },
    { url: "https://picsum.photos/id/2/800/200", desc: "mentoring" },
    { url: "https://picsum.photos/id/3/800/200", desc: "mentee" },
  ];
</script>

<Carousel autoplay autoplayDuration={5000}>
  {#each images as element}
    <div>
      <img class="carousel-img" src={element.url} alt={element.desc} />
    </div>
  {/each}
</Carousel>

<style>
  .carousel-img {
    width: 100%;
  }
</style>
