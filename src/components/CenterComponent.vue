<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CenterComponent',
})
</script>

<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>