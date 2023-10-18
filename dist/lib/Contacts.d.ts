import Api from "./api";
declare class Contacts {
    private api;
    constructor(api: Api);
    list(params: any): Promise<any[]>;
    get(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
export default Contacts;
