// reset CSS
import './assets/normalize.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VCalendar } from 'vuetify/labs/VCalendar'
import DayJsAdapter from '@date-io/dayjs'

import ko from 'date-fns/locale/ko'

const vuetify = createVuetify({
  components ,
  date: {
    adapter: DayJsAdapter,
    locale: {
      ko: ko,
    },
  },
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
//   ssr: true,
})

createApp(App).use(vuetify).mount('#app')
