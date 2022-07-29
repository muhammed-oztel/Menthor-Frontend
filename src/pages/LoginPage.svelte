<script>
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import SideImage from "../components/SideImage.svelte";
  let userEmail = "";
  let userPassword = "";
</script>

<div class="container-fluid">
  <div class="row justify-content-center ">
    <div class="col-6">
      <SideImage />
    </div>
    <div class="col-6">
      <div class="col mt-5 text-center">
        <h1 class="pt-5">Menthor'a Hoşgeldiniz!</h1>
        <h2 class="pt-5">Giriş Yap</h2>
      </div>
      <div class="row text-center pt-5">
        <div class="col">
          <div class="mb-2">
            <Textfield
              class=""
              variant="outlined"
              bind:value={userEmail}
              label="Mail"
              input$autocomplete="email"
              style="min-width: 400px;"
            >
              <Icon class="material-icons" slot="leadingIcon">mail</Icon>
            </Textfield>
          </div>
          <div>
            <Textfield
              class=""
              variant="outlined"
              bind:value={userPassword}
              label="Şifre"
              type="pass"
              style="min-width: 400px;"
            >
              <Icon class="material-icons" slot="leadingIcon" style="">password</Icon>
            </Textfield>
          </div>
        </div>
      </div>

      <div class="text-center mt-3 ms-6">
        <Button
          color="primary"
          variant="raised"
          style="min-width: 100px; text-transform: none;">Giriş Yap</Button
        >
      </div>
    </div>
  </div>
</div>

<!-- <Footer /> -->
<style>
  .ms-6 {
    margin-left: 300px;
  }
</style>
