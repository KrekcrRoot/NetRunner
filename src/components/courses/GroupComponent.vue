<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'GroupComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>

<template>
  <div class="group">

    <div class="group__title">
      <h2>{{ title }}</h2>
      <div class="group__title__line"></div>
    </div>

    <div class="group__body">
      <slot></slot>
    </div>

  </div>
</template>

<style scoped lang="scss">

.group {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  .group__title {
    display: flex;
    align-items: center;
    gap: 3rem;

    h2 {
      font-size: 2.5rem;
    }

    .group__title__line {
      width: 100%;
      height: 4px;
      background: white;
    }
  }

  .group__body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

</style>
