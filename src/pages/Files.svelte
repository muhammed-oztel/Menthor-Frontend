<script>
import Button, { Label, Icon } from '@smui/button';
import Fab from '@smui/fab';
import File from '../components/File.svelte';
import Drawer from "../components/Drawer.svelte";

let dosyaAdi= ''; 
let dosyaTarihi = '';
let dosyaAcıklama = '';


let files;
let dosyalar=[];
let i=1;



let addFile = () => {
    console.log("dosya eklendi");
    console.log(dosyaAdi);

    const newFile={
        dosyaAdi :dosyaAdi,
        dosyaTarihi : dosyaTarihi,
      dosyaAcıklama : dosyaAcıklama,
    };

   dosyalar = dosyalar.concat(newFile);

} 



     let deleteFile = (dosyaAdi) =>{
       dosyalar = dosyalar.filter((dosya) => dosya.dosyaAdi != dosyaAdi);
    }

</script>

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
                        <input
                          id="myfiles"
                          multiple
                          type="file"
                          accept=".pdf"
                          bind:files
                      /> 
                      </div> 
                      <h4>Açıklama</h4>
		                <textarea style="resize:none; width:500px; height:100px;" rows="3" id="description" bind:value={dosyaAcıklama}/>
                        <br>
                         <Fab color="primary" on:click={addFile} extended>
                          <Label>Seçilen Dosyayı Yükle</Label>
                        </Fab>  
                </div>
            </div>
            
              {#if dosyalar.length == 0}

              <p>Gösterilecek dosya yok</p>
              
              {:else}
              {#each dosyalar as dosya,i}

            
                  <File dosyaAdi ={"Dosya" + (i+1)}
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