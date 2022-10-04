import axios from "axios"
import { environment } from "./environment";

/**
 * create http request connection
 */
 const api = axios.create({
    baseURL: environment.END_POINT,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

/**
 * Http interceptor add authorization token
*/
 api.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('token') 
        ? localStorage.getItem('token')
        : null;

    config.headers.common['Authorization'] = `Bearer ${token}`; 
    return config;
});

export const http = api;