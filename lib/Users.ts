import Api from "./api";

class User {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async list(): Promise<any[]> {
        return this.api.get(`/users`);
    }

    async get(id: string): Promise<any> {
        return this.api.get(`/users/${id}`);
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/users`, data);
    }

    async update(id: string, data: any): Promise<any> {
        return this.api.put(`/users/${id}`, data);
    }

    async delete(id: string): Promise<any> {
        return this.api.delete(`/users/${id}`);
    }
}

export default User;
