import axios from 'axios'
import {useUserStore} from "../store/UserStore.ts";

const instance = axios.create({
    baseURL: 'http://localhost:2000',
    withCredentials: true,
    headers: {
        accept: 'application/json',
    },
})

instance.interceptors.request.use((config) => {
    const userStore = useUserStore()
    config.headers.Authorization = `Bearer ${userStore.tokens.accessToken}`
    return config
})

export default instance
