import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import uiMixin from './uiMixin'
// import Vuex from 'vuex'
import '@/assets/css/common.css'

createApp(App).use(router).use(i18n).mixin(uiMixin).mount('#app');
