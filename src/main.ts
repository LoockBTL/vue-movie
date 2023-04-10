import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { components } from './components'

const pinia = createPinia()
const app = createApp(App)
app.use(router)

components.forEach((comp) => app.component(comp.name, comp))
app.use(pinia)

app.mount('#app')
