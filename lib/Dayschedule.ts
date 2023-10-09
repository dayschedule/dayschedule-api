import axios, { AxiosRequestConfig } from "axios";
import resource from './Resource';

export type Resource = {
    getResources: () => any,
    getResourceById: (resource_id: string) => any,
    createResource: (data: any) => any,
    updateResource: (resource_id: string, data: any) => any;
    deleteResource: (resource_id: string) => any;
}

class Dayschedule {
    private apiKey: string;
    public apiUrl: string = "https://api.dayschedule.in/v1";

    public resource: Resource;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.resource = resource(apiKey, this.apiUrl);
    }
}

export default Dayschedule;