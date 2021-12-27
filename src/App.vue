<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/src/assets/logo-vite.svg">
          </q-avatar>
          Vite + Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list class="menu-list">

          <q-item clickable to="/" exact>
            <q-item-section avatar>
              <q-icon name="mdi-home" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-item clickable to="/other">
            <q-item-section avatar>
              <q-icon :name="mdiCog" />
            </q-item-section>
            <q-item-section>Other view</q-item-section>
          </q-item>

        </q-list>
    </q-drawer>

    <q-page-container class="center-container">
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mdiCog } from '@quasar/extras/mdi-v6';

export default defineComponent({
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      mdiCog,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
.center-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
