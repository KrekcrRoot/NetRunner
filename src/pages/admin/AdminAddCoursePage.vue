<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "../../components/HeaderComponent.vue";
import ContentComponent from "../../components/courses/ContentComponent.vue";
import FormComponent from "../../components/form/FormComponent.vue";
import InputComponent from "../../components/form/InputComponent.vue";
import ButtonComponent from "../../components/header/ButtonComponent.vue";
import CenterComponent from "../../components/CenterComponent.vue";
import TextareaComponent from "../../components/form/TextareaComponent.vue";
import SubmitButtonComponent from "../../components/form/SubmitButtonComponent.vue";

export default defineComponent({
  name: 'AdminAddCoursePage',
  components: {
    SubmitButtonComponent,
    TextareaComponent,
    CenterComponent,
    ButtonComponent, InputComponent, FormComponent, ContentComponent, HeaderComponent},
})
</script>

<template>
  <header-component>
    <button-component>Доступ</button-component>
    <button-component>Курсы</button-component>
  </header-component>
  <main>
    <div class="container">
      <content-component title="Создание курса">

        <CenterComponent>

          <FormComponent>
            <InputComponent label="название" />
            <TextareaComponent label="Описание" />
            <SubmitButtonComponent value="Готово" />
          </FormComponent>

        </CenterComponent>

      </content-component>
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  .content__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>