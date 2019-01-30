import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import './registerServiceWorker'

import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.css';

import Vuetify from 'vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './styles/global.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import fullCalendar from 'vue-fullcalendar';
import { setupComponents } from './config/setup-components';

import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);

setupComponents(Vue);

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  data: {
    themeColor: '#1D2939',
    userEmail: 'marcio@xdev.com.br',
    userPassword: '123456'
  },
  render: h => h(App)
}).$mount('#app')
