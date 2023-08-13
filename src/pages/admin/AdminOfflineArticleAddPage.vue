<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "../../components/HeaderComponent.vue";
import ButtonComponent from "../../components/header/ButtonComponent.vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import FormComponent from "../../components/form/FormComponent.vue";
import InputComponent from "../../components/form/InputComponent.vue";
import TextareaComponent from "../../components/form/TextareaComponent.vue";
import SubmitButtonComponent from "../../components/form/SubmitButtonComponent.vue";
import CenterComponent from "../../components/CenterComponent.vue";
import Vue3Toastify, {toast} from "vue3-toastify";

export default defineComponent({
  name: 'AdminOfflineArticleAddPage',
  methods: {toast},
  components: {
    CenterComponent,
    SubmitButtonComponent,
    TextareaComponent, InputComponent, FormComponent, ContentComponent, ButtonComponent, HeaderComponent},
  mounted() {
    document.querySelector('body').style.background = `url("/assets/background_black.jpeg") fixed`
    document.querySelector('body').style.backgroundSize = `cover`
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
      <content-component title="Создание урока">

        <center-component>
          <FormComponent @submitted="toast('Форма отправлена')">

            <input-component label="Название" />
            <textarea-component label="Описание" />
            <submit-button-component value="Готово" />

          </FormComponent>
        </center-component>


      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss">

header {
  background-color: rgb(53, 53, 53, 0.5);
}

</style>