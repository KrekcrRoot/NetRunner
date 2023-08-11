<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CompactComponent',
})
</script>

<template>
  <div class="compact">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.compact {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}
</style>