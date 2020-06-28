import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // meta: {
    //   keepAlive: true // 需要被缓存
    // }
  },
  {
    path: '/about',
    name: 'About',
    // component:About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 路由懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = new VueRouter({
  mode:'history',
  routes
})

export default router

// 命名的路由
// router.push({ name: 'user', params: { userId: '123' }})

// // 带查询参数，变成 /register?plan=private
// router.push({ path: 'register', query: { plan: 'private' }})
// 在浏览器记录中前进一步，等同于 history.forward()
// router.go(1)

// // 后退一步记录，等同于 history.back()
// router.go(-1)

// // 前进 3 步记录
// router.go(3)