import axios from "axios"
import { getEnvVariables } from "../helpers"

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
    baseURL: VITE_API_URL
})


// Todo: Configurar interceptores
calendarApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        config.headers = {
            ...config.headers,
            'x-token': token
        };
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default calendarApi