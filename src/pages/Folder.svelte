<script>
    import { uploadFiles, deleteFiles, getFiles } from "../services/file.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";

    import  { Label} from '@smui/button';
    import Fab from '@smui/fab';
    import Drawer from "../components/Drawer.svelte";


    let files;
    let list = [];
    let downloadURL;
    $: downloadURL;
    $: list;
    onMount(() => {
        getFiles(1).then((res) => {
            list = [...res];
        });
    });
    async function submitForm() {
        try {
            let upload = files[0];
            const formData = new FormData();
            formData.append("file", upload);
            formData.append("uploader_id", 1);
            console.log(upload);
            if (upload) {
                document.getElementById("upload-files").value = "";
                uploadFiles(formData).then((res) => {
                    toast.success("Dosya başarıyla yüklendi.");
                    downloadURL = res.downloadURL;
                });
                // document.location.reload(true);
            } else {
                toast.error("Lütfen bir dosya seçiniz.");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function downloadFile(id) {
        try {
            navigate("http://localhost:8080/download/" + id);
        } catch (error) {
            console.log(error);
        }
    }
    async function deleteFile(id) {
        try {
            // let id = downloadURL.substring(
            //     downloadURL.lastIndexOf("/") + 1,
            //     downloadURL.length
            // );
            deleteFiles(id).then((res) => {
                toast.success("Dosya başarıyla silindi.");
            });
            // document.location.reload(true);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<Toaster />


<div class="container d-flex align-items-center justify-content-center">
    <div class="card text-start">
        <div class="card-body">
            <h4 class="card-title mb-3">Dosya Yükleme</h4>
            <form on:submit|preventDefault={submitForm}>
                <input
                    id="upload-files"
                    bind:files
                    type="file"
                    class="form-control mb-3"
                />
                <button type="submit" class="btn btn-dark mb-3">
                    Dosyayı Yükle
                </button>
            </form>
            <hr />
            <div>
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
                                <td>{item.localDateTime}</td>
                                <td>12:00</td>
                                <td>
                                    <button
                                        on:click={deleteFile(item.id)}
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
<Drawer/>

<div class="container">
    <div class="row align-items-center vh-100">
      <div class="col-8 mx-auto">
        
           
        <div class="card card-rounded shadow border-0">
          <div class="card-body d-flex flex-column  "> 
            <h2 class="card-title mb-2">Dosyalar</h2>
            <hr>

            <div class="row mb-4">
                <div class="col-12">
                    <h4>Dosya Yükle</h4>
                    <div class="form-group d-flex">
                    <form on:submit|preventDefault={submitForm}>
                    <input type="file" bind:files />
                    <br> <br>
                        <Fab color="primary"  extended>
                            <Label>Seçilen Dosyayı Yükle</Label>
                          </Fab>  
                    </form>
                    </div>     
                </div>     
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        height: 100%;
    }
</style>
