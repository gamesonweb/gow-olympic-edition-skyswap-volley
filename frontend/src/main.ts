import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import App from './gui/App.vue'

createApp(App).use(createVfm()).mount('#app')
