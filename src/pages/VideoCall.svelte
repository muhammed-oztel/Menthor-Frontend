<script>
  import {postVideoId, getVideoId } from "../services/videocall.js";
  import {Peer} from 'peerjs'
var peer = new Peer();
let codeid = ""
let videocurrent;
let videoEl;
let youid = ""



  // GET YOU ID
  peer.on("open",(id)=>{
    youid = id;
    console.log(id);
   
  })
    
  // IF ERROR CAN GET ID
  peer.on("error",(id)=>{
    console.log("error id "+ id)
  })

  //Get and post requests
  async function sendId() {
        try {
           
            postVideoId(youid).then((response)=>{
               /* if (response) {
            console.log("Gelen veri: ", response);
                }*/
                console.log( response);
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function getId() {
        try {
            getVideoId().then((response)=>{
                console.log("Gelen veri: ", response);
                
            });
              codeid = getVideoId();

                codeid.then(value => {
                  codeid=value;
              console.log(codeid);
})
        } catch (error) {
            console.log(error);
        }
    }
  



  peer.on("connection",(conn)=>{
    console.log("message....")
    conn.on("data",(data)=>{
      console.log("new data " + data)
    })
    conn.on("open",()=>{
      console.log("new message")
    })
  })

  // HANDLE CONNECTTION
  peer.on("call",async(call)=>{
    // open webcam
  await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
  }).then((stream)=>{
    call.answer(stream)
    call.on("stream",renderYouwebcam)
    videocurrent.srcObject = stream
    videocurrent.play()
  }).catch(err=>console.log("err msg" + err))
})
// RENDER YOU WEBCAM HERE
let renderYouwebcam = (stream)=>{
  console.log(stream)
  videoEl.srcObject = stream
  videoEl.play()
}

</script>
<div>
 
  <!-- starting the call button for mentor -->
  <button
  on:click={async()=>{
    var conn = peer.connect(codeid) 
    conn.on("data",(data)=>{
      console.log("new data " + data)
     
    })
    conn.on("open",function(){
      conn.send("hi")
    })
    // OPEN YOU WEBAM
    await navigator.mediaDevices.getUserMedia({
      video:true,
      audio:true
    }).then(stream=>{
      let call = peer.call(codeid,stream)
      console.log(codeid);
      videocurrent.srcObject = stream
      videocurrent.play()
      call.on("stream",renderYouwebcam)
    }).catch(err=>console.log("have error " + err))
  }}

    on:click={sendId}
  >
  Görüşmeyi Başlat</button>
  
  
  
  <!-- Joining the call button for mentee-->
  <button
  on:click={getId}
  on:click={async()=>{
    var conn = peer.connect(codeid)
    conn.on("data",(data)=>{
      console.log("new data " + data)
      console.log(codeid);
    })
    conn.on("open",function(){
      conn.send("hi")
    })
    // OPEN YOU WEBAM
    await navigator.mediaDevices.getUserMedia({
      video:true,
      audio:true
    }).then(stream=>{
      let call = peer.call(codeid,stream)
      console.log(codeid);
      videocurrent.srcObject = stream
      videocurrent.play()
      call.on("stream",renderYouwebcam)
    }).catch(err=>console.log("have error " + err))
  }}

    
  >
  Görüşmeye Katıl</button> 

  </div>
  

<div class="d-flex justify-content-evenly align-items-center ">
      <!-- VIDEO YOU FRIEND TAG HTML -->
      
        <video 
        bind:this={videoEl}
        width="800" height="800"  autoplay="true">
          <track kind="captions" src="">
            
        </video>
        <br>
      <!-- YOU FACE CAM HERE -->
        <video 
          bind:this={videocurrent}
          width="250" height="250" autoplay="true">
            <track kind="captions" src="">
          </video>
        
          <button class="btn btn-dark rounded-pill py-2 px-3" type="submit">
            <strong
              ><a class="text-decoration-none text-light" href="/panel">
                Görüşmeyi Sonlandır
              </a></strong
            >
          </button>
  </div>

  
  

