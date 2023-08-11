<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'FormComponent',
})
</script>

<template>
  <form>
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