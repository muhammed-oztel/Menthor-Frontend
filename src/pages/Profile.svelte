<script lang="ts">
  import Paper, { Title, Content } from "@smui/paper";
  import { onMount } from "svelte";
  import { getUserInfos } from "../services/profile.js";

  import Drawer from "../components/Drawer.svelte";
  let user = {
    nameSurname: "",
    email: "",
    role: "",
    picture: "",
    phone: "",
    birt: "",
  };
  async function getUserData() {
    await getUserInfos(history.state.user.response.id)
      .then((response) => {
        user = {
          nameSurname: response.name + " " + response.surname,
          email: response.email,
          role: response.role,
          picture: response.picture,
          phone: response.phone,
          birt: response.birt,
        };
        // list = [...response];
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onMount(() => {
    getUserData();
  });
</script>

<Drawer />

<div class="container">
  <div class="row align-items-center">
    <div class="col-12 mx-auto d-flex flex-column align-items-center">
      <div class="profile-pic">
        <img
          class="card-img-top"
          src="https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png"
          alt=""
        />
        <h2>{user.nameSurname}</h2>
        <h6 class="text-center">{user.role}</h6>
      </div>
      <div class="paper-container paper-shaped-round">
        <Paper color="primary" variant="unelevated">
          <Title>Hakkımda</Title>
          <Content>
            “Adım Cemal Sayer ve yeni insanlarla tanışmaktan ve onların
            canlandırıcı bir deneyim yaşamalarına yardımcı olacak yollar
            bulmaktan keyif alıyorum. Kendini işine adamış, dışa dönük ve takım
            oyuncusuyum. İnsanlar beni, mükemmel iletişim becerilerine sahip,
            iyimser, kendi kendini motive eden bir takım oyuncusu olarak
            görüyor. Son birkaç yıldır teknoloji endüstrisinde lider
            kalifikasyon, telefonla pazarlama ve müşteri hizmetleri alanlarında
            çalıştım. "
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
    </div>
  </div>
</div>

<style>
  /* These classes are only needed because the
      drawer is in a container on the page. */

  .paper-container {
    width: 60%;
    margin: 50px;
    margin-bottom: 20px;
    border-radius: 30px;
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

  .profile-pic {
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
</style>
