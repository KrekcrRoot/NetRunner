import instance from "./instance.ts";
import authInstance from "./authInstance.ts";

import useLessonModule from "./controllers/lesson.ts";
import useUserModule from "./controllers/user.ts"
import useTokensModule from "./controllers/tokens.ts"

export default {
    lesson: useLessonModule(instance),
    user: useUserModule(instance),

    tokens: useTokensModule(authInstance),
}