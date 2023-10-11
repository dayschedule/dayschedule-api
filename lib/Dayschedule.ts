import Api from "./api";
import Bookings from "./bookings";
import Pages from "./pages";
import Resources from "./Resources";
import Schedules from "./schedules";
import Users from "./Users";
import Workflows from "./Workflows";

class DaySchedule {
    private api: Api;

    public resources: Resources;
    public users: Users;
    public bookings: Bookings;
    public pages: Pages;
    public schedules: Schedules;
    public workflows: Workflows;

    constructor(apiKey: string) {
        this.api = new Api(apiKey);
        this.resources = new Resources(this.api);
        this.users = new Users(this.api);
        this.bookings = new Bookings(this.api);
        this.pages = new Pages(this.api);
        this.schedules = new Schedules(this.api);
        this.workflows = new Workflows(this.api);
    }
}

export default DaySchedule;
