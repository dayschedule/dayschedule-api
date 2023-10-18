import Activities from "./lib/Activities";
import Api from "./lib/api";
import Bookings from "./lib/Bookings";
import Contacts from "./lib/Contacts";
import Invitees from "./lib/Invitees";
import Pages from "./lib/Pages";
import Resources from "./lib/Resources";
import Schedules from "./lib/Schedules";
import Users from "./lib/Users";
import Workflows from "./lib/Workflows";

class DaySchedule {
  private api: Api;

  public resources: Resources;
  public users: Users;
  public bookings: Bookings;
  public pages: Pages;
  public schedules: Schedules;
  public workflows: Workflows;
  public contacts: Contacts;
  public activities: Activities;
  public invitees: Invitees;

  constructor(apiKey: string) {
    this.api = new Api(apiKey);
    this.resources = new Resources(this.api);
    this.users = new Users(this.api);
    this.bookings = new Bookings(this.api);
    this.pages = new Pages(this.api);
    this.schedules = new Schedules(this.api);
    this.workflows = new Workflows(this.api);
    this.contacts = new Contacts(this.api);
    this.activities = new Activities(this.api);
    this.invitees = new Invitees(this.api);
  }
}

export default DaySchedule;
