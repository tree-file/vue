import Vue from 'vue'
import App from './App.vue'
import router from './js';

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:1904';

axios.interceptors.request.use(config=>{
  let token = localStorage.getItem('Authorization');
  if(config.url != '/login'){
    config.headers.Authorization = token;

  }
  return config;
}, error=>{
  return Promise.reject(error);
});

axios.interceptors.response.use(res=>{
  console.log(router.currentRoute.matched.some(item=>item.meta.requiresAuth))
  if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) && res.data.code == 401){
    router.replace({
      path:'/login',
      query:{
        redirectTo:router.currentRoute.fullPath
      }
    })
  }
  return res;
}, error=>{
    return Promise.reject(error);
});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),

  router,
}).$mount('#app')
