<script lang="ts">

import {defineComponent} from "vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import HeaderComponent from "../../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../../components/header/DefaultHeaderComponent.vue";

export default defineComponent({
  name: 'ArticlePage',
  data() {
    return {
      title: 'Урок 1',
    }
  },
  components: {DefaultHeaderComponent, HeaderComponent, ContentComponent}
})

</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>

  <main>
    <div class="container">
      <content-component :title="title">

      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>