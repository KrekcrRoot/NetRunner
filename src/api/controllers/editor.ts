import {AxiosInstance} from "axios";

import LessonUpdateDto from "../dto/LessonUpdateDto";
import LessonCreateDto from "../dto/LessonCreateDto";
import Lesson from "../models/Lesson";

import CourseUpdateDto from "../dto/CourseUpdateDto";
import CourseCreateDto from "../dto/CourseCreateDto";
import Course from "../models/Course";
import ArticleUpdateDto from "../dto/ArticleUpdateDto.ts";
import ArticleCreateDto from "../dto/ArticleCreateDto.ts";

export default (instance: AxiosInstance) => {
    return {
        lesson: {
            async update(lesson: LessonUpdateDto) {
                const response = await instance.post<Lesson>('/editor/lessons/update', lesson)
                return response
            },
            async getAll() {
                const response = await instance.post<Array<Lesson>>('/editor/lessons/get/all')
                return response
            },
            async delete(uuid: string) {
                const response = await instance.post('/editor/lessons/delete', {
                    id: uuid,
                })
                return response
            },
            async create(lesson: LessonCreateDto) {
                const response = await instance.post<Lesson>('/editor/lessons/create', lesson)
                return response
            }
        },

        courses: {
            async update(course: CourseUpdateDto) {
                const response = await instance.post<Course>('/editor/courses/update', course)
                return response
            },
            async getAll() {
                const response = await instance.post<Array<Course>>('/editor/courses/get/all')
                return response
            },
            async delete(uuid: string) {
                const response = await instance.post('/editor/courses/delete', {
                    id: uuid,
                })
                return response
            },
            async create(course: CourseCreateDto) {
                const response = await instance.post('/editor/courses/create', course)
                return response
            }
        },

        articles: {
            async update(article: ArticleUpdateDto) {
                const response = await instance.post('/editor/articles/update', article)
                return response
            },
            async findByCourse(uuid: string) {
                const response = await instance.post('/editor/articles/find/by/course', {
                    course_id: uuid,
                })
                return response
            },
            async delete(uuid: string) {
                const response = await instance.post('/editor/articles/delete', {
                    id: uuid,
                })
                return response
            },
            async create(article: ArticleCreateDto) {
                const response = await instance.post('/editor/articles/create', article)
                return response
            }
        }
    }
}