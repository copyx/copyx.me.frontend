import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'http://52.78.8.240:4728/',
});

new Vue({
  render: h => h(App),
}).$mount('#app');
