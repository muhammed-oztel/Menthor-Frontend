<script>
  import Tags from "svelte-tags-input";
  export let tags;
  $: console.log(tags);

  let interest_list = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Svelte",
    "React",
    "Vue",
    "Angular",
  ];
  function handleTags(event) {
    tags = event.detail.tags;
  }
</script>

<!-- markup (zero or more items) goes here -->
<div class="input-group mb-3">
  <div class="col">
    <h6>İlgi Alanları</h6>
    <div class="tags-size">
      <Tags {tags} on:tags={handleTags} autoComplete={interest_list} />
    </div>
  </div>
</div>

<style>
  .tags-size {
    width: 505px;
  }
</style>
