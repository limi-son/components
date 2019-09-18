<template>
  <div style="padding:1rem;">
    <!-- 轮播 -->
    <transition name="fade" appear>
      <div style="padding-bottom:1rem;">
        <el-input class="nav-top" suffix-icon="el-icon-search" size="mini" v-model="search" placeholder="请输入...">
        </el-input>
        <el-carousel style="border-radius: 10px" trigger="click" arrow="never" height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <el-image
          style="width:100%; height: 100%"
          :src="url"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </transition>
    <!-- 小标题 -->
     <transition name="center-fade"  appear>
       <div>
          <div class="center">
            <el-row :gutter="10" justify="space-between" style="color:#a7a7a7;">
              <el-col :span="8">优选推荐>>></el-col>
              <el-col :span="2" :push="14"><i class="el-icon-more"></i></el-col>
            </el-row>
            <ul class="module">
              <li v-for="item in 8"></li>
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
      url: require('../../assets/back2.jpg'),
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
    /* background: #eafa0d; */
    list-style: none;
    float: left;
    background: #475669;
    margin: 0.2rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
  }
</style>
