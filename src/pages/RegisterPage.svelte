<script>
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Button, { Label } from "@smui/button";
  import SideImage from "../components/SideImage.svelte";
  import * as yup from "yup";
  import toast, { Toaster } from "svelte-french-toast";
  import DatePicker from "../components/DatePicker.svelte";
  import { navigate } from "svelte-routing";
  let user = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    birthdate: "",
    password: "",
  };
  let errors = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    birthdate: "",
    password: "",
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
    birthdate: yup.string().required("Lütfen doğum tarihinizi girin"),
    password: yup
      .string()
      .required("Lütfen şifrenizi girin")
      .min(8, "Geçersiz şifre. Şifreniz en az 8 karakter olmalıdır"),
  });
  async function validate() {
    try {
      await schema.validate(user, { abortEarly: false });
      console.log(user);
      errors = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        birthdate: "",
        password: "",
      };
      toast.success("Kaydınız Başarıyla Oluşturuldu!", {
        position: "top-right",
      });
      setTimeout(function () {
        navigate("/giris", { replace: true });
      }, 5000);

      user = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        birthdate: "",
        password: "",
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
  <div class="row">
    <div class="col-6"><SideImage /></div>
    <div class="col-6 mt-page">
      <div class="row">
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
            <!-- <DatePicker date={user.birthdate} /> -->
            <Textfield
              style="width: 505px;"
              variant="outlined"
              type="date"
              bind:value={user.birthdate}
            />

            <small class="invalid-feedback d-block">
              {#if errors.birthdate}{errors.birthdate}{/if}</small
            >
          </div>
          <div class="input-group mb-3">
            <Textfield
              style="width: 505px;"
              type="password"
              variant="outlined"
              bind:value={user.password}
              label="Şifre"
            >
              <Icon class="material-icons" slot="leadingIcon">password</Icon>
            </Textfield>
            <small class="invalid-feedback d-block"
              >{#if errors.password}{errors.password}{/if}</small
            >
          </div>
          <div class="row">
            <div class="col d-flex justify-content-center ms-button ">
              <Button
                style="text-transform: none;"
                class="bg-dark"
                type="submit"
                variant="raised"
              >
                <Label>Kayıt ol</Label>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .mt-page {
    margin-top: 180px;
  }

  .ms-button {
    margin-left: 260px;
  }
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
