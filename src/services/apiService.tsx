import { http } from "../congfigs/axios";

/**
 * Http Response Error Handler Configuration
 * @param {*} error 
 */
 const httpResponseHandler = (error: any) => {
    
    if(error.response && error.response.status === 0) {
        return;
    }

    if(error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        // router.push('/auth/login');
        return;
    }
}

/**
 * Http Get Request
 * @param {*} path 
 * @param {*} params 
 * @returns 
 */
export const getRequest = async (path: any, params?: any) => {
    return await http.get(path, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}

/**
 * Http Create Request
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const postRequest = async (path: any, body: any, params?: any) => {
    return await http.post(path, body, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}

/**
 * Http Update Request
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const putRequest = async (path: any, body: any, params?: any) => {
    return await http.put(path, body, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}

/**
 * Http Delete Request
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const delRequest = async (path: any, params?: any) => {
    return await http.delete(path, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}