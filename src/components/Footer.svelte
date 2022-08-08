<script>
  import { link } from "svelte-routing";
</script>

<div class="footer bg-dark">
  <footer class="py-3">
    <ul class="nav justify-content-center pb-3 mb-3 pt-3">
      <li class="nav-item">
        <a href="/" class="nav-link px-2 " use:link>Ana Sayfa</a>
      </li>
      <li class="nav-item">
        <a href="/takvim" class="nav-link px-2 " use:link>Takvim</a>
      </li>
      <li class="nav-item">
        <a href="/dosyalar" class="nav-link px-2 " use:link>Dosyalar</a>
      </li>
      <li class="nav-item">
        <a href="/bizeulasin" class="nav-link px-2 " use:link>Bize Ulaşın</a>
      </li>
    </ul>
    <p class="text-center ">© 2022 Menthor</p>
  </footer>
</div>

<style>
  li a {
    color: white;
    text-decoration: none;
  }
  footer {
    margin-top: auto;
  }
  .bg-dark {
    background-color: black !important;
    color: white !important;
  }
</style>
