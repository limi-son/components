<template>
    <div style="padding:1rem;">
        <!-- 按钮图标 -->
        <el-row :gutter="10" justify="space-between" style="color:#a7a7a7;margin-bottom:0.6rem;">
              <el-col :span="16" :push="1" style="color:#000;font-weight: bold;">My world is all about you</el-col>
              <el-col :span="3" :push="5"><el-button icon="el-icon-location-outline" size="mini" circle></el-button></el-col>
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
            <el-col :span="6"><div @click="goto('adoption')" class="grid-content bg-purple"><el-button style="color:pink;" icon="el-icon-present" circle></el-button></div></el-col>
            <el-col :span="6"><div @click="goto('atlas')" class="grid-content bg-purple-light"><el-button style="color:blue;" icon="el-icon-notebook-1" circle></el-button></div></el-col>
            <el-col :span="6"><div @click="goto('supplies')" class="grid-content bg-purple"><el-button style="color:yellow;" icon="el-icon-magic-stick" circle></el-button></div></el-col>
            <el-col :span="6"><div @click="goto('meow')" class="grid-content bg-purple"><el-button style="color:green;" icon="el-icon-chat-line-round" circle></el-button></div></el-col>
        </el-row>
        <!-- 讨论区 -->
        <dl class="discuss">
            <el-row :gutter="10" justify="space-between" style="margin-bottom:0.6rem;">
              <el-col :span="8">热门讨论区</el-col>
              <!-- <el-col :span="2" :push="14"><i class="el-icon-more"></i></el-col> -->
            </el-row>
            <dd v-for="(item,index) in discussItem" :key="index">
                <el-row type="flex"  align="middle">
                    <el-col :span="4">
                        <img class="discuss-img" :src="item.url"/>
                    </el-col>
                    <el-col :span="10">{{item.user}}</el-col>
                </el-row>
                <p>{{item.content}}</p>
                <el-row></el-row>
            </dd>
        </dl>
        <!--  -->
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
            ],
            discussItem:[
                {
                    url:require("../../assets/8.jpg"),
                    user:'admin',
                    content:'1234567,我滴朋友在哪里.'
                },
                {
                    url:require("../../assets/12.jpg"),
                    user:'xixixi',
                    content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦。'
                },
                {
                    url:require("../../assets/8.jpg"),
                    user:'Limi',
                    content:'怎么么办。'
                },
            ],
        }
    },
    methods:{
        goto(name){
            console.log(name)
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

.discuss{
   margin-top: 1rem;
   width: 100%;
}

.discuss dd{
    height: 7rem;
    width: 100%;
    margin-bottom: 0.4rem;
    box-shadow: #ccc 0 0 5px;
    border-radius: 0.4rem;
    padding: 0.5rem;
    box-sizing: border-box;
}
.discuss dd p{
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
    margin-top: 0.2rem;
}
.discuss-img{
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
}
</style>
