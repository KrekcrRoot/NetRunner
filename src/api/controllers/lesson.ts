import {AxiosInstance} from "axios";
import Lesson from "../models/Lesson.ts";


export default (instance: AxiosInstance) => {
    return {
        async get(access_code: string) {
            const response = await instance.post<Lesson>('/lessons/get', {
                access_code: access_code,
            })
            return response
        },
    }
}