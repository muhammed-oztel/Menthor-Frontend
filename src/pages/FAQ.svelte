<script lang="ts">
    import FaqExpandable from "../components/FaqExpandable.svelte";
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<main>
    <Navbar />
    <div class="container mt-6">
        <div class="d-flex flex-column  align-items-center">
            <FaqExpandable />
        </div>
    </div>
    <div class="fixed-bottom"><Footer /></div>
</main>

<style>
    main {
        margin: 0;
        height: 100%;
        overflow: hidden;
    }
    .mt-6 {
        margin-top: 200px;
    }
</style>
