<template>
  <div class="home">
<a-layout id="components-layout-demo-top-side" :style="{height:'100%'}">
<a-row>
  <a-col :span="24">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' ,float:'left'}"
         @click="click($event)"
      >
        <a-menu-item key="1" value="nav1">nav 1</a-menu-item>
        <a-menu-item key="2" value="nav2">nav 2</a-menu-item>
        <a-menu-item key="3" value="nav3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-col>
  <a-col :span="24">
    <a-layout-content style="padding: 0 10px;height:100%">
    
      <a-layout style="padding: 24px 0; background: #fff;">
       
        <a-layout-content @click="deb2" :style="{ padding: '0 0', minHeight: '480px' ,height:'100vh'}">
        <!-- .native 将一个vue组件变成一个普通的html，使其可以监听click等原生事件-->
          <myswiper @click.native="c()" :msg="fat" v-on:imgLoad="imgload"   v-on:listenChild="childData" ref="myswiper">
            
            <template slot="boy" slot-scope="a"><font color="red" style="font-weight:900;font-size:23px">我是一个插槽属性键值对:{{a}}</font></template>
          </myswiper>
          <!-- <h3>我是一个插槽内容</h3> -->
          <a-button class="btns" type="primary" @click="about" ghost>跳转about</a-button><br><br>
        </a-layout-content>
      </a-layout>
      
    </a-layout-content>
 </a-col>

    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>

  </a-row>
  </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {get} from '../network/request/request'

// import store from '../store/index'

//按需加载组件
const myswiper = ()=>import('../components/comment/swiper/swiper')
// 或者   const ComponentA = resolve => require(['./ComponentA'], resolve)
// import myswiper from '../components/comment/swiper/swiper'


import {mapState,mapMutations} from 'vuex'
import s from 'vuex'
import {FUN} from '../store/mutations-Types'

// 防抖操作 在一定时间内重复操作 无论操作多少次 都是在最后一次的一定事件内调执行setTimeout中的函数
  function debounces(time){
        console.log("doubance")
        let timeout = null;
        // console.log(timeout);
        
        return function(){
          if(timeout !== null)clearTimeout(timeout)
          timeout = setTimeout(function(){
              console.log("debounce");
            },time)
        }
        
        // console.log("debounce")
  }
// 节流操作 在一定时间内重复操作 无论操作多少次 都是在一秒之后执行setTimeout中的函数(第一次点击之后的一秒之内再次点击无效)
  function fnThrottle(delay){  //节流函数
    let timer = null;
    let previous = null;
    return function(){
      let now = +new Date()
      if(!previous) previous = now;
      if(delay && now - previous > delay){
          console.log("fnThrottle")
          previous = now;
          clearTimeout(timer)
      }else{
          clearTimeout(timer)
          timer = setTimeout(()=>{
          console.log("fnThrottle")
          previous = null
        },delay)
      }
    }
  }
 
export default {
  name: 'Home',
  data(){
    return{
      collapsed: false,
      current:0,
      fat:"ycl 我是父组件的内容"
    }
  },
  // 注册组件
   components: {
    myswiper
    // HelloWorld
  },
  computed: {
    //采用对象方式相当于重命名
    ...mapState({
     count: 'data'
    })
    //相当于
    // count(){
    //   return this.$store.state.data
    //}
    //采用数组方式
    //...mapState([data])
    //可在其他钩子中使用this.data调用
// mapMutations, mapActions放在方法中使用

    // ...mapState(['data'])
  },
  created(){
    document.title = 'Home'
    this.onload()
    console.log(this.count)

  },
  // mounted:()=>{
  //   function debounces(time){
  //       console.log("doubamce")
  //       let timeout = null;
  //       // console.log(timeout);
        
  //       return function(){
  //         if(timeout !== null)clearTimeout(timeout)
  //         timeout = setTimeout(function(){
  //             console.log("debounce");
  //           },time)
  //       }
        
  //       // console.log("debounce")
  //     }
  // },
  mounted() {
        console.log(s)
        this.fat="ycl 改过的父组件内容"
  },
  methods:{
    click(k){
      console.log(k)
      console.log(k.item.value)
      // refs 通过refs 标记获取子组件
      console.log(this.$refs.myswiper)
    },
     onChange(current) {
      console.log('onChange:', current);
      this.current = current;
    },
    itemClick(e){
      console.log("itemClick")
      console.log(e.key)
    },
    onload(){
      get('https://mock.yonyoucloud.com/mock/5897/ycl',null).then(res=>{
        console.log(res)
      })
      
      // this.$store.commit('fun',"我是改过的")
       this.$store.dispatch('fun2',"我是改过的")
        // console.log(k.item.value)
      console.log(this.$store.state.data)
      // this.$router.push({path:'/about'})
    },
    deb:debounces(1000),
    deb2:fnThrottle(1000),
    childData(s){
      console.log(s,"sssssss")
    },
    imgload(){
      console.log("加载完成")
    },
    ...mapMutations({
      fun:FUN
    }),
    about(){
      this.$router.push({name:'About',params:{
        id:2222
      }})
      // this.$router.push({path:'/about',query:{id:333}})
    }
  
  },
  watch:{
    fat(newVal,oldVla){
      console.log(newVal,oldVla)
    }
  }
 
}
</script>

<style scoped>
 #components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
 }

</style>
