import instance from "./instance.ts";
import authInstance from "./authInstance.ts";

import useLessonModule from "./controllers/lesson.ts";
import useUserModule from "./controllers/user.ts"
import useTokensModule from "./controllers/tokens.ts"
import useEditorModule from "./controllers/editor.ts"
import useCourseModule from "./controllers/course.ts"

export default {
    lesson: useLessonModule(instance),
    user: useUserModule(instance),
    editor: useEditorModule(instance),
    course: useCourseModule(instance),

    tokens: useTokensModule(authInstance),
}