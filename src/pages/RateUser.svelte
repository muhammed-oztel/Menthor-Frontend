<script>
  import StarRatting from "@ernane/svelte-star-rating";
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  export let userRate = 0;
  export let clicked = "Nothing";
  $: userRate = config.score;

  export let open = true;
  let config = {
    readOnly: false,
    countStars: 5,
    range: {
      min: 0,
      max: 5,
      step: 0.5,
    },
    score: 0.0,
    showScore: false,
    starConfig: {
      size: 30,
      fillColor: "#F9ED4F",
      strokeColor: "#BB8511",
    },
  };
</script>

<!-- <p>{userRate}</p>
<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button> -->
<Dialog
  bind:open
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="simple-title"
  aria-describedby="mandatory-content"
>
  <Title id="simple-title">Mentee Değerlendirme</Title>
  <Content id="mandatory-content">
    <p class="mb-2" >Menteenin performansını değerledirin</p>
    <StarRatting bind:config />
  </Content>
  <Actions>
    <Button on:click={() => (clicked = "Gönder")} style="text-transform: none;">
      <Label>Gönder</Label>
    </Button>
  </Actions>
</Dialog>

<style>
</style>
