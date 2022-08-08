<script>
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Button, { Label } from "@smui/button";
  import SideImage from "../components/SideImage.svelte";
  import * as yup from "yup";
  import toast, { Toaster } from "svelte-french-toast";
  import { navigate } from "svelte-routing";
  import { postRegister } from "../services/register.js";
  import CircularProgress from "@smui/circular-progress";
  import Radio from "@smui/radio";
  import FormField from "@smui/form-field";
  import IconButton from "@smui/icon-button";

  let submitting = false;
  let verify = false;
  let user = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    birth: "",
    pass: "",
    role: "",
  };
  let errors = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    birth: "",
    pass: "",
    role: "",
  };

  let schema = yup.object().shape({
    name: yup.string().required("Lütfen adınızı giriniz"),
    surname: yup.string().required("Lütfen soyadınızı giriniz"),
    email: yup
      .string()
      .required("Lütfen e-mail adresinizi girin")
      .email("Lütfen geçerli bir e-mail adresi girin"),
    phone: yup
      .string()
      .matches(
        /^\d{10}$/,
        "Lütfen başında 0 olmadan 10 haneli bir telefon numarası girin"
      ),
    birth: yup
      .date()
      .nullable()
      .transform((v) => (v instanceof Date && !isNaN(v) ? v : null))
      .max(new Date(Date.now()), "Lütfen geçerli bir tarih girin")
      .required("Lütfen doğum tarihinizi girin"),
    pass: yup
      .string()
      .required("Lütfen şifrenizi girin")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Şifreniz bir büyük ve küçük harf,bir sayı ve özel karakter içermeli ve en az 8 karakterden oluşmalıdır."
      ),
    role: yup.string().required("Lütfen bir rol seçiniz"),
  });
  let isVisible = false;
  const toggleVisibility = () => {
    isVisible = !isVisible;
  };
  async function validate() {
    try {
      await schema.validate(user, { abortEarly: false });
      console.log(user);
      errors = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        birth: "",
        pass: "",
        role: "",
      };
      submitting = true;

      toast.success("Kaydınız Başarıyla Oluşturuldu!", {
        position: "top-right",
      });

      user.birth = user.birth.split(".").reverse().join("-");
      postRegister(user);
      setTimeout(() => {
        verify = true;
      }, 3000);
      user = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        birth: "",
        pass: "",
        role: "",
      };
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
    <div class="col-6"><SideImage /></div>
    {#if verify}
      <div class="col-6">
        <div class="row">
          <div class="col">
            <h1 class="text-center">Menthor'a Hoşgeldin</h1>
            <h2 class="text-center">Hesabını Doğrula</h2>
            <h4 class="text-center text-muted">
              Lütfen E-postanıza Gelen Maili Doğrulayın
            </h4>
          </div>
          <div class="d-flex justify-content-center my-3">
            <button class="btn btn-success" on:click={() => navigate("/giris")}>
              E-postamı Doğrula
            </button>
          </div>
        </div>
      </div>
    {:else if !verify}
      <div class="col-6">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col">
            <h1 class="text-center">Menthor'a Hoşgeldin</h1>
            <h1 class="text-center">Üye Ol</h1>
          </div>
        </div>
        <form on:submit|preventDefault={validate}>
          <div class="ml-page">
            <div class="input-group mt-3 mb-2">
              <Textfield
                style="width: 505px;"
                variant="outlined"
                bind:value={user.name}
                label="İsim"
              >
                <Icon class="material-icons" slot="leadingIcon">person</Icon>
              </Textfield>
              <small class="invalid-feedback d-block"
                >{#if errors.name}{errors.name}{/if}</small
              >
            </div>
            <div class="input-group mb-2">
              <Textfield
                style="width: 505px;"
                variant="outlined"
                bind:value={user.surname}
                label="Soyisim"
              >
                <Icon class="material-icons" slot="leadingIcon">person</Icon>
              </Textfield>
              <small class="invalid-feedback d-block"
                >{#if errors.surname}{errors.surname}{/if}</small
              >
            </div>
            <div class="input-group mb-2">
              <Textfield
                style="width: 505px;"
                type="email"
                variant="outlined"
                bind:value={user.email}
                label="E-posta"
              >
                <Icon class="material-icons" slot="leadingIcon">email</Icon>
              </Textfield>
              <small class="invalid-feedback d-block"
                >{#if errors.email}{errors.email}{/if}</small
              >
            </div>
            <div class="input-group mb-2">
              <Textfield
                style="width: 505px;"
                type="phone"
                variant="outlined"
                prefix="0"
                bind:value={user.phone}
                label="Telefon Numarası"
              >
                <Icon class="material-icons" slot="leadingIcon">phone</Icon>
              </Textfield>
              <small class="invalid-feedback d-block"
                >{#if errors.phone}{errors.phone}{/if}</small
              >
            </div>
            <div class="input-group mb-2">
              <Textfield
                style="width: 505px;"
                variant="outlined"
                type="date"
                bind:value={user.birth}
              />

              <small class="invalid-feedback d-block">
                {#if errors.birth}{errors.birth}{/if}</small
              >
            </div>
            <div class="input-group mb-3">
              <Textfield
                style="width: 505px;"
                type={isVisible ? "text" : "password"}
                variant="outlined"
                bind:value={user.pass}
                label="Şifre"
              >
                <Icon class="material-icons" slot="leadingIcon">password</Icon>
                <IconButton
                  type="button"
                  class="material-icons text-muted"
                  slot="trailingIcon"
                  on:click={toggleVisibility}
                >
                  {isVisible ? "visibility" : "visibility_off"}
                </IconButton>
              </Textfield>
              <small class="invalid-feedback d-block"
                >{#if errors.pass}{errors.pass}{/if}</small
              >
            </div>
            <div
              class="input-group mb-3 d-flex flex-column justify-content-start"
            >
              <h6>Rolünüz</h6>
              <div class="radio-demo">
                {#each ["Mentee", "Mentor"] as option}
                  <FormField>
                    <Radio bind:group={user.role} value={option} touch />
                    <span slot="label">{option}</span>
                  </FormField>
                {/each}
              </div>
              <small class="invalid-feedback d-block"
                >{#if errors.role}{errors.role}{/if}</small
              >
            </div>
            <div class="row">
              <div class="col d-flex flex-column justify-content-end">
                {#if submitting}
                  <CircularProgress
                    style="height: 32px; width: 32px;"
                    indeterminate
                  />
                {:else}
                  <Button
                    style="text-transform: none;width:505px;"
                    class="bg-dark"
                    type="submit"
                    variant="raised"
                  >
                    <Label>Kayıt ol</Label>
                  </Button>
                {/if}
              </div>
            </div>
          </div>
        </form>
      </div>
    {/if}

    <!-- else if content here -->
  </div>
</div>

<style>
  .ml-page {
    margin-left: 18vh;
  }

  .invalid-feedback {
    color: red;
  }
  :global(.mdc-text-field__input::-webkit-calendar-picker-indicator) {
    display: initial !important;
  }
</style>
