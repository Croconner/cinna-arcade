import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

// import store from './store'

axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;


createApp(App).use(router).mount('#app')
