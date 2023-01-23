import { createApp } from 'vue'
import App from './App.vue'
import VueCreditCardValidation from 'vue-credit-card-validation';
import './assets/styles/main.scss'

const app = createApp(App);
app.use(VueCreditCardValidation);
app.mount('#app')
