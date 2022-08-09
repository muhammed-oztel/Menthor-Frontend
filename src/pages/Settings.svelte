<script>
  import { Icon } from "@smui/fab";
  import Textfield from "@smui/textfield";
  import Tags from "../components/Tags.svelte";
  import Drawer from "../components/Drawer.svelte";
  import Swal from "sweetalert2";
  import * as yup from "yup";
  import { onMount } from "svelte";
  import {
    addInterest,
    fetchInterest,
    fetchUser,
    updateUser,
    deleteUser,
  } from "../services/settings";
  import { navigate } from "svelte-routing";
  import Cities from "../components/Cities.svelte";
  let avatar, fileinput;

  let id;
  let user = {
    name: "",
    surname: "",
    email: "",
    picture: "",
    phone: "",
    birth: "",
    city: "",
    about: "",
  };
  let errors = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    birth: "",
    city: "",
    about: "",
  };
  let interests = [];

  async function getUserData(id) {
    await fetchUser(id)
      .then((response) => {
        // let date = format(new Date(response.birth), "dd.MM.yyyy");
        user = {
          name: response.name,
          surname: response.surname,
          email: response.email,
          picture: response.picture,
          phone: response.phone,
          birth: response.birth,
          city: response.city,
          about: response.about,
        };
      })

      .catch((err) => {
        console.log(err);
      });

    await fetchInterest(id)
      .then((response) => {
        console.log(response);
        response.forEach((element) => {
          console.log(element.field);
          interests = [...interests, element.field];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onMount(() => {
    id = localStorage.getItem("uid");
    getUserData(id);
  });

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger me-3",
    },
    buttonsStyling: false,
    backdrop: false,
  });

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
    city: yup.string().required("Lütfen şehirinizi girin"),
    about: yup.string().required("Lütfen açıklamanızı girin"),
  });
  const update = async () => {
    try {
      await schema.validate(user, { abortEarly: false });
      errors = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        birth: "",
        pass: "",
        city: "",
        about: "",
      };
      swalWithBootstrapButtons
        .fire({
          title: "Bilgilerinizi Güncellemek İstediğinize Emin misiniz?",
          text: "Bunu geri alamazsınız!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Evet, güncelle!",
          cancelButtonText: "Hayır, güncelleme!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            let create = interests.map(function (interest) {
              return { userId: id, field: interest };
            });
            console.log(user);
            console.log(user.birth);
            updateUser(id, user);
            addInterest(create);

            swalWithBootstrapButtons.fire(
              "Güncelleme Başarılı!",
              "Hesabınız başarıyla güncellendi.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "İşleminiz İptal Edildi",
              "",
              "error"
            );
          }
        });
    } catch (err) {
      errors = err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  };
  const deleteAccount = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Hesabınızı Silmek İstediğinize Emin misiniz?",
        text: "Bunu geri alamazsınız!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Evet, sil!",
        cancelButtonText: "Hayır, silme!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("Account deleted");
          deleteUser(id)
            .then(() => {
              navigate("/");
              localStorage.clear();
            })
            .catch((err) => {
              console.log(err);
            });

          swalWithBootstrapButtons.fire(
            "Silme başarılı!",
            "Hesabınız başarıyla silindi.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("İşleminiz İptal Edildi", "", "error");
        }
      });
  };
  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e.target.result;
      user.picture = avatar;
    };
  };
</script>

<Drawer />
<div class="container">
  <div class="row align-items-center">
    <div class="col-6 mx-auto">
      <div class="card card-rounded shadow border-0 ">
        <div class="card-body d-flex flex-column align-items-center ">
          <form
            class="d-flex flex-column justify-content-center align-items-center"
            on:submit|preventDefault={update}
          >
            <h1 class="card-title mb-2">Ayarlar</h1>
            <div class="cnt mb-4">
              <div
                class="outer"
                style="background-image: url('{user.picture == null
                  ? 'https://cdn-icons-png.flaticon.com/512/7710/7710521.png'
                  : user.picture}');"
              >
                <div class="inner">
                  <input
                    class="inputfile"
                    type="file"
                    name="pic"
                    accept="image/*"
                    bind:this={fileinput}
                    on:change={(e) => onFileSelected(e)}
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
                  <small class="invalid-feedback d-flex flex-row">
                    {#if errors.name}{errors.name}{/if}
                  </small>
                  <Textfield
                    style="min-width:218px;"
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
                    style="min-width:218px;"
                    type="date"
                    bind:value={user.birth}
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
                  <div>
                    <Cities bind:city={user.city} />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="col">
                  <h6>Hakkımda</h6>
                  <div>
                    <div class="form-outline">
                      <textarea
                        maxlength="250"
                        bind:value={user.about}
                        class="form-control about"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <Tags tags={interests} />
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
              <button on:click={() => deleteAccount()} class="btn btn-danger"
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
  .about {
    resize: none;
    min-width: 480px;
  }
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
    margin-left: 305px;
  }
  :global(.mdc-text-field__input::-webkit-calendar-picker-indicator) {
    display: initial !important;
  }
</style>
