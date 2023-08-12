import Article from "./Article.ts";

interface Course {
    id?: number
    title: string
    description: string
    articles: Array<Article>
}

export default Course