<script lang="ts">
  import Drawer, { AppContent, Content, Header, Title } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator } from "@smui/list";

  let open = false;
  let active = "";

  let role;
  $: role = localStorage.getItem("role");

  function setActive(value) {
    active = value;
  }
  export let id;
  id = localStorage.getItem("target") || localStorage.getItem("uid");
</script>

<div>
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Menthor</Title>
    </Header>
    <Separator />
    <Content>
      <List>
        <Item
          href={`/profil/${id}`}
          on:click={() => {
            setActive("Gray Kittens");
            localStorage.setItem("target", localStorage.getItem("uid"));
          }}
        >
          <Graphic class="material-icons" aria-hidden="true">
            account_circle
          </Graphic>
          <Text>Profil</Text>
        </Item>
        <Item href="/panel" on:click={() => setActive("panel")}>
          <Graphic class="material-icons" aria-hidden="true">
            supervised_user_circle
          </Graphic>
          <Text>Panel</Text>
        </Item>
        <Item href="/takvim" on:click={() => setActive("takvim")}>
          <Graphic class="material-icons" aria-hidden="true">event</Graphic>
          <Text>Takvim</Text>
        </Item>
        <!-- <Item href="/dosyalar" on:click={() => setActive("dosyalar")}>
          <Graphic class="material-icons" aria-hidden="true">folder</Graphic>
          <Text>Dosyalar</Text>
        </Item> -->

        <Item href="/ayarlar" on:click={() => setActive("ayarlar")}>
          <Graphic class="material-icons" aria-hidden="true">settings</Graphic>
          <Text>Ayarlar</Text>
        </Item>
        <Item
          href="/"
          on:click={() => {
            localStorage.clear();
            setActive("çıkış");
          }}
        >
          <Graphic class="material-icons" aria-hidden="true">logout</Graphic>
          <Text>Çıkış</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">
      <Button on:click={() => (open = !open)}><Label>Menü</Label></Button>
    </main>
  </AppContent>
</div>

<style>
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
