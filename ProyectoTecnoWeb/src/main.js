import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
window.Swal = Swal; // Lo haces globalmente accesible


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
