<template>
<div>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' ,display:'flex' , alignContent: 'center'}">
    <a-button class="btns" type="primary" ghost>Primary</a-button><br><br>
    <a-button class="btns" ghost>Default</a-button><br><br>
    <a-button class="btns" type="dashed" ghost>Dashed</a-button><br><br>
    <a-button class="btns" type="danger" ghost>Danger</a-button>
    <!-- <a-button type="link" ghost>Link</a-button> -->
    <br>
    </div>
      <!-- <div>我是可见参数query:{{$route.query.id }}</div> -->
      <div>我是不可见参数params:{{$route.params.id }} 在git修改</div>
      
  
</div>

</template>

<script>
export default {
  name:'About',
  data() {
    return {

  }
  },
  created() {
    document.title = "about"
  },
  mounted() {
   
  },
  methods:{

  },
   
  destroyed() {
    console.log("被销毁")
  },
  activated() {
      console.log("未被销毁进入")
  },
  deactivated() {
    console.log("被销毁进入")
  },
  beforeRouteEnter (to, from, next) {
    // ...
    console.log("路由进图入之前")
    next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
      console.log("路由离开之前")
    next()
  }

}
</script>

<style scoped>
.btns{
flex: 1;
/* margin: 20px 0; */
margin-right: 10%;

 /* align-content: center; */
}
.bm-view {
width: 100%;
height: 700px;
}

h1,
h2 {
font-weight: normal;
}

ul {
list-style-type: none;
padding: 0;
}

li {
display: inline-block;
margin: 0 10px;
}

a {
color: #42b983;
}
</style>
