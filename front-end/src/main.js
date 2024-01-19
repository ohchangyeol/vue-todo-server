// reset CSS
import './assets/normalize.css'

import { createApp } from 'vue'
import App from './App.vue'


import { installVuetify } from '@/plugins/vuetify'
import { installRouter } from '@/router/routes'
import { installPinia } from '@/plugins/pinia'

// 사용 하고싶은 라이브러리
// import { installValidate } from '@/plugins/veeValidate'


const app = createApp(App);

installVuetify(app);
// installValidate(app)
installRouter(app);
installPinia(app)

app.mount('#app')
