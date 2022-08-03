<script lang="ts">
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";

  let calendarEvent = {
    title: "",
    description: "",
    start: "",
    end: "",
    id: "",
  };
  export let open = false;
  let response = "Nothing yet.";
</script>

<Dialog
  bind:open
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="mandatory-title"
  aria-describedby="mandatory-content"
>
  <Title id="mandatory-title mt-2">Görüşme Düzenle</Title>
  <Content id="mandatory-content">
    <div class="row mt-2">
      <Textfield
        style="width: 400px;"
        variant="outlined"
        bind:value={calendarEvent.title}
        label="Görüşme Başlığı"
      />
    </div>
    <div class="row mt-2">
        <Textfield
          style="width: 400px;"
          variant="outlined"
          bind:value={calendarEvent.description}
          label="Görüşme Başlığı"
        />
      </div>
  </Content>
  <Actions>
    <Button on:click={() => (response = "Görüşme oluşturuldu")}>
      <Label>Ekle</Label>
    </Button>
    <Button on:click={() => (response = "Gürşme düzenleme kapandı.")}>
      <Label>Kapat</Label>
    </Button>
  </Actions>
</Dialog>
