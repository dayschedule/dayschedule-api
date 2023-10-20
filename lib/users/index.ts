import Api from "../api";
import { User } from "./types";

class Users {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(): Promise<User[]> {
    return this.api.get(`/users`);
  }

  async get(id: string): Promise<User> {
    return this.api.get(`/users/${id}`);
  }

  async create(data: User): Promise<any> {
    return this.api.post(`/users`, data);
  }

  async update(id: string, data: User): Promise<any> {
    return this.api.put(`/users/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/users/${id}`);
  }
}

export default Users;
