<script>
  import { SlideGroup, SlideItem, Ripple } from "svelte-materialify";
</script>

<SlideGroup centerActive>
  {#each Array(10) as _, i}
    <div class="d-flex flex-column ma-10">
      <SlideItem>
        <div>
          {i + 1}
        </div>
      </SlideItem>
      <h6 class="text-h6">Jerome Bell</h6>
      <!-- <div class="text-subtitle-1">Senior Software Developer</div> -->
    </div>
  {/each}
</SlideGroup>

<style>
  div {
    border-radius: 20px;
    width: 200px;
    height: 200px;
    margin: 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: bisque;
  }
</style>
