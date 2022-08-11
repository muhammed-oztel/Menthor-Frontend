<script>
  import { onMount } from "svelte";
  import Drawer from "../components/Drawer.svelte";
  import { postVideoId, getVideoId } from "../services/videocall.js";
  import { Peer } from "peerjs";
  import RateUser from "./RateUser.svelte";
  import { navigate } from "svelte-routing";
  import { postUserRate } from "../services/rating.js";
  import { postMentorMenteeInfo } from "../services/mentor_mentee.js";
  let openUserRate = false;
  let userRateScore;
  let sendRateResponse;
  $: {
    if (sendRateResponse == "Gönder") {
      console.log(userRateScore);
      postMentorMenteeInfo(localStorage.getItem("uid")).then((response) => {
        postUserRate({
          userId: response.mentee.id,
          userRating: userRateScore,
        });
      });
      navigate("/panel");
    }
  }

  import IconButton from "@smui/icon-button";
  import { Label, Icon } from "@smui/common";
  var peer = new Peer();
  let codeid = "";
  let videocurrent;
  let videoEl;
  let youid = "";
  let token = "";
  let clickedCam = false;
  let clicked = false;
  let clickedMic = false;
  let displayerRole = "";
  export let id = "";
  id = localStorage.getItem("uid");

  const IconChangeAudio = () => {
    clicked = !clicked;
  };

  const IconChangeCam = () => {
    clickedCam = !clickedCam;
  };

  const IconChangeMic = () => {
    clickedMic = !clickedMic;
  };

  onMount(() => {
    // id = localStorage.getItem("uid") || localStorage.getItem("target");
    token = localStorage.getItem("token");
    displayerRole = localStorage.getItem("role");

    if (!displayerRole) {
      displayerRole = "guest";
    }
    console.log(displayerRole);
  });

  // GET YOU ID
  peer.on("open", (id) => {
    youid = id;
    console.log(id);
  });

  // IF ERROR CAN GET ID
  peer.on("error", (id) => {
    console.log("error id " + id);
  });

  //Get and post requests
  async function sendId() {
    try {
      postVideoId(youid, id).then((response) => {
        /* if (response) {
            console.log("Gelen veri: ", response);
                }*/
        console.log(response);
        console.log(id);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function getId() {
    try {
      getVideoId(id).then((response) => {
        console.log("Gelen veri: ", response);
      });
      codeid = getVideoId(id);

      codeid.then((value) => {
        codeid = value;
        console.log("codeid:" + codeid);

        console.log(id);
      });
    } catch (error) {
      console.log(error);
    }
  }

  peer.on("connection", (conn) => {
    console.log("message....");
    conn.on("data", (data) => {
      console.log("new data " + data);
    });
    conn.on("open", () => {
      console.log("new message");
    });
  });

  // HANDLE CONNECTTION
  peer.on("call", async (call) => {
    // open webcam
    await navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
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
  let renderYouwebcam = (stream) => {
    console.log(stream);
    videoEl.srcObject = stream;
    videoEl.play();
  };
</script>

<Drawer />
<RateUser
  bind:userRate={userRateScore}
  bind:open={openUserRate}
  bind:clicked={sendRateResponse}
/>
<div class="card">
  <div class="card-body">
    <h1 class="ms-5 display-1"><i class="bi bi-camera-video-fill" /></h1>
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
      <div>
        <video
          id="small-video"
          bind:this={videocurrent}
          width="300"
          height="300"
          autoplay="true"
        >
          <track kind="captions" src="" />
        </video>

        <div style="margin-left: 80px; margin-top: 15px;">
          <IconButton
            on:click={IconChangeAudio}
            touch
            type="button"
            class="material-icons rounded-circle text-white"
            style="background-color: black;"
          >
            {clicked ? "volume_off" : "volume_up"}
          </IconButton>
          <IconButton
            on:click={IconChangeMic}
            touch
            type="button"
            class="material-icons rounded-circle text-white"
            style="background-color: black;"
          >
            {clickedMic ? "mic_off" : "mic"}
          </IconButton>
          <IconButton
            on:click={IconChangeCam}
            touch
            type="button"
            class="material-icons rounded-circle text-white"
            style="background-color: black;"
          >
            {clickedCam ? "videocam" : "videocam_off"}
          </IconButton>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-evenly align-items-center">
      {#if localStorage.getItem("role").toLowerCase() == "mentor"}
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
      {/if}

      {#if localStorage.getItem("role").toLowerCase() == "mentee"}
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
      {/if}

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
  </div>
</div>

<style>
  .card {
    width: 80rem;
    height: 45rem;
    margin: auto;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px #000000;
  }
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
