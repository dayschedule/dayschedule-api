class DayscheduleConfig {
    public apiKey: string;
    public apiUrl: string;
    // private _headers: AxiosRequestConfig;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.apiUrl = "https://api.dayschedule.com/v1";
    }

    get() {
        
    }
    
}

export default DayscheduleConfig;