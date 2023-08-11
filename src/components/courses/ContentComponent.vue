<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'ContentComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})

</script>

<template>
  <div class="content">
    <div class="content__header">
      <p>{{ title }}</p>
    </div>
    <div class="content__body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  border-radius: 35px;
  background: rgba(41, 41, 41, 0.83);
  position: relative;

  .content__header {
    width: 100%;
    background: rgba(62, 62, 62, 0.67);
    border-radius: 35px;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    box-shadow: 0 45px 120px 0 rgba(0, 0, 0, 0.25);

    p {
      font-size: 2rem;
    }
  }

  .content__body {
    min-height: 60vh;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
