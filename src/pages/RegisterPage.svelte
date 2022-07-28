<script>
  let name = "";
  let surname = "";
  let email = "";
  let phone = "";
  let birth = "";
  let password = "";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Button, { Label } from "@smui/button";
  import SideImage from "../components/SideImage.svelte";
  import SveltyPicker from "svelty-picker";

  function submitForm(event) {
    event.preventDefault();
    console.log(name + " " + surname + " " + email + " " + password + " ");
  }
</script>

<!-- markup (zero or more items) goes here -->
<div class="container-fluid">
  <div class="row">
    <div class="col-6"><SideImage /></div>
    <div class="col-6 mt-page">
      <div class="row">
        <div class="col">
          <h1 class="text-center">Menthor'a Hoşgeldin</h1>
          <h1 class="text-center">Üye Ol</h1>
        </div>
      </div>
      <div class="ml-page">
        <div class="input-group mt-3 mb-3">
          <Textfield class="" variant="filled" bind:value={name} label="İsim">
            <Icon class="material-icons" slot="leadingIcon">person</Icon>
          </Textfield>
          <span class="me-3" />
          <Textfield variant="filled" bind:value={surname} label="Soyisim">
            <Icon class="material-icons" slot="leadingIcon">person</Icon>
          </Textfield>
        </div>

        <div class="input-group mb-3">
          <Textfield
            style="width: 505px;"
            type="email"
            variant="filled"
            bind:value={email}
            label="E-posta"
          >
            <Icon class="material-icons" slot="leadingIcon">email</Icon>
          </Textfield>
        </div>
        <div class="input-group mb-3 ">
          <Textfield
            style="width: 505px;"
            type="phone"
            variant="filled"
            bind:value={phone}
            label="Telefon Numarası"
          >
            <Icon class="material-icons" slot="leadingIcon">phone</Icon>
          </Textfield>
        </div>
        <div class="input-group mb-3 date-picker">
          <SveltyPicker
            placeholder={"Doğum Tarihi"}
            inputClasses="form-control"
            format="yyyy-mm-dd"
            bind:value={birth}
          />
        </div>
        <div class="input-group mb-3">
          <Textfield
            style="width: 505px;"
            type="password"
            class=""
            variant="filled"
            bind:value={password}
            label="Şifre"
          >
            <Icon class="material-icons" slot="leadingIcon">password</Icon>
          </Textfield>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center ms-button ">
            <Button class="bg-dark" on:click={submitForm} variant="raised">
              <Label>Kayıt ol</Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .mt-page {
    margin-top: 300px;
  }

  .ms-button {
    margin-left: 260px;
  }
  .ml-page {
    margin-left: 18vh;
  }
  .date-picker {
    width: 505px;
    height: 56px;
  }
</style>
