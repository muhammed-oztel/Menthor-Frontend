<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  export let mentors;
  export let interval;
</script>

<Splide
  class="mt-4"
  options={{
    type: "loop",
    perPage: 2,
    autoplay: true,
    focus: "center",
    direction: "ttb",
    height: "36rem",
    width: "10rem",
    arrows: false,
    pagination: false,
    autoStart: true,
    interval: interval,
    direction: "ttb",
  }}
>
  {#each mentors as item}
    <SplideSlide>
      <div class="card">
        <div class="mentor">
          <div class="mentor-image">
            <img
              class="rounded"
              src={item.picture == null
                ? "https://cdn-icons-png.flaticon.com/512/7710/7710521.png"
                : item.picture}
              alt={item.name}
              width="150px"
              height="150px"
            />
          </div>
          <div class="mentor-info">
            <h3 class="mentor-name pb-4">
              {item.name}
            </h3>
          </div>
        </div>
      </div>
    </SplideSlide>
  {/each}
</Splide>

<style>
  .card {
    max-height: 20rem;
    background-color: white;
    border-radius: 50px;
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .mentor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mentor-image {
    padding: 10px;
  }
  .rounded {
    border-radius: 50% !important;
  }
</style>
