<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    link: {
      default: '#',
      type: String,
    },
  },
})

</script>

<template>
  <li>
    <a :href="link" class="button">
      <slot></slot>
    </a>
  </li>
</template>

<style scoped lang="scss">

.button {
  cursor: pointer;
  color: white;
  font-size: 2.5rem;
  text-decoration: none;
  transition: all 0.15s ease;
  padding: 1rem 2rem;
  border-radius: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}

</style>