<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import Button from "@smui/button";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text";

  
  const { form, errors, state, handleChange, handleSubmit } = createForm({
      initialValues: {
        UserEmail: "",
        UserPassword: ""
      },
      validationSchema: yup.object().shape({
       
        UserEmail: yup.string().email("Lütfen geçerli bir mail giriniz").required("Bu alan boş bırakılamaz"),
        UserPassword: yup
          .string()
          .required("Hatalı veya eksik şifre")
      }),
      onSubmit: values => {
        alert(JSON.stringify(values));
      }
    });



</script>

<div class="container-fluid right-bg-login">
  <div class="row justify-content-center ">
    <div class="col-6">
      <img
        src="https://images.unsplash.com/photo-1534196511436-921a4e99f297"
        class="vh-100 img-fluid"
        alt="login-image"
      />
    </div>
    <div class="col-6">
      <div class="col mt-5 text-center">
        <h1 class="pt-5">Menthor'a Hoşgeldiniz!</h1>
        <h2 class="pt-5">Giriş Yap</h2>
      </div>
      <div class="row text-center pt-5">
        <div class="col">
          <div class="mb-2">

            <form on:submit={handleSubmit}>

              <div>

                <Icon class="material-icons" slot="leadingIcon">mail</Icon>
              <label for="UserEmail">Email</label>
              <input
                id="UserEmail"
                name="UserEmail"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.UserEmail}
              />

              <HelperText persistent slot="helper" style="color:red;">

              {#if $errors.UserEmail}
                <small>{$errors.UserEmail}</small>
              {/if}
              </HelperText>

              </div>
              
              <div>
                <Icon class="material-icons" slot="leadingIcon">password</Icon>
                <label for="UserPassword">Şifre</label>
              <input
                type="password"
                id="UserPassword"
                name="UserPassword"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.UserPassword}
              />

              <HelperText persistent slot="helper" style="color:red;">
              {#if $errors.UserPassword}
                <small>{$errors.UserPassword}</small>
              {/if}
            </HelperText>
              </div>
              

             <Button
          color="primary"
          variant="raised"
          style="min-width: 100px;">Giriş Yap</Button
        >
            </form>
          
          </div>
        </div>
      </div>

      <div class="text-center mt-3 ms-6">
        
      </div>
    </div>
  </div>
</div>

<!-- <Footer /> -->
<style>
  .ms-6 {
    margin-left: 300px;
  }

  .right-bg-login {
    background-color: #f7ecde;
  }

</style>
