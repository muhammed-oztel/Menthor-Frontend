<script>
  import FullCalendar, { Draggable } from "svelte-fullcalendar";
  import daygridPlugin from "@fullcalendar/daygrid";
  import timegridPlugin from "@fullcalendar/timegrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import Textfield from '@smui/textfield';
  import SveltyPicker from "svelty-picker";
  import Button, { Label } from "@smui/button";

  let date;
  export let value = { title: "Haftalık Toplantı", duration: "02:00" };
  const tr = {
    days: [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ],
    months: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],

    daysShort: ["Paz", "Pzt", "Sal", "Çarş", "Perş", "Cum", "Cmt", "Paz"],
    daysMin: ["Paz", "Pzt", "Sal", "Çarş", "Perş", "Cum", "Cmt", "Paz"],
    monthsShort: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    meridiem: ["am", "pm"],
    suffix: ["st", "nd", "rd", "th"],
    todayBtn: "Bugün",
    clearBtn: "Temizle",
    timeView: "Show time view",
    backToDate: "Back to calendar view",
  };
  let eventId = 1;
  let options = {
    // dateClick: handleDateClick,
    droppable: true,
    editable: false,
    events: [
      // initial event data
      { title: "New Event", start: new Date(), id: 0 },
    ],
    initialView: "dayGridMonth",
    plugins: [daygridPlugin, timegridPlugin, interactionPlugin],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    height: "100%",
    weekends: true,

    eventClick: function (info) {
      //   console.log(info.);
      // remove the event from the calendar by id
      console.log(info.event.id);
      options = {
        ...options,
        events: options.events.filter((event) => event.id != info.event.id),
      };
      console.log(options.events);
    },
  };
  let calendarComponentRef;
  let eventData;
  let isCreateEvent;

  let events = {};
  function handleDateClick() {
    const { events } = options;
    const calendarEvents = [...events, eventData];
    options = {
      ...options,
      events: calendarEvents,
    };
    console.log("eklendi");
  }

  let errors = { title: "", duration: "" };
  async function submitHandler() {
    try {
      errors = {};
      eventData = {
        title: value.title,
        duration: value.duration,
        start: date,
        id: eventId++,
      };
      console.log(eventData);
      handleDateClick()
      isCreateEvent = true;
    } catch (err) {
      errors = extractErrors(err);
    }
  }
  function extractErrors(err) {
    return err.inner.reduce((acc, err) => {
      console.log(err.path);
      return { ...acc, [err.path]: err.message };
    }, {});
  }
</script>

<div class="container">
  <div class="row">Görüşme Başlığı</div>
  <form on:submit|preventDefault={submitHandler}>
    <div class="row">
      <div class="col">
        <div class="mb-2">
          <Textfield
            class=""
            variant="outlined"
            bind:value={value.title}
            style="min-width: 400px;"
          />
          <small class="invalid-feedback d-block"
            >{#if errors.event}{errors.event}{/if}</small
          >
        </div>
      </div>
    </div>
    <div class="row ml-6">
      <div class="row">Görüşme Tarihi</div>
      <div class="row" style="max-width: 200px;">
        <SveltyPicker
          i18n={tr}
          placeholder={"YYYY-AA-GG HH:MM"}
          inputClasses="form-control"
          format="yyyy-mm-dd hh:ii"
          bind:value={date}
        />
      </div>

      <div class="mt-3">
        <Button
          color="primary"
          variant="raised"
          style="min-width: 100px; text-transform: none;"
          type="submit">Görüşmeyi oluştur</Button
        >
      </div>
    </div>
  </form>
</div>
<div class="demo-app">
  <div class="demo-app-calendar">
    <FullCalendar bind:this={calendarComponentRef} {options} />
  </div>
</div>

<style>
  :global(* > *) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .demo-app {
    width: 100vw;
    height: 50vh;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }

  .demo-app-calendar {
    width: 100%;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 900px;
  }
  :global(.draggable) {
    color: white;
    background: #3788d8;
    width: fit-content;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
  }
</style>
