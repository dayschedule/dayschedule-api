import Api from "./api";
declare class Users {
    private api;
    constructor(api: Api);
    list(): Promise<any[]>;
    get(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
export default Users;
