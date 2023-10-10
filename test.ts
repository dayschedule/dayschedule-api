import DaySchedule from "./lib/DaySchedule";

const daySchedule = new DaySchedule(`${process.env.API_KEY}`);

daySchedule.resources.list().then((d) => {
  console.log("data", d);
});
