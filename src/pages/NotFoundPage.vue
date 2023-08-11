<script lang="ts">

import HeaderComponent from "../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../components/header/DefaultHeaderComponent.vue";

export default {
  name: 'NotFound',
  components: {DefaultHeaderComponent, HeaderComponent},
}

</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>
  <main>
    <div class="container">
      <h1>404 | Страница не найдена</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">

main {
  .container {
    h1 {
      font-size: 3rem;
      margin-top: 5vh;
      background: rgba(255, 255, 255, 0.1);
      width: max-content;
      padding: 1rem;
      border-radius: 10px;
    }
  }
}

</style>