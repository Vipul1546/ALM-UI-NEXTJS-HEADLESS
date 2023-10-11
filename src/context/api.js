import Axios from "axios";

const authApi = Axios.create({
    baseURL: "https://captivateprime.adobe.com",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


const api = Axios.create({
    baseURL: "https://learningmanager.adobe.com/primeapi/v2",
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    async function (config) {
        let token = ''
        if (typeof window === "undefined") {
            const { cookies: serverCookies } = await import("next/headers");
            token = serverCookies().get("token")?.value;
        }
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
            config.headers["Accept"] = 'application/vnd.api+json';
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export {
    authApi,
    api
};

