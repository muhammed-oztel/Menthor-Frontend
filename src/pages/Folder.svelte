<script>
    import { uploadFiles } from "../services/file.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { navigate } from "svelte-routing";

    let files;
    //senin ben mkdir
    let list = [];
    let downloadURL;
    $: downloadURL;
    $: list = files;

    async function submitForm() {
        try {
            let upload = files[0];
            const formData = new FormData();
            formData.append("file", upload);
            if (upload) {
                uploadFiles(formData).then((res) => {
                    toast.success("Dosya başarıyla yüklendi.");
                    downloadURL = res.downloadURL;
                });
            } else {
                toast.error("Lütfen bir resim seçiniz.");
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
<form on:submit|preventDefault={submitForm}>
    <input type="file" bind:files />
    <button type="submit">Seçilen Dosyayı Yükle</button>
</form>

{#if list}
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
{/if}

<style>
</style>
