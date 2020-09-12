<template>
         <!-- 轮播图-->
    <div style="height: auto;width: 100%;" id="carousel-example-generic" class="carousel slide" data-ride="carousel" autoplay>
   
          <!-- Indicators  圆点 -->
          <ol class="carousel-indicators">
            <li v-for="(item,index) in imglist" :key="index" data-target="#carousel-example-generic" :data-slide-to="index" style="margin-left:15px"></li>
         
          </ol>
        
          <!-- Wrapper for slides 图片-->
          <div class="carousel-inner" role="listbox" >
            <div  v-for="(item,index) in imglist" :key="index" class="item">
              <img style="width:100%" :src="item.src">
              <!-- 描述 -->
              <div class="carousel-caption" style="color:red">
                  <h3>图片{{index+1}}</h3>
                  <p>图片描述</p>
              </div>
            </div>
           
          </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:"swiper",
    data() {
        return {
            
        }
    },
    props:{
         imglist: {
                type: Array,
                required: true
            }
    },
    mounted() {
        $(".carousel-inner").children(":first").addClass("active")
        $(".carousel-indicators").children(":first").addClass("active")
        // console.log($(".carousel-inner").children(":first"))
        console.log(this.imglist)
    },
    
}
</script>
<style  >

</style>