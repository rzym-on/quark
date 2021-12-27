import { createApp } from 'vue';
import { Quasar } from 'quasar';
import router from './router';
import quasarUserOptions from './quasar-user-options';

import App from './App.vue';

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mount('#app');
