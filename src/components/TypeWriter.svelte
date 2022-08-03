<script>
    import SvelteTypedJs from "svelte-typed-js";
    let sectors = [
        "Yazılım Geliştirme",
        "Kariyer Planlama",
        "Tasarım ve Dizayn",
        "E-Ticaret Yönetimi",
        "Satış ve Pazarlama",
        "İş Yönetimi",
    ];
</script>

<div>
    Mentorluk Desteği Sunulan Alanlar:
    <SvelteTypedJs strings={sectors} loop="true" typeSpeed="5">
        <span class="typing" />
    </SvelteTypedJs>
</div>

<style>
</style>
