<script>
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
  import List, { Item, Graphic, Label } from '@smui/list';
  import Drawer from "../components/Drawer.svelte";
  import Radio from '@smui/radio';

  import Fab, {Icon} from '@smui/fab';
  let selected = 'Tom Hanks';
  let clicked = 0;

  </script>

<Drawer/>
  <Tabs>
    <TabList>
      <Tab>Eşleştirme</Tab>
      <Tab>Kullanıcı Ayarları</Tab>
      <Tab>Detaylar</Tab>
    </TabList>

    <TabPanel>
    <div>
      <div style="width: 35%; height: 450px; float: left; border-radius: 10px; margin-left: 10%; margin-top: 30px; overflow: scroll; padding: 30px; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
        <h2>Mentor</h2>
        <List class="demo-list" radioList>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Bruce Willis" />
            </Graphic>
            <Label>Bruce Willis</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Tom Hanks" />
            </Graphic>
            <Label>Tom Hanks</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Jack Nicholson" />
            </Graphic>
            <Label>Jack Nicholson</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Leonardo DiCaprio" />
            </Graphic>
            <Label>Leonardo DiCaprio</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Matt Damon" />
            </Graphic>
            <Label>Matt Damon</Label> 
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Jack Nicholson" />
            </Graphic>
            <Label>Jack Nicholson</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Leonardo DiCaprio" />
            </Graphic>
            <Label>Leonardo DiCaprio</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Matt Damon" />
            </Graphic>
            <Label>Matt Damon</Label> 
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Jack Nicholson" />
            </Graphic>
            <Label>Jack Nicholson</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Leonardo DiCaprio" />
            </Graphic>
            <Label>Leonardo DiCaprio</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Matt Damon" />
            </Graphic>
            <Label>Matt Damon</Label> 
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Tom Hanks" />
            </Graphic>
            <Label>Tom Hanks</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Jack Nicholson" />
            </Graphic>
            <Label>Jack Nicholson</Label>
          </Item>
        </List>
      </div>
      <div style="width: 35%;  height: 450px; float: right; margin-right: 10%;  border-radius: 10px;  margin-top: 30px; padding: 30px; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
        <h2>Mentee</h2>
        <List class="demo-list" radioList>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Bruce Willis" />
            </Graphic>
            <Label>Bruce Willis</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Tom Hanks" />
            </Graphic>
            <Label>Tom Hanks</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Jack Nicholson" />
            </Graphic>
            <Label>Jack Nicholson</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Leonardo DiCaprio" />
            </Graphic>
            <Label>Leonardo DiCaprio</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selected} value="Matt Damon" />
            </Graphic>
            <Label>Matt Damon</Label>
          </Item>
        </List>
      </div>
      <div class="margins" style="position: absolute; margin-top: 32%; margin-left: 45%;">
        <Fab on:click={() => clicked++} extended>
          <Icon class="material-icons"> escalator_warning</Icon>
          <Label>Eşleştir</Label>
        </Fab>
      </div>
    </div>
    </TabPanel>
  
    <TabPanel>
      <h2>Panel Two</h2>
    </TabPanel>
  
    <TabPanel>
      <h2>Panel Three</h2>
    </TabPanel>
  </Tabs>

  <style>
    * :global(.demo-list) {
    max-width: 300px;
  }
  </style>