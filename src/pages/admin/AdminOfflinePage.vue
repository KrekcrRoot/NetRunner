<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "../../components/HeaderComponent.vue";
import ButtonComponent from "../../components/header/ButtonComponent.vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import OfflineComponent from "../../components/offline/OfflineComponent.vue";

export default defineComponent({
  name: 'AdminOfflinePage',
  components: {OfflineComponent, ContentComponent, ButtonComponent, HeaderComponent},
  mounted() {
    const body: HTMLBodyElement | null = document.querySelector('body')

    if (body !== null) {
      body.style.background = `url("/assets/background_black.jpeg") fixed`
      body.style.backgroundSize = `cover`
    }
  }
})
</script>

<template>
  <header-component>
    <button-component>Доступ</button-component>
    <button-component>Оффлайн</button-component>
    <button-component>Курсы</button-component>
  </header-component>
  <main>
    <div class="container">
      <content-component title="Редактор уроков">

        <offline-component uuid="78bd21b7-f941-4ccb-8605-031f72e5acc2" title="Урок №1" />
        <offline-component uuid="f6a67786-9ea6-446e-9ed6-9889e1a7dd94" title="Урок №2" />
        <offline-component uuid="ec35746e-9b66-45f5-8128-5cb45208152e" title="Урок №3" />
        <offline-component uuid="564e0481-d069-4332-8715-f83460de344d" title="Урок №4" />

        <a class="button" href="/admin/articles/add">Добавить</a>
      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss">

header {
  background-color: rgb(53, 53, 53, 0.5);
}


.content {
  padding-bottom: 10vh;
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