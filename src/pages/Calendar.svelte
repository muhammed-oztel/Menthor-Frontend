<script>
  import FullCalendar, { Calendar } from "svelte-fullcalendar";
  import daygridPlugin from "@fullcalendar/daygrid";
  import timegridPlugin from "@fullcalendar/timegrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import Textfield from "@smui/textfield";
  import SveltyPicker from "svelty-picker";
  import Button, { Label } from "@smui/button";
  import trLocale from "@fullcalendar/core/locales/tr";
  import CalendarEdit from "../components/CalendarEdit.svelte";

  let date;
  let isEdit;

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
    dateClick: handleDateClick,
    locale: trLocale,
    droppable: true,
    editable: false,
    events: [
      // initial event data
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
    eventColor: "black",

    eventClick: function (info) {
      //   console.log(info.);
      // remove the event from the calendar by id
      isEdit = true;
      // if (confirm("Görüşmeyi iptal etmek istiyor musunuz?")) {
      //   console.log(info.event.id);
      //   options = {
      //     ...options,
      //     events: options.events.filter((event) => event.id != info.event.id),
      //   };
      //   console.log(options.events);
      // }
    },
  };
  let calendarComponentRef;
  let eventData;

  let events = {};
  function handleDateClick() {
    isEdit = true;
    // const { events } = options;
    // const calendarEvents = [...events, eventData];

    // options = {
    //   ...options,
    //   events: calendarEvents,
    // };
    // console.log("eklendi");
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
      handleDateClick();
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

<CalendarEdit bind:open={isEdit} />
<div class="container">
  <div class="row align-items-center vh-100">
    <div class="card card-rounded shadow border-0">
      <div class="card-body flex-column-center">
        <div class="row">
          <div class="col-4">
            <div class="row">
              <div class="col mb-3 text-muted">
                <h1 class="card-title mb-2">Takvim</h1>
              </div>
            </div>
            <form on:submit|preventDefault={submitHandler}>
              <div class="row">
                <div class="col">
                  <div class="mb-2">
                    <h2>Görüşme Başlığı</h2>
                    <Textfield
                      class=""
                      variant="outlined"
                      bind:value={value.title}
                      style="min-width: 300px;"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <h2>Görüşme Tarihi</h2>
                <div class="col" style="max-width: 300px;">
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
          <div class="col-8 justify-content-center">
            <div class="demo-app">
              <div class="demo-app-calendar">
                <FullCalendar bind:this={calendarComponentRef} {options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .demo-app {
    width: 60vw;
    height: 70vh;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
  }

  .demo-app-calendar {
    width: 100%;
    flex-grow: 1;
    max-width: 800px;
  }
</style>
