<script>
    import SvelteTypedJs from "svelte-typed-js";
    let sectors = ["Yazılım Geliştirme", "Kariyer Planlama"];
</script>

<div>
    Mentorluk Desteği Sunulan Alanlar:
    <SvelteTypedJs strings={sectors} loop="true" typeSpeed="5">
        <span class="typing" />
    </SvelteTypedJs>
</div>

<style>
</style>
