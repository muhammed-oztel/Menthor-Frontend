<script>

    import {Peer} from 'peerjs';
    import { postVideoId } from "../services/videocall.js";
    

  var peer = new Peer();
  let codeid = "";
  let videocurrent;
  let videoEl;

  let youid = ""
 
     // GET YOU ID
    peer.on("open",(id)=>{
      youid = id
      console.log(id)
    })
    postVideoId(youid);
 

   
    // IF ERROR CAN GET ID
     peer.on("error",(id)=>{
      console.log("error id "+ id)
    })
  
    peer.on("connection",(conn)=>{
      console.log("message....")
      conn.on("data",(data)=>{
        console.log("new data " + data)
      })
      .then((stream) => {
        call.answer(stream);
        call.on("stream", renderYouwebcam);
        videocurrent.srcObject = stream;
        videocurrent.play();
      })
      .catch((err) => console.log("err msg" + err));
  });
  // RENDER YOU WEBCAM HERE

  let renderYouwebcam = (stream)=>{
    console.log(stream)
    videoEl.srcObject = stream
    videoEl.play()
  }

  </script>
  
    <!-- VIDEO YOU FRIEND TAG HTML -->
    <div>
    you id cam  = {youid}
    <br>
    code : <input type=""
    bind:value={codeid} name="" placeholder="{youid}">
    <!-- BUTTON CONNECT TO FRIEND -->
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
      await navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          let call = peer.call(codeid, stream);
          videocurrent.srcObject = stream;
          videocurrent.play();
          call.on("stream", renderYouwebcam);
        })
        .catch((err) => console.log("have error " + err));
    }}

    >
    connect</button>
    
    
    <div class="yourvideo">
          <video 
    bind:this={videoEl}
    width="400" height="400" autoplay="true" >
      <track kind="captions" src="">
    </video>

    
    <br>
  </div>
    <!-- YOU FACE CAM HERE -->
    <div class="myvideo">
    <video 
    bind:this={videocurrent}
    width="400" height="400" autoplay="true">
      <track kind="captions" src="">
    </video>
    </div>
    

    </div>
   
  
    
    
  

  <style>
    .myvideo{
        display: flex;
        align-items: center;
    }

    .yourvideo{
        display: flex;
        align-items: center;
    }

  </style>
