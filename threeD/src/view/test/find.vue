<template>
    <div style="padding:1rem;">
        <!-- 按钮图标 -->
        <el-row :gutter="10" justify="space-between" style="color:#a7a7a7;margin-bottom:0.6rem;">
              <el-col :span="16" :push="1" style="color:#000;font-weight: bold;">My world is all about you</el-col>
              <el-col :span="3" :push="5"><el-button icon="el-icon-sugar" size="mini" circle></el-button></el-col>
        </el-row>
        <!-- 滑动 -->
        <transition name="aitems-fade" appear>
            <div class="a_content">
                <div class="a_con">
                    <div class="aitems">
                        <div class="a_item" v-for="(item,index) in aitemsItem" :key="index">
                            <img :src="item.url" alt="">
                            <p>{{item.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!-- 中部操作按钮 -->
        <el-row type="flex" class="row-bg" justify="space-between" style="text-align: center;margin:1rem 0 0.6rem 0;">
            <el-col :span="6"><div class="grid-content bg-purple"><el-button icon="el-icon-search" circle></el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"><el-button icon="el-icon-search" circle></el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><el-button icon="el-icon-search" circle></el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><el-button icon="el-icon-search" circle></el-button></div></el-col>
        </el-row>
        <!-- 讨论区 -->

    </div>
</template>
<script>
export default {
    data(){
        return{
            aitemsItem:[
                {
                   text:'122',
                   url:require("../../assets/9.jpg"), 
                },
                {
                   text:'122',
                   url:require("../../assets/13.jpg"), 
                },
                {
                   text:'122',
                   url:require("../../assets/10.jpg"), 
                },
                {
                   text:'122',
                   url:require("../../assets/11.jpg"), 
                }
            ]
        }
    }
}
</script>
<style scoped>
.a_content{
    width: 100%;
    height: 10rem;
    overflow: hidden;
    
}
.a_con{
      width: 100%;
      height: 100%;
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
      overflow-y: hidden;
      text-align: center;
}
.aitems{
        display: inline-block;
        white-space: nowrap;
        text-align: center;
        width: 100%;
        height: 100%;
}
.a_item{
    display: inline-block;
    width:18rem;
    margin-right: 0.053333333333333rem;
    overflow: hidden;
    height: 100%;
    position: relative;
    border-radius: 1rem;
}
.a_item img{
     width: 17rem;
     height: 10rem;
}
.a_item p{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 93%;
    position: absolute;
    background: rgba(2, 2, 2, 0.2);
    color:#fff;
    text-align: left;
}
.aitems-fade-enter-active {
  transition: all .5s ease;
}
.aitems-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.aitems-fade-enter, .aitems-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
