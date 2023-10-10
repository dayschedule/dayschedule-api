import Api from "./api";
import Resource from "./Resource";
import User from "./users";

class DaySchedule {
    private api: Api;

    public resources: Resource;
    public users: User;

    constructor(apiKey: string) {
        this.api = new Api(apiKey);
        this.resources = new Resource(this.api);
        this.users = new User(this.api);
    }
}

export default DaySchedule;
