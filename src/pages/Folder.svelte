<script>
    import { uploadFiles } from "../services/file.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { navigate } from "svelte-routing";
    import { Label } from "@smui/button";
    import Fab from "@smui/fab";

    let files;
    let list = [];
    let downloadURL;
    $: downloadURL;
    $: list = files;
    let deleteFile = (dosyaAdi) => {
        dosyalar = dosyalar.filter((dosya) => dosya.dosyaAdi != dosyaAdi);
    };
    async function submitForm() {
        try {
            let upload = files[0];
            const formData = new FormData();
            formData.append("file", upload);
            console.log(upload);
            if (upload) {
                document.getElementById("upload-files").value = "";
                uploadFiles(formData).then((res) => {
                    toast.success("Dosya başarıyla yüklendi.");
                    downloadURL = res.downloadURL;
                });
            } else {
                toast.error("Lütfen bir dosya seçiniz.");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function downloadFile() {
        try {
            //idye bölme işlemi
            // id = downloadURL.substring(
            //     downloadURL.lastIndexOf("/") + 1,
            //     downloadURL.length
            // );

            navigate(downloadURL);
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
                    <tbody>
                        <tr>
                            <td>Yeni Metin Belgesi.txt</td>
                            <td>04.08.22</td>
                            <td>12:00</td>
                            <td><i class="bi bi-trash" /></td>
                            <td><i class="bi bi-download" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- {#if list}
                        {#each list as file}
                            <div class="d-flex">
                                <p class="me-3">{file.name}</p>
                                <button on:click={downloadFile}>
                                    <i class="bi bi-download" />
                                </button>
                            </div>
                        {/each}
                    {:else}
                        <p>Dosya Yok</p>
                    {/if} -->
<style>
    .container {
        height: 100%;
    }
</style>
