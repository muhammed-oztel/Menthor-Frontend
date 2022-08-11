<script>
  import {
    uploadFiles,
    deleteFiles,
    getFiles,
    downloadFiles,
    fetchMatch,
  } from "../services/file.js";
  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";
  import Swal from "sweetalert2";

  let files;
  let list = [];
  let uid;
  let match;
  uid = localStorage.getItem("uid");
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger me-3",
    },
    buttonsStyling: false,
    backdrop: false,
  });
  onMount(() => {
    getFileListFromBase();
  });

  async function getFileListFromBase() {
    fetchMatch(uid).then((res) => {
      if (res != "") {
        match = res;
        getFiles(match).then((res) => {
          list = [...res];
        });
      } else {
        document.getElementById("upload").disabled = true;
        let role = localStorage.getItem("role");
        if (role == "Mentor") {
          toast.error("Menteeniz olmadığı için bu panele erişiminiz yok!", {
            position: "top-right",
          });
        } else {
          toast.error("Mentorunuz olmadığı için bu panele erişiminiz yok!", {
            position: "top-right",
          });
        }
      }
    });
  }

  async function submitForm() {
    try {
      let upload = files[0];
      const formData = new FormData();
      formData.append("file", upload);
      formData.append("uploader_id", match);
      console.log(upload);
      if (upload) {
        document.getElementById("upload-files").value = "";
        uploadFiles(formData).then((res) => {
          getFileListFromBase();
          toast.success("Dosya başarıyla yüklendi.", {
            position: "top-right",
          });
        });
      } else {
        toast.error("Lütfen bir dosya seçiniz.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function downloadFile(id) {
    try {
      downloadFiles(id);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteFile(id) {
    try {
      deleteFiles(id).then((res) => {
        getFileListFromBase();
        toast.success("Dosya başarıyla silindi.");
      });
    } catch (error) {
      console.log(error);
    }
  }
  function openDialog(id) {
    swalWithBootstrapButtons
      .fire({
        title: "Bu Dosyayı Silmek İstediğinize Emin misiniz?",
        text: "Bunu geri alamazsınız!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Evet, sil!",
        cancelButtonText: "Hayır, silme!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteFile(id);
          swalWithBootstrapButtons.fire(
            "Silindi!",
            "Dosya başarıyla silindi.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "İptal Edildi",
            "Dosya silinmedi.",
            "error"
          );
        }
      });
  }
</script>

<!-- <Drawer /> -->
<Toaster />
<div class="container d-flex align-items-center justify-content-center">
  <div class="card text-start border-0">
    <div class="card-body">
      <h4 class="card-title mb-3">Dosya Yükleme</h4>
      <form on:submit|preventDefault={submitForm}>
        <input
          id="upload-files"
          bind:files
          type="file"
          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
          class="form-control mb-3"
        />
        <button id="upload" type="submit" class="btn btn-dark mb-3">
          Dosyayı Yükle
        </button>
      </form>
      <hr />
      <h4>Yüklenen Dosyalar Listesi</h4>
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">Dosya İsmi</th>
            <th scope="col">Yüklenme Tarihi</th>
            <th scope="col">Yüklenme Saati</th>
            <th scope="col">Dosya Silme</th>
            <th scope="col">Dosya İndirme</th>
          </tr>
        </thead>
        {#each list as item (item.id)}
          <tbody>
            <tr>
              <td>{item.fileName}</td>
              <td>
                {item.zonedDateTime
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
              <td>
                {item.zonedDateTime
                  .split("T")[1]
                  .split(":")
                  .slice(0, 2)
                  .join(":")}
              </td>
              <td>
                <button
                  on:click={openDialog(item.id)}
                  type="button"
                  class="btn btn-danger rounded-circle"
                >
                  <i class="bi bi-trash" />
                </button>
              </td>
              <td>
                <button
                  on:click={downloadFile(item.id)}
                  type="button"
                  class="btn btn-success rounded-circle"
                >
                  <i class="bi bi-download" />
                </button>
              </td>
            </tr>
          </tbody>
        {:else}
          <p>Dosya Yok</p>
        {/each}
      </table>
    </div>
  </div>
</div>

<style>
  .card {
    /* background-color: transparent !important; */
    min-width: 100%;
  }
</style>
