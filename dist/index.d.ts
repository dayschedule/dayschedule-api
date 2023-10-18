import Activities from "./lib/Activities";
import Bookings from "./lib/Bookings";
import Contacts from "./lib/Contacts";
import Invitees from "./lib/Invitees";
import Pages from "./lib/Pages";
import Resources from "./lib/Resources";
import Schedules from "./lib/Schedules";
import Users from "./lib/Users";
import Workflows from "./lib/Workflows";
declare class DaySchedule {
    private api;
    resources: Resources;
    users: Users;
    bookings: Bookings;
    pages: Pages;
    schedules: Schedules;
    workflows: Workflows;
    contacts: Contacts;
    activities: Activities;
    invitees: Invitees;
    constructor(apiKey: string);
}
export default DaySchedule;
