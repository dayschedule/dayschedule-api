import Api from "../api";
import { Resource } from "./types";

class Resources {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(): Promise<Resource[]> {
    return this.api.get(`/resources`);
  }

  async get(id: string): Promise<Resource> {
    return this.api.get(`/resources/${id}`);
  }

  async create(data: Resource): Promise<any> {
    return this.api.post(`/resources`, data);
  }

  async update(id: string, data: Resource): Promise<any> {
    return this.api.put(`/resources/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/resources/${id}`);
  }
}

export default Resources;
