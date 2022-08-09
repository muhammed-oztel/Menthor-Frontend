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
  let errors = { title: "", description: "", start: "", end: "" };
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
  let schema = yup.object().shape({
    title: yup
      .string()
      .required("Lütfen görüşme başlığını girin")
      .max(50, "Görüşme başlığı en fazla 50 karakter olabilir"),
    description: yup.string(),
    start: yup
      .string()
      .required("Lütfen görüşme başlangıç tarihini girin")
      .min(16, "Lütfen geçerli bir görüşme tarihi girin")
      .max(16, "Lütfen geçerli bir görüşme tarihi girin")
      .test(
        "start",
        "Görüşme başlangıç tarihi görüşme bitiş tarihinden sonra olamaz",
        (value) => value < calendarEvent.end
      ),
    end: yup
      .string()
      .required("Lütfen görüşme bitiş tarihini girin")
      .min(16, "Lütfen geçerli bir görüşme tarihi girin")
      .max(16, "Lütfen geçerli bir görüşme tarihi girin")
      .test(
        "end",
        "Görüşme bitiş tarihi görüşme başlangıç tarihinden önce olamaz",
        (value) => value > calendarEvent.start
      ),
  });

  async function submitHandler() {
    try {
      await schema.validate(calendarEvent, { abortEarly: false });
      errors = { title: "", description: "", start: "", end: "" };
    } catch (err) {
      console.log(err);
      errors = err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  }
</script>

<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Launch demo modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <form>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Görüşme Düzenle</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="row mt-2">
            <Textfield
              style="width: 400px;"
              variant="outlined"
              bind:value={calendarEvent.title}
              label="Görüşme Başlığı"
            />
            <small class="invalid-feedback d-block"
              >{#if errors.title}{errors.title}{/if}</small
            >
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
              <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter
              >
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
              <small class="invalid-feedback d-block"
                >{#if errors.start}{errors.start}{/if}</small
              >
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
            <small class="invalid-feedback d-block"
              >{#if errors.end}{errors.end}{/if}</small
            >
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">Close</button
          >
          <button
            type="submit"
            class="btn btn-primary"
            on:click={() => {
              submitHandler();

              // close modal
            }}>Save changes</button
          >
        </div>
      </div>
    </form>
  </div>
</div>
