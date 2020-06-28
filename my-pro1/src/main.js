import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
// import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/dist/antd.css'
// import button from 'ant-design-vue/lib/button/button'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueLazyload from 'vue-lazyload'
import vueJsonp from 'vue-jsonp'
// import BMap from 'vue-baidu-map'
Vue.use(vueJsonp)

 
// Vue.use(VueLazyload)
// 或者添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  // loaded:'dist/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
// 默认配置的监听事件：['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
// Vue.use(ElementUI)
Vue.use(Antd)
// Vue.component(button.name,Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
