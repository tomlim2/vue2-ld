import Axios from "axios";
import type { AxiosRequestConfig } from "axios";

type URL = string

abstract class Model {
    baseUrl: URL

    constructor() {
        this.baseUrl = "https://api.fellaz.xyz/"
    }

    headers(): AxiosRequestConfig {
        return {
            headers: { "Authorization": `Bearer ${this.getToken()}`, "uuid": `${this.uuid()}` },
        }
    }

    uuid(): string | undefined {
        return undefined;
        // const uuid = this.store.getters["user/uuid"]
        // if (uuid) {
        //     return uuid;
        // }
        // return undefined;
    }

    getToken(): string | undefined {
        return undefined;
        // const token = this.store.getters["user/accessToken"]
        // if (token) {
        //     return token;
        // }
        // return undefined;
    }

    async GET(paths: any[], queryParams: { [key: string]: string | number } = {}): Promise<any> {
        try {
            let queryString = "";
            if (Object.keys(queryParams).length > 0) {
                queryString = Object.keys(queryParams).reduce((query, key) => {
                    if (queryParams[key]) {
                        query = query + `&${key}=${queryParams[key]}`
                    }
                    return query;
                }, `?`);
            }
            const result = await Axios.get(this.baseUrl + Array.from(paths).join("/") + queryString, this.headers())
            return result.data
        } catch (e: any) {
            return e.response.data
        }
    }

    async POST(paths: any[], data: any = {}): Promise<any> {
        try {
            const body = { ...data };
            const result = await Axios.post(this.baseUrl + Array.from(paths).join("/"), body, this.headers())
            return result.data
        } catch (e: any) {
            return e.response.data
        }
    }

    async MULTIPART_POST(paths: any[], data: FormData, progress?: Function): Promise<any> {
        try {
            const headers = this.headers();
            headers.headers!['Content-Type'] = 'multipart/form-data'
            const result = await Axios.post(this.baseUrl + Array.from(paths).join("/"), data, {
                ...headers,
                ...{
                    onUploadProgress: (progressEvent) => {
                        if (progress) {
                            progress(progressEvent)
                        }
                    }
                }
            })
            return result.data
        } catch (e: any) {
            return e.response.data
        }
    }

    async PATCH(paths: any[], data: any = {}): Promise<any> {
        try {
            const body = { ...data };
            const result = await Axios.patch(this.baseUrl + Array.from(paths).join("/"), body, this.headers())
            return result.data
        } catch (e: any) {
            return e.response.data
        }
    }

    async DELETE(paths: any[]): Promise<any> {
        try {
            const result = await Axios.delete(this.baseUrl + Array.from(paths).join("/"), this.headers())
            return result.data
        } catch (e: any) {
            return e.response.data
        }
    }

}

export default Model;
