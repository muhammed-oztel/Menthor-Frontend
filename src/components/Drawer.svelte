<script lang="ts">
  import Drawer, { AppContent, Content, Header, Title } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text } from "@smui/list";


  let open = false;
  let active = "";
  

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
<<<<<<< HEAD
          href={`/profil/${id}`}
          on:click={() => {
            setActive("Gray Kittens");
            localStorage.setItem("target", localStorage.getItem("uid"));
          }}
=======
          href={`profil/${id}`}
          on:click={() => setActive("Profil")}
          activated={active === "Profil"}
>>>>>>> 9e6ea787b27f008b608ecfde128ea20c994fc031
        >
          <Text>Profil</Text>
        </Item>
        <Item
          href="/panel"
          on:click={() => setActive("Panel")}
          activated={active === "Panel"}
        >
          <Text>Panel</Text>
        </Item>
        <Item
          href="/takvim"
          on:click={() => setActive("Takvim")}
          activated={active === "Takvim"}
        >
          <Text>Takvim</Text>
        </Item>
        <Item
          href="/dosyalar"
          on:click={() => setActive("Dosyalar")}
          activated={active === "Dosyalar"}
        >
          <Text>Dosyalar</Text>
        </Item>
        <Item
          href="/ayarlar"
          on:click={() => setActive("Ayarlar")}
          activated={active === "Ayarlar"}
        >
          <Text>Ayarlar</Text>
        </Item>

        <Item
          href="/"
          on:click={() => {
            localStorage.clear()
            setActive("Çıkış ")
          }}
          activated={active === "Çıkış "}
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
