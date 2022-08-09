<script>
  import FullCalendar, { Calendar, Draggable } from "svelte-fullcalendar";
  import daygridPlugin from "@fullcalendar/daygrid";
  import timegridPlugin from "@fullcalendar/timegrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import trLocale from "@fullcalendar/core/locales/tr";
  import CalendarEdit from "../components/CalendarEdit.svelte";
  import Drawer from "../components/Drawer.svelte";
  import { isAnOverlapEvent } from "../../scripts/calendarOverlap";
  import {
    postCreateEvent,
    getEventList,
    putUpdateEvent,
    deleteEvent,
  } from "../services/calendar";
  import { onMount } from "svelte";

  onMount(async () => {
    getEventList({ matchId: 1 }).then((response) => {
      console.log(response);
      options = { ...options, events: response };
    });
  });

  let date;
  let openModal = false;
  let isEdit, isCreate, modalResponse;
  $: {
    if (modalResponse == "create") {
      handleCreateEvent();
    } else if (modalResponse == "edit") {
      handleUpdateEvent();
    } else if (modalResponse == "delete") {
      handleDeleteEvent();
    }
  }
  let options = {
    dateClick: handleDateClick,
    locale: trLocale,
    droppable: true,
    editable: false,
    events: [],
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
    eventOverlap: false,
    selectOverlap: false,

    eventClick: handleEventClick,
  };
  let calendarComponentRef;
  let modalEvent;
  let events = {};

  function handleEventClick(info) {
    modalEvent = options.events.find((event) => event.id == info.event.id);
    isEdit = true;
  }
  function handleDateClick() {
    isCreate = true;
    modalResponse = "nothing";
  }

  function handleCreateEvent() {
    isCreate = false;

    console.log("We are here");
    let fullCalenderevent = {
      title: modalEvent.title,
      description: modalEvent.description,
      start: modalEvent.start,
      end: modalEvent.end,
    };
    console.log(fullCalenderevent);
    console.log(
      "Check for an overlap event: ",
      isAnOverlapEvent(options.events, fullCalenderevent)
    );
    if (isAnOverlapEvent(options.events, fullCalenderevent)) {
      console.log("Overlap event");
      alert("Seçtiğiniz saatte görüşme zaten mevcut!");
    } else {
      postCreateEvent(fullCalenderevent).then((response) => {
        console.log(response);
        getEventList().then((response) => {
          console.log();
          console.log(response);
          options = {
            ...options,
            events: response,
          };
        });
      });
    }

    // reset modalEvent to default
    modalEvent = {
      title: "",
      description: "",
      start: "",
      end: "",
    };
    modalResponse = "nothing";
  }
  function handleUpdateEvent() {
    console.log("We are here in edit");
    // Update the selected event data
    console.log(modalEvent);
    let updatedEvent = {
      ...modalEvent,
      title: modalEvent.title,
      description: modalEvent.description,
      start: modalEvent.start,
      end: modalEvent.end,
    };

    putUpdateEvent(updatedEvent).then((response) => {
      console.log(response);
      getEventList({ matchId: 1 }).then((response) => {
        console.log();
        console.log(response);
        options = {
          ...options,
          events: response,
        };
      });
    });
    console.log("Updated Event: ", updatedEvent);
    // replace the old event with updated event based on event id
    options = {
      ...options,
      events: options.events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      ),
    };
    // reset modalEvent to default
    modalEvent = {
      title: "",
      description: "",
      start: "",
      end: "",
    };
    modalResponse = "nothing";
  }

  function handleDeleteEvent() {
    deleteEvent(modalEvent).then((response) => {
      console.log(response);
      getEventList({ matchId: 1 }).then((response) => {
        console.log();
        console.log(response);
        options = {
          ...options,
          events: response,
        };
      });
    });

    modalResponse = "nothing";
    modalEvent = {
      title: "",
      description: "",
      start: "",
      end: "",
    };
  }

  let errors = { title: "", duration: "" };
</script>

<CalendarEdit
  bind:calendarEvent={modalEvent}
  bind:response={modalResponse}
  bind:openCreate={isCreate}
  bind:openEdit={isEdit}
/>
<Drawer />

<div class="container">
  <div class="row align-items-center">
    <div class="card card-rounded shadow border-0">
      <div class="card-body flex-column-center">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col mb-3 text-muted">
                <h1 class="card-title mb-2">Takvim</h1>
              </div>
            </div>
          </div>
          <div class="col justify-content-center">
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
