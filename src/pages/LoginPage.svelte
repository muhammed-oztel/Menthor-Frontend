<script>
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import SideImage from "../components/SideImage.svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { postLogin } from "../services/login.js";

  import * as yup from "yup";

  let schema = yup.object().shape({
    username: yup.string("Lütfen e-mail adresinizi girin").required("Lütfen e-mail adresinizi girin"),
    // .required("Lütfen e-mail adresinizi girin")
    // .email("Lütfen geçerli bir e-mail adresi girin")
    password: yup.string().required("Lütfen şifrenizi girin"),
    // .min(8, "Geçersiz şifre. Şifreniz en az 8 karakter olmalıdır"),
  });
  let user = { username: "", password: "" };
  let errors = { username: "", password: "" };

  async function submitHandler() {
    try {
      console.log("We are here")
      await schema.validate(user, { abortEarly: false });
      console.log(user);
      toast.success("Giriş Başarılı!", { position: "top-right" });
      // `abortEarly: false` to get all the errors
      postLogin(user).then((e) => {
        // navigate("/giris");
        console.log("Gelen veri: ", e);
      });

      errors = { username: "", password: "" };
    } catch (err) {
      errors = err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  }
</script>

<Toaster />
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
      <div class="col">
        <form on:submit|preventDefault={submitHandler}>
          <div class="row text-center pt-5">
            <div class="col">
              <div class="mb-2">
                <Textfield
                  class=""
                  variant="outlined"
                  bind:value={user.username}
                  label="E-posta"
                  input$autocomplete="email"
                  style="min-width: 400px;"
                >
                  <Icon class="material-icons" slot="leadingIcon">mail</Icon>
                </Textfield>
                <small class="invalid-feedback d-block"
                  >{#if errors.username}{errors.username}{/if}</small
                >
              </div>
              <div class="text-center mt-2">
                <Textfield
                  class=""
                  variant="outlined"
                  bind:value={user.password}
                  label="Şifre"
                  type="password"
                  style="min-width: 400px;"
                >
                  <Icon class="material-icons" slot="leadingIcon" style=""
                    >password</Icon
                  >
                </Textfield>
                <small class="invalid-feedback d-block"
                  >{#if errors.password}{errors.password}{/if}</small
                >
              </div>
            </div>
          </div>

          <div class="text-center mt-3 ms-6">
            <Button
              color="primary"
              variant="raised"
              style="min-width: 100px; text-transform: none;"
              type="submit">Giriş Yap</Button
            >
          </div>
        </form>
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
