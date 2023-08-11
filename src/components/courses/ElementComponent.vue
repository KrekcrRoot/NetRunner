<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'ElementComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    btn: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
})

</script>

<template>
  <div class="element">
    <h2>{{ title }}</h2>
    <a :href="link" class="link">{{ btn }}</a>
  </div>
</template>

<style scoped lang="scss">
.element {
  border-radius: 35px;
  background: rgba(80, 80, 80, 0.71);
  box-shadow: 0 81px 73px 11px rgba(0, 0, 0, 0.25);
  border: 3px solid transparent;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    border: 3px solid rgba(80, 80, 80, 0.71);
  }

  h2 {
    font-size: 2rem;
  }

  .link {
    font-size: 2rem;
    background: rgba(0, 255, 194, 0.5);
    text-decoration: none;
    border-radius: 15px;
    padding: 1rem;
    transition: all 0.15s ease;

    &:hover {
      background: rgba(0, 255, 194, 0.8);
    }
  }
}
</style>
