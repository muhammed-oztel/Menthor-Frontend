<script>
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
  import List, { Item, Graphic, Label } from '@smui/list';
  import Drawer from "../components/Drawer.svelte";
  import Swal from "sweetalert2";
  import Radio from '@smui/radio';
  import Fab, {Icon} from '@smui/fab';
  import {getMatches, getUserForMatch, postMatch, DeleteMatchId} from '../services/dashboard';
  import { onMount } from "svelte";
  let selectedMentor = '';
  let selectedMentee = '';
  let selectedMatchToDelete;
  let matchList= [];
  let UserAllDash = [];
  let match = {
    mentor:"",
    mentee:""
  }

  console.log("*");


async function getAllUserInfo(){
  await getUserForMatch().then((response)=>{
    UserAllDash = response;
  })
  .catch((err) => {
        console.log(err);
      });
}

async function setMatch(){
  await postMatch(match);
  Swal.fire({
  icon: 'success',
  title: 'Eşleşme Başarılı',
  confirmButton: '#3085d6',
})
}

async function getMatchList(){
  await getMatches().then((response)=> {
    matchList = response;
    console.log(matchList);
  })
  .catch((err) => {
        console.log(err);
      });
}

async function DeleteMatch(){
  await DeleteMatchId(selectedMatchToDelete);
}


  onMount(() => {
    getAllUserInfo();
    getMatchList();
  });

</script>

<Tabs>
  <TabList>
    <Tab>Eşleştirme</Tab>
    <Tab>Mevcut Eşleşmeler</Tab>
    <Tab>Detaylar</Tab>
  </TabList>

  <TabPanel>
  <div>
    <div style="width: 35%; height: 450px; float: left; border-radius: 10px; margin-left: 10%; margin-top: 30px; overflow: scroll; padding: 30px; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
      <h2>Mentor</h2>
      <List class="demo-list" radioList>
        <ul>
            {#each UserAllDash as user (user.id)}
            {#if user.role === 'Mentor'}
                  <Radio bind:group={selectedMentor} bind:value={user.id}/>{user.name} {user.surname} {user.id}
                  <br>
                {/if}
            {/each}
        </ul>
    
      </List>
    </div>
    <div style="width: 35%;  height: 450px; float: right; margin-right: 10%;  border-radius: 10px;  margin-top: 30px; padding: 30px; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
      <h2>Mentee</h2>
      <List class="demo-list" radioList>
        <ul>
          {#each UserAllDash as user (user.id)}
          {#if user.role === 'Mentee'}
                <Radio bind:group={selectedMentee} bind:value={user.id}/>{user.name} {user.surname} {user.id}
                <br>
              {/if}
      
          {/each}
      </ul>
      </List>
    </div>
    <div class="margins" style="position: absolute; margin-top: 32%; margin-left: 45%;">
      <Fab on:click={ async ()=> {
        match = {
          mentor: selectedMentor,
          mentee:selectedMentee
        }
        setMatch();
      } } extended>
        <Icon class="material-icons"> escalator_warning</Icon>
        <Label>Eşleştir</Label>
      </Fab>
    </div>
  </div>
  </TabPanel>

  <TabPanel>
    <div style="width: 35%;  height: 450px; display-items: center; margin: auto; border-radius: 10px; padding: 30px; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
      <h2>Eşleştirilenler</h2>
      <List class="demo-list" radioList>
        <ul>
          {#each matchList as match (match.id)}
          {#if match.deleted === null}
                <Radio bind:group={selectedMatchToDelete} bind:value={match.id}/>{match.mentor} {match.mentee}
                <br>
                {/if}
          {/each}
          
      </ul>
      </List>
    </div>
    <div class="margins" style="margin-left: 45%; margin-top: 15px;">
            <Fab on:click={ async ()=> {
              DeleteMatch(selectedMatchToDelete);    
            } } extended>
              <Icon class="material-icons">person_remove</Icon>
              <Label>Eşleşmeyi Sil</Label>
            </Fab> 
            
          </div>
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