<script lang="ts">
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {FooterComponent},
}
</script>

<template>
  <router-view></router-view>
  <footer-component />
</template>

<style lang="scss">
</style>
