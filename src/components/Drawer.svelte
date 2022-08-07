<script lang="ts">
  import Drawer, { AppContent, Content, Header, Title } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text } from "@smui/list";

  let open = false;
  let active = "";

  function setActive(value) {
    active = value;
  }
</script>

<div>
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Menthor</Title>
    </Header>
    <Content>
      <List>
        <Item
          href="/profil"
          on:click={() => setActive("profil")}
          activated={active === "profil"}
        >
          <Text>Profil</Text>
        </Item>
        <Item
          href="/panel"
          on:click={() => setActive("panel")}
          activated={active === "panel"}
        >
          <Text>Panel</Text>
        </Item>
        <Item
          href="/takvim"
          on:click={() => setActive("calendar")}
          activated={active === "calendar"}
        >
          <Text>Takvim</Text>
        </Item>
        <Item
          href="/dosyalar"
          on:click={() => setActive("files")}
          activated={active === "files"}
        >
          <Text>Dosyalar</Text>
        </Item>
        <Item
          href="/ayarlar"
          on:click={() => setActive("settings")}
          activated={active === "settings"}
        >
          <Text>Ayarlar</Text>
        </Item>

        <Item
          href="/"
          on:click={() => {
            setActive("logout");
            localStorage.clear();
          }}
          activated={active === "logout"}
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
