<script>
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import SideImage from "../components/SideImage.svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { postLogin } from "../services/login.js";
  import { navigate } from "svelte-routing";
  import CircularProgress from "@smui/circular-progress";
  import IconButton from "@smui/icon-button";

  import * as yup from "yup";
  let submitting = false;

  let schema = yup.object().shape({
    mail: yup
      .string("Lütfen e-mail adresinizi girin")
      .required("Lütfen e-mail adresinizi girin")
      .email("Lütfen geçerli bir e-mail adresi girin"),
    password: yup
      .string()
      .required("Lütfen şifrenizi girin")
      .min(8, "Geçersiz şifre. Şifreniz en az 8 karakter olmalıdır"),
  });
  let user = { mail: "", password: "" };
  let errors = { mail: "", password: "" };
  let isVisible = false;

  const toggleVisibility = () => {
    isVisible = !isVisible;
  };
  async function submitHandler() {
    try {
      await schema.validate(user, { abortEarly: false });
      console.log(user);
      // `abortEarly: false` to get all the errors
      postLogin(user)
        .then((response) => {
          if (response) {
            console.log("Gelen veri: ", response);

            if (response.enabled) {
              submitting = true;
              toast.success("Giriş Başarılı!", { position: "top-right" });
              localStorage.setItem("target", response.id);
              localStorage.setItem("role", response.role);
              setTimeout(() => {
                if (response.role == "admin") {
                  navigate("/dashboard");
                } else {
                  navigate(`/profil/${response.id}`);
                }
                // navigate("/profil", { state: { user: { response } } });
              }, 3000);
            } else {
              toast.error("Hesabınızı doğrulamanız gerekiyor.", {
                position: "top-right",
              });
            }
          } else {
            toast.error("Mail veya şifre hatalı!", { position: "top-right" });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Giriş Başarısız!", { position: "top-right" });
        });

      errors = { mail: "", password: "" };
    } catch (err) {
      errors = err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  }
</script>

<Toaster />
<div class="container-fluid">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-6" on:click={() => navigate("/")}>
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
                  bind:value={user.mail}
                  label="E-posta"
                  input$autocomplete="email"
                  style="min-width: 400px;"
                >
                  <Icon class="material-icons" slot="leadingIcon">mail</Icon>
                </Textfield>
                <small class="invalid-feedback d-block"
                  >{#if errors.mail}{errors.mail}{/if}</small
                >
              </div>
              <div class="text-center mt-2">
                <Textfield
                  class=""
                  variant="outlined"
                  bind:value={user.password}
                  label="Şifre"
                  type={isVisible ? "text" : "password"}
                  style="min-width: 400px;"
                >
                  <Icon class="material-icons" slot="leadingIcon" style="">
                    password
                  </Icon>
                  <IconButton
                    type="button"
                    class="material-icons text-muted"
                    slot="trailingIcon"
                    on:click={toggleVisibility}
                  >
                    {isVisible ? "visibility" : "visibility_off"}
                  </IconButton>
                </Textfield>
                <small class="invalid-feedback d-block">
                  {#if errors.password}{errors.password}{/if}
                </small>
              </div>
            </div>
          </div>

          <div class="text-center mt-3 ms-6">
            {#if submitting}
              <CircularProgress
                style="height: 32px; width: 32px;"
                indeterminate
              />
            {:else}
              <Button
                color="primary"
                variant="raised"
                style="min-width: 100px; text-transform: none;"
                type="submit"
              >
                Giriş Yap
              </Button>
            {/if}
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
