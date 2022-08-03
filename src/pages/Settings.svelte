<script>
  import { Icon } from "@smui/fab";
  import Textfield from "@smui/textfield";
  import Tags from "../components/Tags.svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import Drawer from "../components/Drawer.svelte";
  let user = {
    name: "Cemal",
    surname: "Sayer",
    phone: "555555555",
    birthdate: "01/01/1978",
    email: "cemalsayer@tregitim.com.tr",
    password: "tregitim",
    interests: ["HTML", "CSS", "Svelte"],
  };
  const update = () => {
    toast.success("Kullanıcı Bilgileriniz Başarıyla Güncellendi!", {
        position: "top-right",
      });
    console.log(user);
  };
  const deleteAccount = () => {
    toast.error("Kullanıcı Profiliniz Başarıyla Silindi!", {
        position: "top-right",
      });
    console.log("Account deleted");
  };
</script>


<Drawer/>
<Toaster />
<div class="container">
  <div class="row align-items-center vh-100">
    <div class="col-6 mx-auto">
      <div class="card card-rounded shadow border-0">
        <div class="card-body d-flex flex-column align-items-center">
          <form on:submit|preventDefault={update}>
            <h1 class="card-title mb-2">Ayarlar</h1>
            <div class="cnt mb-4">
              <div class="outer">
                <div class="inner">
                  <input
                    class="inputfile"
                    type="file"
                    name="pic"
                    accept="image/*"
                  />
                  <label for="">
                    <Icon class="material-icons">edit</Icon>
                  </label>
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
                    type="phone"
                    prefix="0"
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
                    type="email"
                    style="min-width:240px;"
                    class="me-4"
                    bind:value={user.email}
                    variant="outlined"
                    label="E-posta"
                  />
                  <Textfield
                    type="password"
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
                  <Tags tags={user.interests} />
                </div>
              </div>
            </div>
            <div class="card-buttons">
              <div class="form-group form-button mb-2">
                <button type="submit" class="btn btn-success"
                  >Değişiklikleri Kaydet</button
                >
              </div>
            </div>
          </form>
          <div class="card-buttons">
            <div class="form-group form-button">
              <button on:click={deleteAccount} class="btn btn-danger"
                >Hesabı Sil</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .cnt {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }

  .outer {
    width: 100% !important;
    height: 100% !important;
    max-width: 150px !important;
    max-height: 150px !important;
    margin: auto;
    background-image: url("https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png");
    background-size: cover;
    border-radius: 100%;
    position: relative;
  }

  .inner {
    background-color: black;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .inner:hover {
  background-color: gray;
}

  .inputfile {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    width: 50px;
    height: 50px;
  }

  .inputfile + label {
    font-size: 1.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    width: 40px;
    height: 40px;
    pointer-events: none;
    cursor: pointer;
    line-height: 44px;
    text-align: center;
    color: white;
  }

  .card-rounded {
    border-radius: 20px;
  }

  .card-buttons {
    margin-left: 335px;
  }
</style>
