import Api from "./api";

class Activities {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async list(contact_id: string, params: any): Promise<any[]> {
        return this.api.get(`/activities/${contact_id}`, params);
    }

    async get(id: string): Promise<any> {
        return this.api.get(`/activities/${id}`);
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/activities`, data);
    }

    async update(id: string, data: any): Promise<any> {
        return this.api.put(`/activities/${id}`, data);
    }

    async delete(id: string): Promise<any> {
        return this.api.delete(`/activities/${id}`);
    }
}

export default Activities;
