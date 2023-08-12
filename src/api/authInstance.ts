import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8180',
    withCredentials: true,
    headers: {
        accept: 'application/json',
        "Content-Type": 'application/x-www-form-urlencoded',
    },
})

instance.interceptors.request.use((config) => {
    return config
})

export default instance
