<template>
  <div style="padding:1rem;">
    <!-- 轮播 -->
    <transition name="fade" appear>
      <div style="padding-bottom:1rem;">
        <el-input class="nav-top" suffix-icon="el-icon-search" size="mini" v-model="search" placeholder="请输入...">
        </el-input>
        <el-carousel style="border-radius: 10px" trigger="click" arrow="never" height="200px">
          <el-carousel-item v-for="(item,index) in carouselItem" :key="index">
            <el-image
          style="width:100%; height: 100%"
          :src="item.url"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </transition>
    <!-- 推荐内容 -->
     <transition name="center-fade" appear>
       <div>
          <div class="center">
            <el-row :gutter="10" justify="space-between" style="margin-bottom:0.6rem;">
              <el-col :span="8">每日推荐</el-col>
              <el-col :span="2" :push="14"><i class="el-icon-more"></i></el-col>
            </el-row>
            <ul class="module">
              <li v-for="(item,index) in moduleItem" :key="index">
                <el-image  style="width:100%;" :src="item.img"/>
              </li>
            </ul>
          </div>
       </div>
     </transition>
      
   
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      carouselItem:[
        {
          url:require("../../assets/9.jpg"),
        },
        {
          url:require("../../assets/12.jpg"),
        },
        {
          url:require("../../assets/14.jpg"),
        }
      ],
      moduleItem:[
        {
          img: require("../../assets/6.jpg"),
        },
        {
          img: require("../../assets/7.jpg"),
        },
         {
          img: require("../../assets/8.jpg"),
        },
        {
          img: require("../../assets/7.jpg"),
        },
         {
          img: require("../../assets/6.jpg"),
        },
        {
          img: require("../../assets/8.jpg"),
        },
         {
          img: require("../../assets/6.jpg"),
        },
        {
          img: require("../../assets/7.jpg"),
        },
      ],
      search:'',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.center-fade-enter-active {
  transition: all .5s ease;
}
.center-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.center-fade-enter, .center-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .nav-top{
    margin-bottom: 0.5rem;
  }
  .center{
    position: relative;
  }
  .module{
    overflow: hidden;
   
  }
  .module li{
    width: 48%;
    height: 12rem;
    list-style: none;
    float: left;
    box-shadow: #99a9bf 0px 0px 5px;
    margin: 1%;
    box-sizing: border-box;
    border-radius: 0.2rem;
  }
</style>
