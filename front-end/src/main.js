// reset CSS
import './assets/normalize.css'

import { createApp } from 'vue'
import App from './App.vue'


import { installVuetify } from '@/plugins/vuetify'
// import { installValidate } from '@/plugins/veeValidate'
import { installRouter } from '@/router/routes'
// import { installAxios } from '@/router/axios'
// import axios from "axios";

const app = createApp(App);

installVuetify(app);
// installValidate(app)
installRouter(app);

// installAxios(app)
// app.use(axios)
app.mount('#app')
