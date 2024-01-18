// reset CSS
import './assets/normalize.css'

import { createApp } from 'vue'
import App from './App.vue'


import { installVuetify } from '@/plugins/vuetify'
// import { installValidate } from '@/plugins/veeValidate'
import { installRouter } from '@/router/routes'

const app = createApp(App);

installVuetify(app);
// installValidate(app)
installRouter(app);

app.mount('#app')
