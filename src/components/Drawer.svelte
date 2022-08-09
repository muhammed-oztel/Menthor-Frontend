<script lang="ts">
  import Drawer, { AppContent, Content, Header, Title } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text } from "@smui/list";


  let open = false;
  let active = "";

  let role;
  $: role = localStorage.getItem("role")

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
    <Content>
      <List>
        <Item
          href={`/profil/${id}`}
          on:click={() => {
            setActive("Gray Kittens");
            localStorage.setItem("target", localStorage.getItem("uid"));
          }}
        >
          <Text>Profil</Text>
        </Item>
        <Item href="/panel" on:click={() => setActive("panel")}>
          <Text>Panel</Text>
        </Item>
        <Item href="/takvim" on:click={() => setActive("takvim")}>
          <Text>Takvim</Text>
        </Item>
        <Item href="/dosyalar" on:click={() => setActive("dosyalar")}>
          <Text>Dosyalar</Text>
        </Item>

        <Item href="/ayarlar" on:click={() => setActive("ayarlar")}>
          <Text>Ayarlar</Text>
        </Item>
        <Item
          href="/"
          on:click={() => {
            localStorage.clear();
            setActive("çıkış");
          }}
        >
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
