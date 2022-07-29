<script>
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import SideImage from "../components/SideImage.svelte";
  import HelperText from "@smui/textfield/helper-text";
  import toast, { Toaster } from "svelte-french-toast";

  import * as yup from "yup";

  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Lütfen e-mail adresinizi girin")
      .email("Lütfen geçerli bir e-mail adresi girin"),
    password: yup
      .string()
      .required("Lütfen şifrenizi girin")
      .min(8, "Geçersiz şifre. Şifreniz en az 8 karakter olmalıdır"),
  });
  let values = { email: "", password: "" };
  let errors = { email: "", password: "" };

  async function submitHandler() {
    try {
      // `abortEarly: false` to get all the errors
      await schema.validate(values, { abortEarly: false });
      // alert(JSON.stringify(values, null, 2));
      toast.success("Giriş Başarılı!", {position:'top-right'});
      errors = {};
    } catch (err) {
      errors = extractErrors(err);
      toast.error("Giriş Başarısız!", {position:'top-right'});
    }
  }
  function extractErrors(err) {
    return err.inner.reduce((acc, err) => {
      console.log(err.path);
      return { ...acc, [err.path]: err.message };
    }, {});
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
                  bind:value={values.email}
                  label="E-posta"
                  input$autocomplete="email"
                  style="min-width: 400px;"
                >
                  <Icon class="material-icons" slot="leadingIcon">mail</Icon>
                </Textfield>
                <small class="invalid-feedback d-block"
                  >{#if errors.email}{errors.email}{/if}</small
                >
              </div>
              <div class="text-center mt-2">
                <Textfield
                  class=""
                  variant="outlined"
                  bind:value={values.password}
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
  .test {
    background-color: red;
  }
</style>
