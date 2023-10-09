import axios from "axios";

function resource(api_key: string, api_url: string) {
    return {
        async getResources(): Promise<any[]> {
            return await axios.get(
                `${api_url}/resources`,
                {
                    params: {
                        "apiKey": api_key,
                    }
                }
            );
        },

        async getResourceById(resource_id: string): Promise<any> {
            return await axios.get(
                `${api_url}/resources/${resource_id}`,
                {
                    params: {
                        "apiKey": api_key,
                    }
                }
            );
        },

        async createResource(data: any): Promise<any> {
            return await axios.post(
                `${api_url}/resources`,
                data,
                {
                    params: {
                        "apiKey": api_key,
                    }
                }
            )
        },

        async updateResource(resource_id: string, data: any): Promise<any> {
            return await axios.put(
                `${api_url}/resources/${resource_id}`,
                data,
                {
                    params: {
                        "apiKey": api_key,
                    }
                }
            )
        },

        async deleteResource(resource_id: string): Promise<any> {
            return await axios.delete(`${api_url}/resources/${resource_id}`,
                {
                    params: {
                        "apiKey": api_key,
                    }
                }
            )
        }
    }
}

export default resource;
