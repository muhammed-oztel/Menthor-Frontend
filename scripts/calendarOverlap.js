export function isAnOverlapEvent(events, eventToCheck) {
  // Function takes an array of events and an event to check for overlap.
  // Returns true if the event to check overlaps with any event in the array.
  // Returns false if the event to check does not overlap with any event in the array.
  // If any time slot is overlapping with the other event than return true
  if (events.length==0) return false;
  for (let i = 0; i < events.length; i++) {
    // console.log("event i: ", events[i])
    // console.log(events[i].startTime <= eventToCheck.endTime)
    if (
      (events[i].start <= eventToCheck.end &&
        events[i].end >= eventToCheck.end) || // if the end of the event is in the middle of the other event
      (events[i].start <= eventToCheck.start &&
        events[i].end >= eventToCheck.start) || // if the start of the event is in the middle of the other event
      (events[i].start <= eventToCheck.end &&
        events[i].end >= eventToCheck.start) // if the event is in the middle of the other event
    ) {
      return true;
    }
  }
  return false;
}
