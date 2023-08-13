import {AxiosInstance} from "axios";
import Article from "../models/Article.ts";
import Course from "../models/Course.ts";


export default (instance: AxiosInstance) => {
    return {
        async get(uuid: string) {
            const response = await instance.post<Course>('/courses/get', {
                id: uuid,
            })

            return response
        },
        async getAllArticles(uuid: string) {
            const response = await instance.post<Array<Article>>('/courses/get/articles', {
                id: uuid,
            })

            return response
        },
        async getAll() {
            const response = await instance.post<Array<Course>>('/courses/get/all')
            return response
        },
    }
}