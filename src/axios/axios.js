import axios from 'axios';
import { BASE_URL, API_KEY } from '../config'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})


axiosInstance.interceptors.request.use((config) => {

    const isQuery = config.url.includes("?")
    config.url = `${config.url}${isQuery ? "&" : "?"}appid=${API_KEY}`
    return config;
}, function (error) {
    return Promise.reject(error);
});



axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {

        return Promise.reject({
            errorMessage: 'An error occurred.',
            response: error.response,
        })
    }
)
export default axiosInstance