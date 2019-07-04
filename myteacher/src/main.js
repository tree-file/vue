import Vue from 'vue'
import App from './App.vue'
import router from './js';

import axios from 'axios'
Vue.prototype.$axios = axios;
// 配置基础路径
axios.defaults.baseURL = 'http://localhost:1904';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
