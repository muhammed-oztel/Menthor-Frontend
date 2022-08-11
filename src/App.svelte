<script>
  import { Router, Route, navigate } from "svelte-routing";
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
  import EmailVerification from "./pages/EmailVerification.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import { onMount } from "svelte";
  let token;
  $: token = localStorage.getItem("token");
  let searchId;
  $: searchId = localStorage.getItem("target");

  let role;
  $: role = localStorage.getItem("role");
  onMount(() => {
    if (token) {
      let target = localStorage.getItem("uid");
      navigate(`/profil/${target}`);
    }
  });
</script>

<Router>
  <Route path="profil/:id">
    <Profile id={searchId} />
  </Route>
  {#if role == "admin"}
    <Route path="dashboard" component={Dashboard} />
  {/if}
  {#if token && role != "admin"}
    <Route path="takvim" component={Calendar} />
    <Route path="ayarlar" component={Settings} />
    <Route path="panel" component={Panel} />
    <Route path="dosyalar" component={Folder} />
    <Route path="videocall" component={VideoCall} />
  {/if}
  <Route path="giris" component={LoginPage} />
  <Route path="kayit" component={RegisterPage} />
  <Route path="email" component={EmailVerification} />
  <Route path="bizeulasin" component={ContactUs} />
  <Route path="/" component={Home} />
  <Router path="*" component={NotFound} />
</Router>

<style>
</style>
