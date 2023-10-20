import Api from "../api";
import { Page } from "./types";

class Pages {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(): Promise<Page[]> {
    return this.api.get(`/pages`);
  }

  async get(id: string): Promise<Page> {
    return this.api.get(`/pages/${id}`);
  }

  async create(data: Page): Promise<any> {
    return this.api.post(`/pages`, data);
  }

  async update(id: string, data: Page): Promise<any> {
    return this.api.put(`/pages/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/pages/${id}`);
  }
}

export default Pages;
