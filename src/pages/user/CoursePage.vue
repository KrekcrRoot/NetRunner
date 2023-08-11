<script lang="ts">

import {defineComponent} from "vue";
import HeaderComponent from "../../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../../components/header/DefaultHeaderComponent.vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import ElementComponent from "../../components/courses/ElementComponent.vue";
import GroupComponent from "../../components/courses/GroupComponent.vue";

export default defineComponent({
  name: 'CoursePage',
  components: {GroupComponent, ElementComponent, ContentComponent, DefaultHeaderComponent, HeaderComponent},
})

</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>

  <main>
    <div class="container">
      <content-component title="Подготовка к PRTT">
        <group-component title="Python">
          <element-component title="Урок 1" btn="Читать" />
          <element-component title="Урок 2" btn="Читать" />
          <element-component title="Урок 3" btn="Читать" />
        </group-component>
        <group-component title="Основы">
          <element-component title="Урок 1" btn="Читать" />
        </group-component>
      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>