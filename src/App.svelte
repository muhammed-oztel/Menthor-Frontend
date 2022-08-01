<script>
  import Router from "svelte-spa-router";
  import RegisterPage from "./pages/RegisterPage.svelte";
  import LandingPage from "./pages/LandingPage.svelte";
  import LoginPage from "./pages/LoginPage.svelte";
  import Profile from "./pages/Profile.svelte";
  import Settings from "./pages/Settings.svelte";
import Files from "./pages/Files.svelte";
import MentorMenteePage from "./pages/MentorMenteePage.svelte";
  let routes = {
    "/": LandingPage,
    "/RegisterPage": RegisterPage,
    "/LoginPage": LoginPage,
    "/Profile": Profile,
    "/Settings": Settings,
    "/Files" : Files,
    "/MentorMenteePage" : MentorMenteePage,
  };
</script>

<!-- markup (zero or more items) goes here -->

<Router {routes} />

<!-- <Footer /> -->
<style>
  /* your styles go here */
</style>
