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
      <div>我是不可见参数params:{{$route.params.id }}</div>
  <div class="hello">

    <baidu-map class="bm-view" :center="{lng: mapArr.lng, lat: mapArr.lat}" :zoom="15" :scroll-wheel-zoom="true">
    <bm-marker :position="{lng: mapArr.lng, lat: mapArr.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
    </bm-marker>
    </baidu-map>
  </div>
  <div id="mpa"></div>
</div>

</template>

<script>

import {BMap} from 'vue-baidu-map'
export default {
  name:'About',
  props: ['ipAll'],
  data() {
    return {
      mapArr: {
        lat: 0,
        lng: 0,
      },
    }
  },
  created() {
    document.title = "about"
  },
  mounted() {
    this.getWd()
    // this.get_address()
    this.handler()
  },
  methods:{
    showLocation(e) {//jsonp回调的方法，拿到转换成经纬度的值
    console.log(e.result)
      this.mapArr = e
    },
    getWd() {
      let vm = this;
      vm.$jsonp(

      //调用百度地图，获取地理位置的经纬度
      'http://api.map.baidu.com/geocoding/v3/?address=192.168.0.151&output=json&ak=X7UHQqYy3WobTXHk3Mw3oN96ahHcQuuG&callback=showLocation',
      )
      .then(res => {
          console.log(res)
          // vm.showLocation(res)
      })
      .catch(err => {
        console.log(err)
      });
},
get_address(){
  // console.log(new BMap())
   var map = new BMap.Map("mpa");//创建Map实例，注意页面中一定要有个id为allmp的div

    var point = new BMap.Point(116.331398,39.897445);//创建定坐标
    map.centerAndZoom(point,12);//// 初始化地图,设置中心点坐标和地图级别
   var geolocation = new BMap.Geolocation();
    var gc = new BMap.Geocoder();//创建地理编码器
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r){
        // if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            alert('您的位置：' + r.point.lng + ',' + r.point.lat);

            var pt = r.point;   
            map.panTo(pt);//移动地图中心点
            //alert(r.point.lng);//X轴
            //alert(r.point.lat);//Y轴 
 
            gc.getLocation(pt, function(rs){    
                var addComp = rs.addressComponents;
                //alert(addComp.city);
               alert(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);    
            });  

        // }
        // else {
        //     alert('failed'+this.getStatus());
        // }        
    });
},
 handler () {
        let _this = this;  // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          console.log(r);
          _this.center = {lng: r.longitude, lat: r.latitude};   // 设置center属性值
          _this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};   // 自定义覆盖物
          _this.initLocation = true; 
          console.log('center:', _this.center)  // 如果这里直接使用this是不行的
        },{enableHighAccuracy: true})

        // 下面注释是百度地图API官方实现方法，因为我使用自定义图标覆盖物，所以没有使用这种方法！
        // 如使用以下这种方法，那么我Template里所写的自定义定位图标代码是不需要的
        // var geolocation = new BMap.Geolocation();
        // geolocation.getCurrentPosition(function(r){
        // if(this.getStatus() == BMAP_STATUS_SUCCESS){
        //   var mk = new BMap.Marker(r.point);
        //   map.addOverlay(mk);
        //   map.panTo(r.point);
        //   alert('您的位置：'+r.point.lng+','+r.point.lat);
        // }
        // else {
        //   alert('failed'+this.getStatus());
        // }
        // },{enableHighAccuracy: true})
      }
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
