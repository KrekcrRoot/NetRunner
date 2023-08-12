import {AxiosInstance} from "axios";


export default (instance: AxiosInstance) => {
    return {
        sync() {
            return instance.post('/user/sync')
        }
    }
}