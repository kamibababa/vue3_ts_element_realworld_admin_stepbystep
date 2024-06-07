import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import { createPinia } from 'pinia';

import { useUserStore } from '@/stores/user';

const app = createApp(App);
app.use(createPinia())
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const userStore = useUserStore();
const { verifyAuth } = userStore;
await verifyAuth();

app.use(router).use(ElementPlus).mount('#app')


