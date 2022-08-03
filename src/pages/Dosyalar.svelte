<style global>
    @import 'filepond/dist/filepond.css';
    @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

    .app{
        background-color: rgb(198, 234, 239);
    }
    .filepond--drip-blob {
    background-color: rgb(195, 51, 51);
}

    </style>
    
    <script>
    import FilePond, { registerPlugin, supported } from 'svelte-filepond';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// a reference to the component, used to call FilePond methods
let pond;

// pond.getFiles() will return the active files

// the name to use for the internal file input
let name = 'filepond';

// handle filepond events
function handleInit() {
	console.log('FilePond has initialised');
}

function handleAddFile(err, fileItem) {
	console.log('A file has been added', fileItem);
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
                    
                    <div class="app">

	                <FilePond bind:this={pond} {name}
		            server="/api"
		            allowMultiple={true}
		            oninit={handleInit}
		            onaddfile={handleAddFile}/>

                    </div>
                      
                </div>
            </div>
            
              
          </div>
        </div>
      </div>
    </div>
  </div>








    
   