<template>
  <div class="home">

  <!--头部header-->
    <nav class="navbar navbar-default" style="z-index:8;background: rgba(39, 34, 34);margin-bottom:-2px">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#w1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="w1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    
 
    <swiper :imglist="imglist"></swiper>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">s</div>
        <div class="col-md-4">s</div>
        <div class="col-md-4">s</div>
      </div>
    </div>
        
  </div>
</template>

<script>
// @ is an alias to /src
import swiper from "../components/swiper/swiper"
import $ from 'jquery'
export default {
  name: 'Home',
  data() {
    return {
       imglist:[
        {'src':require("../img/logo1.jpg"),'text':"1"},
        {'src':require("../img/logo2.jpg"),'text':"2"},
        {'src':require("../img/logo3.jpg"),'text':"3"},
        {'src':require("../img/logo4.jpg"),'text':"4"}
      ]
    }
  },
  components: {
swiper
  },
  mounted() {
    // $('.alert').alert("sssssss")
    console.log($("#w1"))
    var that = this
    setTimeout(function(){
      console.log(that.imglist)
      //图片路径需要使用require来加载
       that.imglist.push({'src':require("../img/logo3.jpg"),'text':"4"})
      
    },2000)
   
    
  },
  methods: {
    
  },
}
</script>
<style>
#w1{
  position: absolute;
    width: 100%;
    background: rgba(39, 34, 34, 0.4);
}
body{
  overflow-x: hidden;
}
html{
  overflow-x: hidden;
}

</style>
