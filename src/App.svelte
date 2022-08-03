<script>
  import { Router, Route } from "svelte-routing";
  import Files from "./pages/Files.svelte";
  import LoginPage from "./pages/LoginPage.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Profile from "./pages/Profile.svelte";
  import RegisterPage from "./pages/RegisterPage.svelte";
  import Panel from "./pages/MentorMenteePage.svelte";
  import Settings from "./pages/Settings.svelte";
  import Calendar from "./pages/Calendar.svelte";
  import Home from "./pages/Home.svelte";
  import Folder from "./pages/Folder.svelte";
  import ContactUs from "./pages/ContactUs.svelte";
</script>

<Router>
  <Route path="profil" component={Profile} />
  <Route path="panel" component={Panel} />
  <Route path="takvim" component={Calendar} />
  <Route path="dosyalar" component={Files} />
  <Route path="ayarlar" component={Settings} />
  <Route path="giris" component={LoginPage} />
  <Route path="kayit" component={RegisterPage} />
  <Route path="folder" component={Folder} />
  <Route path="/" component={Home} />
  <Route path="*" component={NotFound} />
  <Route path="iletisim" component={ContactUs}/>
</Router>

<style>
</style>
