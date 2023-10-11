import Api from "./api";

class Workflows {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async list(): Promise<any[]> {
        return this.api.get(`/workflows`);
    }

    async get(id: string): Promise<any> {
        return this.api.get(`/workflows/${id}`);
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/workflows`, data);
    }

    async update(id: string, data: any): Promise<any> {
        return this.api.put(`/workflows/${id}`, data);
    }

    async delete(id: string): Promise<any> {
        return this.api.delete(`/workflows/${id}`);
    }
}

export default Workflows;
