<script>
  import Drawer from "../components/Drawer.svelte";
  import {postVideoId, getVideoId } from "../services/videocall.js";
  import {Peer} from 'peerjs'
  import RateUser from "./RateUser.svelte";
  import { navigate } from "svelte-routing";
let openUserRate = false;
let userRateScore;
let sendRateResponse;
$: {
  if (sendRateResponse == "Gönder"){
    console.log(userRateScore)

    navigate("/panel");
  }
} 
  var peer = new Peer();
let codeid = ""
let videocurrent;
let videoEl;
let youid = ""
export let id ="";
   id = localStorage.getItem("uid") ;
  
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
           
            postVideoId(youid,id).then((response)=>{
               /* if (response) {
            console.log("Gelen veri: ", response);
                }*/
                console.log( response);
                console.log(id);
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function getId() {
        try {
            getVideoId(id).then((response)=>{
                console.log("Gelen veri: ", response);
                
            });
              codeid = getVideoId(id);

                codeid.then(value => {
                  codeid=value;
              console.log("codeid:" +codeid);
             
              console.log(id);
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

<Drawer />
<RateUser
  bind:userRate={userRateScore}
  bind:open={openUserRate}
  bind:clicked={sendRateResponse}
/>
<div class="d-flex justify-content-center align-items-center ">
  <!-- VIDEO YOU FRIEND TAG HTML -->

  <video
    id="big-video"
    bind:this={videoEl}
    width="700"
    height="500"
    autoplay="true"
  >
    <track kind="captions" src="" />
  </video>
  <br />
  <!-- YOU FACE CAM HERE -->
  <video
    id="small-video"
    bind:this={videocurrent}
    width="300"
    height="300"
    autoplay="true"
  >
    <track kind="captions" src="" />
  </video>
</div>

<div class="d-flex justify-content-evenly align-items-center">
  <!-- starting the call button for mentor -->
  <button
    class="btn btn-dark rounded-pill py-2 px-3 text-decoration-none text-light"
    on:click={async () => {
      var conn = peer.connect(codeid);
      conn.on("data", (data) => {
        console.log("new data " + data);
      });
      conn.on("open", function () {
        conn.send("hi");
      });
      // OPEN YOU WEBAM
      await navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          let call = peer.call(codeid, stream);
          console.log(codeid);
          videocurrent.srcObject = stream;
          videocurrent.play();
          call.on("stream", renderYouwebcam);
        })
        .catch((err) => console.log("have error " + err));
    }}
    on:click={sendId}
  >
    Görüşmeyi Başlat</button
  >

  <!-- Joining the call button for mentee-->
  <button
    class="btn btn-dark rounded-pill py-2 px-3 text-decoration-none text-light"
    on:click={getId}
    on:click={async () => {
      var conn = peer.connect(codeid);
      conn.on("data", (data) => {
        console.log("new data " + data);
        console.log(codeid);
      });
      conn.on("open", function () {
        conn.send("hi");
      });
      // OPEN YOU WEBAM
      await navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          let call = peer.call(codeid, stream);
          console.log(codeid);
          videocurrent.srcObject = stream;
          videocurrent.play();
          call.on("stream", renderYouwebcam);
        })
        .catch((err) => console.log("have error " + err));
    }}>Görüşmeye Katıl</button
  >

  <button
    class="btn btn-dark rounded-pill py-2 px-3"
    type="submit"
    on:click={() => {
      openUserRate = true;
    }}
  >
    <strong> Görüşmeyi Sonlandır </strong>
  </button>
</div>

<style>
  #big-video {
    border-radius: 25px;
    border: 2px solid #080808;
    padding: 5px;
    width: 700px;
    height: 500px;
    margin: 20px;
  }

  #small-video {
    border-radius: 25px;
    border: 2px solid #080808;
    padding: 5px;
    width: 300px;
    height: 200px;
  }
</style>
