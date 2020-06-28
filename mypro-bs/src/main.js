import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "jquery/dist/jquery.min.js";//jq大雨3.5版本 bootstrap 导航条会有错误
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "zico/css/zico.min.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
