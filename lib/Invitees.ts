import Api from "./api";

class Invitees {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(params: any): Promise<any[]> {
    return this.api.get(`/invitees`, params);
  }

  async get(id: string): Promise<any> {
    return this.api.get(`/invitees/${id}`);
  }

  async create(data: any): Promise<any> {
    return this.api.post(`/invitees`, data);
  }

  async update(id: string, data: any): Promise<any> {
    return this.api.put(`/invitees/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/invitees/${id}`);
  }
}

export default Invitees;
