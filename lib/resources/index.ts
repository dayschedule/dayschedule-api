import Api from "../api";

class Resources {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(): Promise<any[]> {
    return this.api.get(`/resources`);
  }

  async get(id: string): Promise<any> {
    return this.api.get(`/resources/${id}`);
  }

  async create(data: any): Promise<any> {
    return this.api.post(`/resources`, data);
  }

  async update(id: string, data: any): Promise<any> {
    return this.api.put(`/resources/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.api.delete(`/resources/${id}`);
  }
}

export default Resources;
