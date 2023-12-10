import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from './plugins/element'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
