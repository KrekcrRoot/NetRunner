import {AxiosInstance} from "axios";
import AdminGiveDto from "../dto/AdminGiveDto";


export default (instance: AxiosInstance) => {
    return {
        async sync() {
            return instance.post('/user/sync')
        },
        async adminGive(data: AdminGiveDto) {
            const response = await instance.post('/admin/give', data)
            return response
        }
    }
}