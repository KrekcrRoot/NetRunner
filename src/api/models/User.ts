import Course from "./Course.ts";

interface User {
    id?: number
    courses: Array<Course>
}

export default User