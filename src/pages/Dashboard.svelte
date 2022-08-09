<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import Drawer from "../components/Drawer.svelte";
  import Fab, { Icon, Label } from "@smui/fab";
  import Match from "../components/Match.svelte";
  let clicked = 0;
  let mentorList = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ];
  let menteeList = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ];
</script>

<Drawer />
<Tabs>
  <TabList>
    <Tab>Eşleştirme</Tab>
    <Tab>Kullanıcı Ayarları</Tab>
    <Tab>Detaylar</Tab>
  </TabList>

  <TabPanel>
    <div class="d-flex justify-content-center align-items-center mt-admin">
      <div class="card text-start shadow-lg rounded p-4 me-5">
        <h4 class="text-center mt-3">Mentor Listesi</h4>
        <div class="card-body">
          <p class="card-text">
            <Match class="mentor" list={mentorList} />
          </p>
        </div>
      </div>
      <div class="me-5">
        <Fab on:click={() => clicked++} extended>
          <Icon class="material-icons">escalator_warning</Icon>
          <Label>Eşleştir</Label>
        </Fab>
      </div>
      <div class="card text-start shadow-lg rounded p-4">
        <h4 class="text-center mt-3">Mentee Listesi</h4>
        <div class="card-body">
          <p class="card-text">
            <Match class="mentee" list={menteeList} />
          </p>
        </div>
      </div>
    </div>
  </TabPanel>

  <TabPanel>
    <h2>Panel Two</h2>
  </TabPanel>

  <TabPanel>
    <h2>Panel Three</h2>
  </TabPanel>
</Tabs>

<style>
  .mt-admin {
    margin-top: 10rem;
  }
  .card-body {
    height: 400px;
    width: 400px;
    overflow: hidden;
  }
  .card-body:hover {
    overflow-y: scroll;
  }
  .rounded {
    border-radius: 10px !important;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 14px;
    animation: ease-in-out;
  }
  @keyframes ease-in-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
</style>
