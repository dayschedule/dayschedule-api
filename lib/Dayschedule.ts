import axios, { AxiosRequestConfig } from "axios";
import resource from './Resource';

export type Resource = {
    getResources: () => any,
    getResourceById: (resource_id: string) => any,
    createResource: (data: any) => any,
    updateResource: (resource_id: string, data: any) => any;
    deleteResource: (resource_id: string) => any;
}

export interface dayschedule {
    resource: Resource,
}

class Dayschedule {
    private apiKey: string;
    public apiUrl: string = "https://api.dayschedule.in/v1";

    public resource: Resource;
    // private _headers: AxiosRequestConfig;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.resource = resource(apiKey, this.apiUrl);
    }

//    async addResources(): Promise<dayschedule> {
//         console.log(resource(this.apiKey, this.apiUrl))
//     //    return Object.assign(this, {
//     //         resource: resource(this.apiKey, this.apiUrl)
//     //     })

//     return {
//         resource: resource(this.apiKey, this.apiUrl)
//      }
//     }
}

export default Dayschedule;