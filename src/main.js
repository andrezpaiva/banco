import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFinalModal from 'vue-final-modal'

import 'animate.css'
import '@/assets/css/tailwind.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueFinalModal())
app.mount('#app')
