<script>
  import { link } from "svelte-routing";
  import Search from "./Search.svelte";
</script>

<nav class="navbar bg-dark px-3 py-4 mb-5">
  <div class="container-fluid">
    <a
      on:click={() => localStorage.removeItem("target")}
      class="navbar-brand d-flex align-items-center"
      href="/"
      use:link
    >
      <img
        src="https://st3.depositphotos.com/2927609/18123/v/600/depositphotos_181237302-stock-illustration-thor-hammer-icon-vector-illustration.jpg"
        alt="navbar-logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top navbar-logo me-3"
      />
      <h1>Menthor</h1>
    </a>
    <Search />
    <div class="d-flex align-items-center" use:link>
      <div class="me-3">
        <button class="btn btn-light rounded-pill py-2 px-3" type="submit">
          <strong
            ><a class="text-decoration-none text-dark" href="/kayit">
              KAYIT OL
            </a></strong
          >
        </button>
      </div>
      <button class="btn btn-light rounded-pill py-2 px-3" type="submit">
        <strong>
          <a class="text-decoration-none text-dark" href="/giris">GİRİŞ YAP</a>
        </strong>
      </button>
    </div>
  </div>
</nav>

<style>
  .navbar-brand {
    text-decoration: none;
    color: white;
  }
  .navbar-logo {
    height: 60px;
    width: 60px;
  }
  .bg-dark {
    background-color: black !important;
    color: white !important;
  }
</style>
