<script>
  import { Router, Route } from "svelte-routing";
  import LoginPage from "./pages/LoginPage.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Profile from "./pages/Profile.svelte";
  import RegisterPage from "./pages/RegisterPage.svelte";
  import Panel from "./pages/MentorMenteePage.svelte";
  import Settings from "./pages/Settings.svelte";
  import Calendar from "./pages/Calendar.svelte";
  import Home from "./pages/Home.svelte";
  import Folder from "./pages/Folder.svelte";
  import VideoCall from "./pages/VideoCall.svelte";
  import ContactUs from "./pages/ContactUs.svelte";
  let token;
  $: token = localStorage.getItem("token");
</script>

<Router>
  {#if token}
    <Route path="profil" component={Profile} />
    <Route path="takvim" component={Calendar} />
    <Route path="ayarlar" component={Settings} />
    <Route path="panel" component={Panel} />
    <Route path="dosyalar" component={Folder} />
    <Route path="videocall" component={VideoCall} />
  {/if}
  <Route path="giris" component={LoginPage} />
  <Route path="kayit" component={RegisterPage} />
  <Route path="bizeulasin" component={ContactUs} />
  <Route path="/" component={Home} />
  <Route path="*" component={NotFound} />
</Router>

<style>
</style>
