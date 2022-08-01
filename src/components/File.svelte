<script>
    import { createEventDispatcher } from "svelte";
    import Button from '@smui/button';
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
    <Button on:click ={deleteFile}>Dosyayı Sil </Button>

</div>

