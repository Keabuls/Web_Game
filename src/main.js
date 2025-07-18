import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useThemeStore } from '@/stores/themeStore.js'

import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const themeStore = useThemeStore()
if (themeStore.theme) {
  const bodyElement = document.body
  bodyElement.setAttribute('data-bs-theme', themeStore.theme)
}

app.mount('#app')
