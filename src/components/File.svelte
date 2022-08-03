<script>
    import { createEventDispatcher } from "svelte";
    import Button from '@smui/button';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import  { Label } from '@smui/button';
 
  let open = false;
  let clicked = 'Nothing yet.';
export let dosyaAdi;
export let dosyaTarihi;
export let dosyaAcıklama;
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const dispatch = createEventDispatcher();
    let deleteFile = () =>{
        dispatch("delete",dosyaAdi);
    }
</script>


<div>


    <h1>{dosyaAdi}</h1>
    <h2>{dosyaTarihi = date}</h2>
    <h3>{dosyaAcıklama}</h3>
    <Button on:click={() => (open = true)}>Dosyayı Sil </Button>

</div>

<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="simple-title">Dosyayı Sil</Title>
  <Content id="simple-content">Dosyayı silmek istediğinizden emin misiniz?</Content>
  <Actions>
    <Button on:click={() => (clicked = 'No')}>
      <Label>Hayır</Label>
    </Button>
    <Button on:click={deleteFile}>
      <Label>Evet</Label>
    </Button>
  </Actions>
</Dialog>