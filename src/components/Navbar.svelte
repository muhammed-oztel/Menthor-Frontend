<script>
    import Fab, { Label } from "@smui/fab";
</script>

<div class="header fixed-top">
    <img
        id="logo"
        src="https://st3.depositphotos.com/2927609/18123/v/600/depositphotos_181237302-stock-illustration-thor-hammer-icon-vector-illustration.jpg"
        alt=""
    />
    MENTHOR

    <div class="margins ">
        <Fab color="primary" on:click={() => {}} href="#/RegisterPage" extended>
            <Label>Üye Ol</Label>
        </Fab>

        <Fab color="primary" on:click={() => {}} href="#/LoginPage" extended>
            <Label>Giriş Yap</Label>
        </Fab>
    </div>
</div>

<style>
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
