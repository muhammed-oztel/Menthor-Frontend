<script>
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";
  import CharacterCounter from "@smui/textfield/character-counter";
  import SveltyPicker from "svelty-picker";
  import { tr } from "../services/global";

  export let open = false;
  let calEventStartDate, calEventEndDate;
  export let calendarEvent = {
    title: "",
    description: "",
    start: "",
    end: "",
    id: "",
  };
  export let response = "Nothing yet.";

  // function that takes inputs from the form and creates a new event object
  // function createEvent() {
  //   calendarEvent.title = newEventDate.title;
  //   calendarEvent.description = newEventDate.description;
  //   calendarEvent.start = newEventDate;
  //   calendarEvent.end = newEventDate;
  //   calendarEvent.id = newEventDate.id;
  //   console.log(calendarEvent);
  // }
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
        textarea
        input$maxlength={100}
        variant="outlined"
        bind:value={calendarEvent.description}
        label="Açıklama"
      >
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
    </div>
    <div class="row mt-2" style="max-width: 400px;">
      <h6 class="text-dark">Görüşme Başlangıç Tarihi</h6>
      <div class="col">
        <SveltyPicker
          i18n={tr}
          placeholder={"YYYY-AA-GG HH:MM"}
          inputClasses="form-control"
          format="yyyy-mm-dd hh:ii"
          bind:value={calendarEvent.start}
        />
      </div>
      <h6 class="text-dark">Görüşme Bitiş Tarihi</h6>
      <div class="col">
        <SveltyPicker
          i18n={tr}
          placeholder={"YYYY-AA-GG HH:MM"}
          inputClasses="form-control"
          format="yyyy-mm-dd hh:ii"
          bind:value={calendarEvent.end}
        />
      </div>
    </div>
  </Content>
  <Actions>
    <Button
      on:click={() => {
        // createEvent();
        response = "create";
      }}
    >
      <Label>Ekle</Label>
    </Button>
    <Button
      on:click={() => {
        response = "close";
        calendarEvent = {
          title: "",
          description: "",
          start: "",
          end: "",
          id: "",
        };
      }}
    >
      <Label>Kapat</Label>
    </Button>
  </Actions>
</Dialog>
