import Api from "./api";

class Contacts {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async list(): Promise<any[]> {
        return this.api.get(`/contacts`);
    }

    async get(id: string): Promise<any> {
        return this.api.get(`/contacts/${id}`);
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/contacts`, data);
    }

    async update(id: string, data: any): Promise<any> {
        return this.api.put(`/contacts/${id}`, data);
    }

    async delete(id: string): Promise<any> {
        return this.api.delete(`/contacts/${id}`);
    }
}

export default Contacts;
