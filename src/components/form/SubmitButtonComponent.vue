<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SubmitButtonComponent',
  props: {
    value: {
      type: String,
      default: 'Отправить'
    }
  }
})
</script>

<template>
  <input type="submit" :value="value" class="submit">
</template>

<style scoped lang="scss">
.submit {
  cursor: pointer;
  background: #00FFB2;
  outline: none;
  color: black;
  font-size: 1.5rem;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  width: max-content;
  transition: all 0.2s ease;
  border: 4px solid transparent;
  align-self: flex-end;
  margin-top: 1rem;

  &:hover {
    background: rgba(0, 255, 178, 0.8);
  }

  &:active {
    border: 4px solid rgba(20, 162, 119, 0.8);
  }
}
</style>