import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'https://api.copyx.me:4728/',
});

new Vue({
  render: h => h(App),
}).$mount('#app');
