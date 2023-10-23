import Api from "../api";
import { Schedule } from "./types";

class Schedules {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(): Promise<Schedule[]> {
    return this.api.get(`/schedules`);
  }

  async get(id: string): Promise<Schedule> {
    return this.api.get(`/schedules/${id}`);
  }

  async create(data: Schedule): Promise<any> {
    return this.api.post(`/schedules`, data);
  }

  async update(id: string, data: Schedule): Promise<any> {
    return this.api.put(`/schedules/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/schedules/${id}`);
  }
}

export default Schedules;
