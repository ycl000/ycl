<template>
  <div id="app">
  <keep-alive exclude="about">
   <router-view/>
  </keep-alive>
   

<!--   // 路由设置
// <keep-alive>
//     <router-view v-if="$route.meta.keepAlive">
//          会被缓存的视图组件
//     </router-view>
// </keep-alive>

// <router-view v-if="!$route.meta.keepAlive">
//      不需要缓存的视图组件
// </router-view>-->
  </div>
</template>
<script>
// import Home from './views/Home.vue'
export default {
  name: "App",
  data(){
    return {

    }
  },
  components:{
    // Home
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
