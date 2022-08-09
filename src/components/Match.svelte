<script>
  import List, { Item, Graphic, Label } from "@smui/list";
  import Radio from "@smui/radio";
  export let list;
  let selected = "";
  console.log(selected);
</script>

<div>
  <List class="demo-list" radioList>
    {#each list as item}
      <Item>
        <Graphic>
          <Radio bind:group={selected} value={item.name} />
        </Graphic>
        <Label>{item.name}</Label>
      </Item>
    {/each}
  </List>
</div>

<style>
</style>
