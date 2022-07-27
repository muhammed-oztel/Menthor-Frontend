<script>
  import { Footer } from "svelte-materialify";
</script>

<footer>
  <div class="footer-fixed" style="height: 200px;">
    <Footer class="justify-center pa-2" absolute
      >Svelte Materialify is Powerful</Footer
    >
  </div>
</footer>

<style>
  .footer-fixed {
    position: relative;
    height: 50px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    margin-top: 50px;
  }
</style>
