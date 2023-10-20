import Api from "../api";
import { Activity } from "./types";

class Activities {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async list(contact_id: string, params: any): Promise<Activity[]> {
        return this.api.get(`/activities/${contact_id}`, params);
    }

    async get(activity_id: string): Promise<Activity> {
        return this.api.get(`/activities/${activity_id}`);
    }

    async create(data: Activity): Promise<any> {
        return this.api.post(`/activities`, data);
    }

    async update(activity_id: string, data: Activity): Promise<any> {
        return this.api.put(`/activities/${activity_id}`, data);
    }

    async delete(activity_id: string): Promise<any> {
        return this.api.delete(`/activities/${activity_id}`);
    }
}

export default Activities;
