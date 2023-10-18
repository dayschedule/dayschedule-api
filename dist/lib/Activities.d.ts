import Api from "./api";
declare class Activities {
    private api;
    constructor(api: Api);
    list(contact_id: string, params: any): Promise<any[]>;
    get(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
export default Activities;
