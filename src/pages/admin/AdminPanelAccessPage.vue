<script lang="ts">
import {defineComponent} from "vue";
import HeaderComponent from "../../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../../components/header/DefaultHeaderComponent.vue";
import ButtonComponent from "../../components/header/ButtonComponent.vue";

export default defineComponent({
  name: 'AdminPanelAccessPage.vue',
  components: {ButtonComponent, DefaultHeaderComponent, HeaderComponent}
})

</script>

<template>
  <header-component>
    <button-component>Доступ</button-component>
    <button-component link="/admin/offline">Оффлайн</button-component>
    <button-component link="/admin/courses">Курсы</button-component>
  </header-component>
  <main>

    <div class="container">

      <h1>Admin Panel</h1>

      <form action="">
        <h2>Выдача доступа</h2>

        <input type="text" class="input" placeholder="Курс">
        <input type="text" class="input" placeholder="Почта">

        <input type="submit" class="submit" value="UNLOCK">
      </form>

    </div>

  </main>
</template>

<style scoped lang="scss">

main {
  .container {
    align-items: center;
    justify-content: center;
    height: 80vh;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 5vh;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2vh;

      h2 {
        font-size: 2.5rem;
      }

      input {
        outline: none;
        background: rgba(217, 217, 217, 0.40);
        padding: 0.7em 1em;
        border-radius: 10px;
        width: 20vw;
        font-size: 1.2rem;
        border: 2px solid transparent;
        transition: all 0.2s ease;

        &.input:focus {
          border: 2px solid #73CA2E;
        }
      }

      .submit {
        cursor: pointer;
        background: #DB4848;
        border: 2px solid transparent;

        &:hover {
          border: 2px solid #e36c6c;
        }

        &:active {
          background: #e36c6c;
        }
      }
    }
  }
}

</style>