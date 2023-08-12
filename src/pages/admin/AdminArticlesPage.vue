<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "../../components/HeaderComponent.vue";
import ButtonComponent from "../../components/header/ButtonComponent.vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import ElementComponent from "../../components/courses/ElementComponent.vue";

export default defineComponent({
  name: 'AdminArticlesPage',
  components: {ElementComponent, ContentComponent, ButtonComponent, HeaderComponent},
  data() {
    return {
      addPanelOpened: false,
    }
  },
})
</script>

<template>
  <header-component>
    <button-component>Доступ</button-component>
    <button-component>Курсы</button-component>
  </header-component>

  <main>
    <div class="container">
      <content-component title="Редактор статей">
        <template v-if="!addPanelOpened">
          <element-component title="Урок 1" btn="Изменить" />

          <a class="button" @click="">Добавить</a>
        </template>
        <template>

        </template>
      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  padding-bottom: 10vh;

  .content__body {
    min-height: 60vh !important;
  }
}

.button {
  user-select: none;
  cursor: pointer;
  position: absolute;
  bottom: 2.5rem;
  right: 4rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  background: #404040;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #505050;
  }

  &:active {
    background: #424242;
  }
}
</style>