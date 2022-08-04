<script lang="ts">
 
  import Paper, { Title, Content } from "@smui/paper";
  import Card, { PrimaryAction, Media, MediaContent } from "@smui/card";
  import Drawer from "../components/Drawer.svelte";

  let clicked = "nothing yet";
</script>

<nav />
<Drawer/>
  <div class="profile-pic">
    <img
  class="card-img-top"
  src="https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png"
  
  alt=""
  />
<h2>Cemal Sayer</h2>
<h6>Yazılım Birim Müdürü</h6>


</div>

 
<div class="paper-container paper-shaped-round">
  <Paper color="primary" variant="unelevated">
    <Title>Hakkımda</Title>
    <Content>
      “Adım Cemal Sayer ve yeni insanlarla tanışmaktan ve onların canlandırıcı
      bir deneyim yaşamalarına yardımcı olacak yollar bulmaktan keyif alıyorum.
      Kendini işine adamış, dışa dönük ve takım oyuncusuyum. İnsanlar beni,
      mükemmel iletişim becerilerine sahip, iyimser, kendi kendini motive eden
      bir takım oyuncusu olarak görüyor. Son birkaç yıldır teknoloji
      endüstrisinde lider kalifikasyon, telefonla pazarlama ve müşteri
      hizmetleri alanlarında çalıştım. "
    </Content>
  </Paper>
</div>

<div class="card">
  <div class="card-header">Yaklaşan Görüşmeler</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>13.08.22 - Sektörün Son Durumu Hakkında</p>
      <footer class="blockquote-footer">Ayşe Yılmaz ile</footer>
    </blockquote>
  </div>
</div>



<style>
  /* These classes are only needed because the
      drawer is in a container on the page. */

  .paper-container {
    
    width: 60%;
    margin: 50px;
    margin-bottom: 50px;
    border-radius: 30px;
  }
  

  nav {
    height: 40px;
    background-color: black;
  }

  .card {
    
    margin: 50px;
    margin-bottom: 20px;
    width: 60%;
    border-radius: 30px;
  }

  * :global(.card-media-square) {
    background-image: url(https://place-hold.it/100x100?text=square&fontsize=20);
  }

  

  .profile-pic{
   
    width: 200px;
    height: 200px;
    margin: 50px;
    
  }
</style>
