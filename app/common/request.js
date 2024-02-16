import axios from "axios";
import { BASE_URL } from "../utils/baseURL";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
})

const sendRequest = (config) => {
    axiosInstance.request(config)
}

const getRequest = () => {
    sendRequest({
        method: 'GET',
        url: 'posts'
    })
}