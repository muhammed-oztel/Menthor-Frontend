<script>
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";
    export let mentors;
    export let interval;
</script>

<Splide
    options={{
        type: "loop",
        perPage: 3,
        autoplay: true,
        focus: "center",
        direction: "ttb",
        height: "52rem",
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
                        <img class="rounded" src={item.image} alt={item.name} />
                    </div>
                    <div class="mentor-info">
                        <h3 class="mentor-name">{item.name}</h3>
                        <p class="mentor-title">{item.title}</p>
                    </div>
                </div>
            </div>
        </SplideSlide>
    {/each}
</Splide>

<style>
    .card {
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
