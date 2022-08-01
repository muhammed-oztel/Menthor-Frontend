<script>
import Button, { Label, Icon } from '@smui/button';
import Fab from '@smui/fab';
import File from '../components/File.svelte';


let dosyaAdi= ''; 
let dosyaTarihi = '';
let dosyaAcıklama = '';



let dosyalar=[];



let addFile = () => {
    console.log("dosya eklendi");
    console.log(dosyaAdi);

    const newFile={
        dosyaAdi :dosyaAdi,
        dosyaTarihi : dosyaTarihi,
      dosyaAcıklama : dosyaAcıklama,
    };

   dosyalar = dosyalar.concat(newFile);
   
    const myFiles = document.querySelector("#myfiles");
    function logFilenames(){
  const fileInput = document.querySelector("#myfiles");
  const files = fileInput.files;
  const fileListLength = files.length;
  for (let i = 0; i < fileListLength; i++) {
    dosyaAdi = files.item(i).name;
    console.log(files.item(i).name);

  }
}
  
myFiles.addEventListener("change", logFilenames);
} 



     let deleteFile = (dosyaAdi) =>{
       dosyalar = dosyalar.filter((dosya) => dosya.dosyaAdi != dosyaAdi);
    }

</script>

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
                        <input
                          id="myfiles"
                          multiple
                          type="file"
                          bind:value="{dosyaAdi}"
                      /> 
                      </div> 
                    
                      <label for="description">Description</label>
		                <textarea rows="3" id="description" bind:value={dosyaAcıklama}/>

                         <Fab color="primary" on:click={addFile} extended>
                          <Label>Seçilen Dosyayı Yükle</Label>
                        </Fab>  
                </div>
            </div>
            
              {#if dosyalar.length == 0}

              <p>Gösterilecek dosya yok</p>
              
              {:else}
              {#each dosyalar as dosya}

            
                  <File dosyaAdi ={dosya.dosyaAdi}
                   dosyaAcıklama = {dosya.dosyaAcıklama}
                    dosyaTarihi ={dosya.dosyaTarihi} 
                    on:delete = {deleteFile(dosya.dosyaAdi)}
                    />
               
              {/each}
              {/if}
           
          </div>
        </div>
      </div>
    </div>
  </div>
  


<style>

</style>