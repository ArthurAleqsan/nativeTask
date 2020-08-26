import { PUBLIC_IP } from "../utils/conf";
import { fetchStorageData } from "../utils/helpers";

export default class ServerConnector {
    constructor(path, api = '/api/v1') {
        this.path = PUBLIC_IP + api + path;
    }

    isOkStatus(status) {
        return [200, 201, 204].includes(status);
    }

    static makeQuery(obj) {
        let query = '';
        Object.keys(obj).forEach((key, i) => {
            query += `&${key}=${obj[key]}`
        });
        return query.substr(1);
    }

    static _handleErrors(res) {
        if (res.status !== 401) return res;
        //logout
    }

    send(req, fromFormData, errHandler, ) {
        const path = `${this.path}${req.path}`;
        return ServerConnector._makeRequest(req, path, errHandler, fromFormData).then((res) => {
            return res;
        })
    }
    static makeFormData(data) {
        const form = new FormData();
        form.append('file', data);
        return form;
    }

    static _makeRequest(req, path, errHandler, fromFormData) {
        return ServerConnector.fetcher(req, path, errHandler, fromFormData)
            .then((res) => ServerConnector._handleErrors(res))
            .then((res) => {
                return res.json().then(json => {
                    return {
                        status: res.status,
                        json
                    };
                });
            })
            .catch(error => {
                // if (errHandler) {}
                return {
                    status: error.message,
                    json: {}
                }
            });
    }

    static async fetcher(req, path, errHandler, fromFormData) {
        const headersObj = Object.assign(fromFormData ? {
            'Cache-Control': 'no-cache',
            "authorization": `Bearer ${await fetchStorageData('token')}`,
            // "scope": `${localStorage.getItem('scope')}`
        } : {
            'content-type': 'application/json',
            'Cache-Control': 'no-cache',
            "authorization": `Bearer ${await fetchStorageData('token')}`,
            // "scope": `${localStorage.getItem('scope')}`
        }, req.headers);

        const headers = new Headers(headersObj);


        const options = Object.assign({
            method: 'POST',
            //credentials: 'same-origin',
        }, req.options);

        options.headers = headers;
        const request = new Request(path, options);
        return fetch(request)
    }
}