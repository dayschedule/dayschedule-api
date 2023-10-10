import DaySchedule from "./lib/Dayschedule";


const daySchedule = new DaySchedule(`${process.env.API_KEY}`);

// // daySchedule.resources.list().then((d) => {
// //   console.log("List ", d);
// // });

// daySchedule.resources.delete('').then((d) => {
//     console.log("Delete ", d);
// });

// daySchedule.resources.get('').then((d) => {
//     console.log("Get By Id ", d);
// });


// daySchedule.resources.update('', 
//     {"event_type":"one_on_one","notice":{"type":"days","value":0},"durations":[{"type":"minutes","value":30}],"slots":{"type":"minutes","value":30},"color":"#0052cc","capacity":{"is_unlimited":true,"is_public":false,"max":10,"type":"perday"},"break":{"after":0,"before":0},"period":{"type":"calendar_days","days":60,"specific":[]},"payment":{"is_enabled":false,"gateways":[]},"prices":[],"members":[],"org_id":287,"page_id":333,"user_id":758,"name":"Mobile Capacity Test","slug":"/mobile-capacity-test","type":"event","schedule_id":397,"language":"en-US","description":"","locations":[{"type":"google_meet","name":"Google Meet"}],"questions":[{"type":"text","name":"1695963612423","label":"Name","value":"","required":true,"options":[]},{"type":"email","name":"1695963612424","label":"Email address","value":"","required":true,"options":[]},{"type":"tel","name":"1695963612425","label":"Mobile number","value":"","required":true,"options":[]},{"type":"textarea","name":"1695963612426","label":"Please share anything that will help prepare for our meeting","value":"","required":false,"options":[]}],"settings":{"confirmation":{"redirect":{},"link":{},"type":"default"},"date_format":"MMM, DD YYYY","time_format":"h:mm a","privacy":{"type":"public"},"guest":{"is_allowed":true,"max_allowed":10,"is_chargeable":false},"policy":{"reschedule":{"is_enabled":true,"description":"","terms":{"type":"minutes","value":15}},"cancellation":{"is_enabled":true,"description":"","terms":{"type":"minutes","value":15}}},"prevent_duplicates":false,"require_approval":false,"email_to_host":true,"email_to_invitee":true,"skip_form":false,"hide_language":false,"hide_timezone":false,"attendees":[],"clock_24":false,"is_timezone_locked":false},"attachments":[],"is_enabled":true,"booking_url":"https://jaini.dayschedule.in","rank":1,"is_template":false,"created_at":"2023-09-28T05:52:21.175Z","updated_at":"2023-09-29T04:54:04.711Z","id":"65151495aede8f079f81ad5f"}
// ).then((d) => {
//     console.log("Update ", d);
// });

// daySchedule.users.list().then((d) => {
//     console.log(d);
// })
