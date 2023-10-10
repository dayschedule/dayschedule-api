import Api from "./api";
import Resource from "./Resource";

class DaySchedule {
  private api: Api;

  public resources: Resource;

  constructor(apiKey: string) {
    this.api = new Api(apiKey);
    this.resources = new Resource(this.api);
  }
}

export default DaySchedule;
