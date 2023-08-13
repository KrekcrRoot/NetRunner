<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'FormComponent',
  methods: {
    submit() {
      this.$emit('submitted')
    }
  }
})
</script>

<template>
  <form @submit.prevent="submit">
    <slot></slot>
  </form>
</template>

<style scoped lang="scss">

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>