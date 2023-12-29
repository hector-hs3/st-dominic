import { TimeSlot, TypeOfDays } from "types";

export const schedule: { [Day in TypeOfDays]: TimeSlot[] } = {
  weekday: [
    {
      time: "8:30 am",
      language: "English",
      location: "Chapel",
    },
    {
      time: "7:30 pm",
      language: "Spanish",
      location: "Chapel",
    },
  ],
  saturday: [
    {
      time: "7:00 pm",
      language: "Spanish",
      location: "Church",
    },
  ],
  sunday: [
    {
      time: "8:00 am",
      language: "English",
      location: "Church",
    },
    {
      time: "9:30 am",
      language: "Spanish",
      location: "Church",
    },
    {
      time: "11:30 am",
      language: "Bilingual",
      location: "Church",
    },
    {
      time: "1:00 pm",
      language: "Spanish",
      location: "Church",
    },
    {
      time: "6:00 pm",
      language: "Spanish",
      location: "Church",
    },
  ],
};
