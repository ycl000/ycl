import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.  按需加载  
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于',
    }
  },{
    path:'/myonline',
    name:'Myonline',
    component:()=>import('../views/Myonline.vue'),
    meta: {
      title: '个人中心',
    }
  }
]
2812309479
const router = new VueRouter({
  routes
})

// 路由前置导航守卫
router.beforeEach((to,from,next)=>{
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title || 'admin'
  next()
})

export default router
