<template>
    <div>{{msg}}

 <a-carousel autoplay arrows>
     <div
      slot="prevArrow"
      slot-scope=""
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
        <div @click="show()" v-for="(img,index) in imgList" :key="index"><img @load="imgLoad" v-lazy="img.src"/></div>
        
    </a-carousel>
    <slot @click="s()" name="boy" say="你好" age="16"></slot>
    </div>
   
</template>

<script>
export default {
    props:['msg'],
    data(){
        return {
            data:"child",
            imgList:[
              {'src':require("../../../assets/img/s1.png")},
              {'src':require("../../../assets/img/s2.png")},
              {'src':require("../../../assets/img/s3.png")},
              {'src':require("../../../assets/img/s4.png")}
            ]
        }
    },
    mounted() {
     
    },
    watch:{
        msg(val){
          console.log(val,this.msg)
        }
    },
    methods:{
        show(){
          
            this.$emit('listenChild',this.msg)
        },
         imgLoad(){
           console.log("ssssssss")
           this.$emit('imgLoad')
         },
        s(){
            console.log(this.msg)
        }
    }  
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 360px;
  line-height: 360px;
  /* background: salmon; */
  overflow: hidden;
}

/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 460px;
  line-height: 460px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
/*img[lazy=loaded] {
  设置图片
    content: url('../../../assets/img/s1.png');
  }
  */
</style>