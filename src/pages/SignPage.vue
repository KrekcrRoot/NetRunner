<script lang="ts">

import HeaderComponent from "../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../components/header/DefaultHeaderComponent.vue";

export default {
  name: 'SignPage',
  components: {HeaderComponent, DefaultHeaderComponent}
}

</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>
  <main>
    <div class="container">
      <form>
        <h1>Введите код</h1>

        <input type="text" placeholder="КОД">
        <input type="submit" class="submit" value="Войти">
      </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  .container {
    height: 80vh;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;

    h1 {
      margin-bottom: 3vh;
      font-size: 2.5rem;
    }

    input {
      background: rgba(217, 217, 217, 0.40);
      border: none;
      padding: 0.7em 1em;
      border-radius: 10px;
      width: 20vw;
      font-size: 1.2rem;
      text-align: center;
    }

    .submit {
      background: #73CA2E;
    }

  }
}
</style>