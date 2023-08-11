<script lang="ts">
import {defineComponent} from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import HeaderComponent from "../HeaderComponent.vue";

export default defineComponent({
  components: {HeaderComponent, ButtonComponent}
})
</script>

<template>
  <button-component link="/">
    Главная
  </button-component>
  <button-component>
    Партнёры
  </button-component>
  <button-component>
    Контакты
  </button-component>
</template>