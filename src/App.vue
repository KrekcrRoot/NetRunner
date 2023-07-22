<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {FooterComponent, HeaderComponent },
}
</script>

<template>
  <header-component />
  <router-view></router-view>
  <footer-component />
</template>

<style></style>
