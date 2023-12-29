import { schedule } from "configs/mass-schedule";
import { TimeSlot } from "types";

const DayNames = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function getScheduleFor(day: string): TimeSlot[] {
  switch (day) {
    case "saturday":
    case "sunday":
      return schedule[day];
    default:
      return schedule.weekday;
  }
}

export function getScheduleForToday() {
  const today = new Date().getDay();
  return getScheduleFor(DayNames[today]);
}

export function getScheduleForTomorrow() {
  const today = new Date().getDay();
  const tomorrow = (today + 1) % 7;
  return getScheduleFor(DayNames[tomorrow]);
}
