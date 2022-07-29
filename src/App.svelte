<script>
  import Router from "svelte-spa-router";
  import RegisterPage from "./pages/RegisterPage.svelte";
  import LandingPage from "./pages/LandingPage.svelte";
  import LoginPage from "./pages/LoginPage.svelte";
  import Profile from "./pages/Profile.svelte";
  let routes = {
    "/": LandingPage,
    "/RegisterPage": RegisterPage,
    "/LoginPage": LoginPage,
    "/Profile": Profile,
  };
</script>

<!-- markup (zero or more items) goes here -->

<Router {routes} />

<!-- <Footer /> -->
<style>
  /* your styles go here */
</style>
