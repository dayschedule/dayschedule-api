import { Booking } from "./types";
import Api from "../api";

class Bookings {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(params: any): Promise<Booking[]> {
    return this.api.get(`/bookings`, params);
  }

  async get(id: string): Promise<Booking> {
    return this.api.get(`/bookings/${id}`);
  }

  async create(data: Booking): Promise<any> {
    return this.api.post(`/bookings`, data);
  }

  async update(id: string, data: Booking): Promise<any> {
    return this.api.put(`/bookings/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/bookings/${id}`);
  }
}

export default Bookings;
