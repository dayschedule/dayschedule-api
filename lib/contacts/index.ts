import Api from "../api";
import { Contact } from "./types";

class Contacts {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(params: any): Promise<Contact[]> {
    return this.api.get(`/contacts`, params);
  }

  async get(id: string): Promise<Contact> {
    return this.api.get(`/contacts/${id}`);
  }

  async create(data: Contact): Promise<any> {
    return this.api.post(`/contacts`, data);
  }

  async update(id: string, data: Contact): Promise<any> {
    return this.api.put(`/contacts/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/contacts/${id}`);
  }
}

export default Contacts;
