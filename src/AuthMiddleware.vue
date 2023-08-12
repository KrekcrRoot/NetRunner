<script lang="ts">

import {useUserStore} from "./store/UserStore.ts";
import api from "./api/api.ts"

export default {
  name: 'AuthMiddleware',
  async beforeCreate() {
    if(Object.keys(this.$route.query).includes('code')) {

      const response = await api.tokens.init(this.$route.query.code as string)
      const user = useUserStore()
      user.tokens.accessToken = response.data.access_token
      user.tokens.refreshToken = response.data.refresh_token

      this.$router.push({
        name: 'MainPage',
      })

    } else {
      this.$router.push({
        name: 'MainPage'
      })
    }
  }
}

</script>