import './assets/main.css'

import { createApp } from 'vue.d.ts'
import { createPinia } from 'pinia.d.ts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

