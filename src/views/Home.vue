<template>
  <q-page>
    <img alt="Vue logo" src="/src/assets/logo.png" />
    <img alt="Quasar logo" src="/src/assets/logo-quasar.png" />
    <img alt="Vite logo" src="/src/assets/logo-vite.svg" :style="{ width: '200px' }" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Quasar" />
  </q-page>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

const HelloWorld = defineAsyncComponent(() => import('@/components/HelloWorld.vue'));

export default defineComponent({
  name: 'HomeView',
  components: { HelloWorld },
});
</script>
<style lang="scss"></style>
