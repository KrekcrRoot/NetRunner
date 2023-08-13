<script lang="ts">
import {defineComponent} from 'vue'
import {toast} from "vue3-toastify";

export default defineComponent({
  name: 'OfflineComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    uuid: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    btn: {
      type: String,
      default: 'Изменить',
    },
  },
  methods: {
    clipboard(event: Event) {

      const target = event.target as HTMLInputElement
      target.select()
      navigator.clipboard.writeText(target.value)
      toast("UUID скопирован", {
        autoClose: 1500
      })

    }
  }
})
</script>

<template>
  <div class="offlineElement">
    <h2>{{ title }}</h2>
    <input type="text" :value="uuid" class="uuid" @click="clipboard" readonly />

    <a :href="link" class="link">{{ btn }}</a>
  </div>
</template>

<style scoped lang="scss">
.offlineElement {
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

  .uuid {
    font-size: 2rem;
    background-color: rgb(108, 106, 106);
    border: none;
    outline: none;
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
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