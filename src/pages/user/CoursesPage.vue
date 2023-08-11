<script lang="ts">

import {defineComponent} from "vue";
import HeaderComponent from "../../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../../components/header/DefaultHeaderComponent.vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import ElementComponent from "../../components/courses/ElementComponent.vue";

export default defineComponent({
  components: {ElementComponent, ContentComponent, DefaultHeaderComponent, HeaderComponent}
})

</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>

  <main>
    <div class="container">
      <content-component title="Ваши курсы">
        <element-component title="Pentest Fundamental" btn="Перейти" link="/course" />
        <element-component title="Pentest Fundamental" btn="Перейти" link="/" />
        <element-component title="Pentest Fundamental" btn="Перейти" link="/" />
        <element-component title="Pentest Fundamental" btn="Перейти" link="/" />
        <element-component title="Pentest Fundamental" btn="Перейти" link="/" />
        <element-component title="Pentest Fundamental" btn="Перейти" link="/" />
      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>