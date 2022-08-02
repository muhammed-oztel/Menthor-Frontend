<script>
     import { Input } from '@smui/textfield';
   import Paper from '@smui/paper';
   import { Icon } from '@smui/common';
   import Fab, { Label } from "@smui/fab";
   import { link } from "svelte-routing";
    let value = "";

  function doSearch() {
    alert("Search for " + value);
  }
</script>

<div class="header fixed-top">
    <img
        id="logo"
        src="https://st3.depositphotos.com/2927609/18123/v/600/depositphotos_181237302-stock-illustration-thor-hammer-icon-vector-illustration.jpg"
        alt=""
    />
    MENTHOR

    <div class="solo-demo-container solo-container">
        <Paper class="solo-paper" elevation={6}>
          <Icon class="material-icons">search</Icon>
          <Input
            bind:value
            
            placeholder="Mentorlarımızı Keşfedin..."
            class="solo-input"
          />
        </Paper>
        <Fab
          on:click={doSearch}
          disabled={value === ''}
          color="primary"
          mini
          class="solo-fab"
        >
          <Icon class="material-icons">arrow_forward</Icon>
        </Fab>
      </div>

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
    .solo-demo-container {
   
    background-color: var(--mdc-theme-background, #000000);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
 
  .solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
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
