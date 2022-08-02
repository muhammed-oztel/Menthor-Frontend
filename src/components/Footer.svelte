<script>
  import { link } from "svelte-routing";
</script>

<!-- markup (zero or more items) goes here -->
<div class="footer">
  <footer class="py-3 ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a href="/" class="nav-link px-2 text-muted" use:link>Ana Sayfa</a>
      </li>
      <li class="nav-item">
        <a href="/ozellikler" class="nav-link px-2 text-muted" use:link
          >Özellikler</a
        >
      </li>
      <li class="nav-item">
        <a href="/faq" class="nav-link px-2 text-muted" use:link>SSS</a>
      </li>
      <li class="nav-item">
        <a href="/takvim" class="nav-link px-2 text-muted" use:link>Takvim</a>
      </li>
      <li class="nav-item">
        <a href="/dosyalar" class="nav-link px-2 text-muted" use:link
          >Dosyalar</a
        >
      </li>
      <li class="nav-item">
        <a href="/hakkimizda" class="nav-link px-2 text-muted" use:link
          >Hakkımızda</a
        >
      </li>
    </ul>
    <p class="text-center text-muted">© 2022 Menthor</p>
  </footer>
</div>

<style>
  .footer {
    background-color: black;
    color: white;
  }
</style>
