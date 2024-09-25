import axios from "axios"
import { getEnvVariables } from "../helpers"

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
    baseURL: VITE_API_URL
})


// Todo: Configurar interceptores
calendarApi.interceptors.request.use( (config) => {
    config.headers = {
        ...config.headers,
        'x-toke': localStorage.getItem('token')
    }
})

export default calendarApi