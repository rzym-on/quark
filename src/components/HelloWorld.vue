<template>
  <h3>{{ msg }}</h3>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-typescript-vue-plugin"
      target="_blank"
    >Volar TS</a>
    +
    <a href="https://github.com/Microsoft/vscode-eslint" target="_blank">ESLint</a>
  </p>
  <p>
    Nice to have VSCode Extensions:
    <a href="https://github.com/usernamehw/vscode-error-lens" target="_blank">Error lens</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <q-btn class="q-mb-md" color="primary" @click="count++" :label="`count is: ${count}`" />

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: { msg: String },
  setup() {
    return {
      count: ref(0),
    };
  },
});
</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
