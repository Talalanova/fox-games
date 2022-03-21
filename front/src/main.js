import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import cookie from './plugins/cookie'
createApp(App).use(cookie).use(store).use(router).mount('#app')
