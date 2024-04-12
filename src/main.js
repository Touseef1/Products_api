import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import store from '@store/store'; 
import { createApp } from 'vue'
import App from '@views/App.vue'
import router from '@router/router'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
