import { createApp } from 'vue'
import App from './App.vue'
import Machine from './components/Machine.vue'

const app=createApp(App)

app.component('machine', Machine)

app.mount('#app')
