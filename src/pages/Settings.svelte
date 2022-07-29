<script>
  import Fab, { Icon } from "@smui/fab";
  import Textfield from "@smui/textfield";
  import Tags from "../components/Tags.svelte";
  let user = {
    name: "",
    surname: "",
    phone: "",
    birthdate: "",
    email: "",
    password: "",
  };
</script>

<div class="container">
  <div class="row align-items-center vh-100">
    <div class="col-6 mx-auto">
      <div class="card card-rounded shadow border-0">
        <div class="card-body d-flex flex-column align-items-center">
          <h1 class="card-title mb-2">Ayarlar</h1>
          <div class="row">
            <div class="col-12">
              <img
                class="user-img"
                src="https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png"
                alt="user-profile"
              />
              <div class="change-img">
                <Fab class="bg-dark" on:click={() => {}} mini>
                  <Icon class="material-icons">edit</Icon>
                </Fab>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <div class="form-group d-flex">
                <Textfield
                  style="min-width:240px;"
                  class="me-4"
                  bind:value={user.name}
                  variant="outlined"
                  label="İsim"
                />
                <Textfield
                  style="min-width:240px;"
                  bind:value={user.surname}
                  variant="outlined"
                  label="Soyisim"
                />
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <div class="form-group d-flex">
                <Textfield
                  style="min-width:240px;"
                  class="me-4"
                  bind:value={user.phone}
                  variant="outlined"
                  label="Telefon"
                />
                <Textfield
                  style="min-width:240px;"
                  bind:value={user.birthdate}
                  variant="outlined"
                  label="Doğum Tarihi"
                />
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <div class="form-group d-flex">
                <Textfield
                  style="min-width:240px;"
                  class="me-4"
                  bind:value={user.email}
                  variant="outlined"
                  label="E-posta"
                />
                <Textfield
                  style="min-width:240px;"
                  bind:value={user.password}
                  variant="outlined"
                  label="Şifre"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group tag-size">
                <Tags />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="form-group form-button">
              <button class="btn btn-success">Değişiklikleri Kaydet</button>
            </div>
          </div>
          <div class="row">
            <div class="form-group form-button">
              <button class="btn btn-danger btn-block">Hesabı Sil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .user-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .card-rounded {
    border-radius: 20px;
  }
  .change-img {
    position: absolute;
    left: 380px;
    top: 200px;
  }
</style>
