<script>
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";
  import CharacterCounter from "@smui/textfield/character-counter";
  import SveltyPicker from "svelty-picker";
  import { tr } from "../../scripts/global";
  import * as yup from "yup";

  export let openCreate = false;
  export let openEdit = false;
  let open = false;
  $: open = openCreate ^ openEdit;
  export let calendarEvent = {
    title: "",
    description: "",
    start: "",
    end: "",
    id: "",
    editable: true,

    overlap: false,
  };
  export let response = "Nothing yet.";

  let schema = yup.object().shape({
    title: yup
      .string("Lütfen görüşme başlığını girin")
      .required("Lütfen görüşme başlığını girin")
      .max(50, "Görüşme başlığı en fazla 50 karakter olabilir"),
    description: yup
      .string(),
      start: yup
      .string("Lütfen görüşme başlangıç tarihini girin")
      .required("Lütfen görüşme başlangıç tarihini girin")
  });

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
    {#if openCreate}
      <Button
        on:click={() => {
          alert("Görüşme oluşturuluyor.");
          openEdit = false;
          openCreate = false;
          response = "create";
        }}
      >
        <Label>Ekle</Label>
      </Button>
    {:else if openEdit}
      <Button
        class="bg-danger text-white"
        style="text-transform: none;"
        on:click={() => {
          openEdit = false;
          openCreate = false;
          response = "delete";
        }}
      >
        <Label>Sil</Label>
      </Button>
      <Button
        on:click={() => {
          openEdit = false;
          openCreate = false;
          response = "edit";
        }}
      >
        <Label>Kaydet</Label>
      </Button>
    {/if}
    <Button
      on:click={() => {
        response = "close";
        openEdit = false;
        openCreate = false;

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
