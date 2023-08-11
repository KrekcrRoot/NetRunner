<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'TextareaComponent',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
})
</script>

<template>
  <div class="input__group">
    <p>{{ label }}</p>
    <textarea name="" id="" class="input" rows="5"></textarea>
  </div>
</template>

<style scoped lang="scss">
.input__group {
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5rem;
  }

  .input {
    outline: none;
    border: none;
    border-radius: 15px;
    background: #494949;
    font-size: 2rem;
    padding: 1rem 2rem;
    resize: none;
  }

}
</style>