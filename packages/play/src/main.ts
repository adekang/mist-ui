import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MistUI from 'mist-ui'

const app  = createApp(App)

app.use(MistUI)
app.mount('#app')
