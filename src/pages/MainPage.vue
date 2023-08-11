<script lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import DefaultHeaderComponent from "../components/header/DefaultHeaderComponent.vue";

export default {
  name: 'MainPage',
  components: {DefaultHeaderComponent, HeaderComponent},
}
</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>
  <main>
    <div class="container">
      <div class="main__logo">
        <h1>NetRunner</h1>
        <img src="/assets/decor.svg" alt="">
      </div>
      <p class="main__about">Cообщество исследователей в сфере практической информационной безопасности</p>
      <a href="/products" class="btn big-btn">Перейти к продуктам</a>
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {
  display: flex;
  flex-direction: column;

  .main__logo {
    display: flex;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 7rem;
      background: rgba(255, 255, 255, 0.10);
      padding: 2rem 3rem;
      border-radius: 16px;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }

  .main__about {
    font-size: 2.5rem;
    width: 40vw;
    margin: 3rem 0;
  }
}

</style>