<script>
    import { uploadFiles } from "../services/file.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { navigate } from "svelte-routing";
    import  { Label} from '@smui/button';
    import Fab from '@smui/fab';

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
              
          </div>
        </div>
      </div>
    </div>
  </div>




<style>
</style>
