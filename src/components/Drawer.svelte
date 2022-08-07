<script lang="ts">
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
  } from '@smui/drawer';
  import Button, { Label } from '@smui/button';
  import List, { Item, Text } from '@smui/list';
 
  let open = false;
  
 
  function setActive(value) {
   
  }
</script>
 




<div >
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Menthor</Title>
      
    </Header>
    <Content>
      <List>
        <Item
          href="/profil"
          on:click={() => setActive('Gray Kittens')}
         
        >
          <Text>Profil</Text>
        </Item>
        <Item
          href="/panel"
          on:click={() => setActive('A Space Rocket')}
       
        >
          <Text>Panel</Text>
        </Item>
        <Item
          href="/takvim"
          on:click={() => setActive('100 Pounds of Gravel')}
          
        >
          <Text>Takvim</Text>
        </Item>
        <Item
          href="/dosyalar"
          on:click={() => setActive('All of the Shrimp')}
          
        >
          <Text>Dosyalar</Text>
        </Item>
        <Item
          href="/ayarlar"
          on:click={() => setActive('A Planet with a Mall')}
          
        >
          <Text>Ayarlar</Text>
        </Item>

        <Item
        href="/"
        on:click={() => setActive('çıkış ')}
       
      >
        <Text>Çıkış</Text>
      </Item>
      </List>
    </Content>
  </Drawer>
 
  <AppContent class="app-content">
    <main class="main-content">
      <Button on:click={() => (open = !open)}
        ><Label>Menü</Label></Button
      >
     </main>
  </AppContent>
</div>
 

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  
 
  * :global(.app-content) {
    flex: auto;
    overflow:auto;
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