<script>
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import Drawer from "../components/Drawer.svelte";
  import { onMount } from "svelte";
  import {
    postMentorMenteeInfo,
    deleteMentorMenteeMatch,
  } from "../services/mentor_mentee.js";
  import { navigate } from "svelte-routing";
  import toast, { Toaster } from "svelte-french-toast";

  let open = false;
  let clicked = "Nothing yet.";
  let mentor;
  let infoResponse = {
    mentor: {
      nameSurname: "",
      email: "",
      role: "",
      picture: "",
      phone: "",
      age: "",
    },
    mentee: {
      nameSurname: "",
      email: "",
      role: "",
      picture: "",
      phone: "",
      age: "",
    },
  };
  onMount(() => {
    postMentorMenteeInfo(localStorage.getItem("uid")).then((response) => {
      infoResponse = response;
    });
  });
</script>

<Drawer />
<Toaster />
<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="simple-title">Hizmet Sonlandırma</Title>
  <Content id="simple-content"
    >Mentorluk hizmetini sonlandırmak istediğinize emin misiniz?</Content
  >
  <Actions>
    <Button on:click={() => (clicked = "No")} color="primary" variant="raised">
      <Label>Hayır</Label>
    </Button>
    <Button
      on:click={() => {
        deleteMentorMenteeMatch(localStorage.getItem("uid"))
          .then((response) => {
            toast.success("Bağlantınız kaldırıldı.");
          })
          .catch((error) => {
            toast.error("Bağlantınız kaldırılamadı.");
          });
      }}
    >
      <Label>Evet</Label>
    </Button>
  </Actions>
</Dialog>

<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="card card-rounded shadow border-0">
        <div class="card-body flex-column-center">
          <div class="row">
            <div class="col mb-3 text-muted">
              <h1 class="card-title mb-2">Bağlantım</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-center">
              <h2>Mentor</h2>
              <img
                class="user-img rounded-circle img-fluid"
                src={infoResponse.mentor.picture == null
                  ? "https://cdn-icons-png.flaticon.com/512/7710/7710521.png"
                  : infoResponse.mentor.picture}
                alt="user-profile"
              />
            </div>

            <div class="col-4 mx-auto mt-5">
              <div class="row justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <Button
                  href="/videocall"
                  color="primary"
                  variant="raised"
                  style="max-width: 250px; text-transform: none;"
                  on:click={() =>{
                    navigate("/videocall");
                  }}
                  >Görüşme Sayfasına Git</Button
                >
              </div>
            </div>
            <div class="col-4 text-center">
              <h2>Mentee</h2>
              <img
                class="user-img rounded-circle img-fluid"
                src={infoResponse.mentee.picture == null
                  ? "https://cdn-icons-png.flaticon.com/512/7710/7710521.png"
                  : infoResponse.mentee.picture}
                alt="user-profile"
              />
            </div>
          </div>
          <div class="row">
            <div class="col mt-5 mb-3 text-muted">
              <h2>Menteenin Yönetimi</h2>
            </div>
            <div class="row text-center mx-auto align-items-center">
              <div class="col-4">
                <img
                  class="user-img rounded-circle img-fluid"
                  src={infoResponse.mentee.picture == null
                    ? "https://cdn-icons-png.flaticon.com/512/7710/7710521.png"
                    : infoResponse.mentee.picture}
                  alt="user-profile"
                />
              </div>
              <div class="col-4 ">
                <Button
                  color="primary"
                  variant="raised"
                  style="text-transform: none;"
                  on:click={() => {
                    localStorage.setItem("target", infoResponse.mentee.id);
                    navigate(`/profil/${infoResponse.mentee.id}`);
                  }}
                  >Profili Görüntüle
                </Button>
              </div>
              <div class="col-4">
                <Button
                  on:click={() => (open = true)}
                  color="primary"
                  variant="raised"
                  style=" text-transform: none;"
                  data-bs-toggle="modal"
                  data-bs-target="#RemoveMenteeModalLabel"
                  ><Label>Mentorluk Hizmetini Sonlandır</Label></Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
