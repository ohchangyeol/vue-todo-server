// reset CSS
import './assets/normalize.css'

import { createApp } from 'vue'
import App from './App.vue'


import { installVuetify } from '@/plugins/vuetify'

const app = createApp(App);

installVuetify(app);

app.mount('#app')
