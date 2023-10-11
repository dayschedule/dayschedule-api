import Api from "./api";
import Resources from "./Resources";
import Users from "./Users";

class DaySchedule {
    private api: Api;

    public resources: Resources;
    public users: Users;

    constructor(apiKey: string) {
        this.api = new Api(apiKey);
        this.resources = new Resources(this.api);
        this.users = new Users(this.api);
    }
}

export default DaySchedule;
