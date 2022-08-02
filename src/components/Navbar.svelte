<script>
    import Fab, { Label } from "@smui/fab";
    import { link } from "svelte-routing";
</script>

<div class="header fixed-top">
    <img
        id="logo"
        src="https://st3.depositphotos.com/2927609/18123/v/600/depositphotos_181237302-stock-illustration-thor-hammer-icon-vector-illustration.jpg"
        alt=""
    />
    MENTHOR

    <div class="margins ">
        <Fab color="primary" on:click={() => {}} extended>
            <a class="remove" href="/kayit" use:link>
                <Label>Üye Ol</Label>
            </a>
        </Fab>

        <Fab color="primary" on:click={() => {}} extended>
            <a class="remove" href="/giris" use:link>
                <Label>Giriş Yap</Label>
            </a>
        </Fab>
    </div>
</div>

<style>
    .remove {
        text-decoration: none;
        color: inherit;
    }
    .margins {
        position: fixed;
        left: 80%;
        top: 2%;
    }

    .header {
        padding: 20px;

        background: black;
        color: white;
        font-size: 30px;
    }
    #logo {
        width: 50px;
        height: 50px;
    }
</style>
