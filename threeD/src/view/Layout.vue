<template>
    <div class="main">
        <!-- 路由 -->
        <keep-alive>
          <router-view class="route"/>
        </keep-alive>
        <!-- 底部导航 -->
        <footer>
         <nav>
            <li v-for="(nav) in navs" :key="nav.name" @click="goto(nav)" :class="navColor===nav.name ? 'activeColor' : 'navColor'">
              <i :class="nav.meta.i" ></i>
            <span>{{nav.meta.title}}</span>
            </li>
         </nav>
       </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navs:[],
            navColor:this.$router.app._route.name,
        }
    },
    watch: {
        navColor: {
           handler:function(val){
               
           },
            immediate: true,
            //  深入监听
            deep: true,
        },
    },
    mounted() {
        this.navs=this.$store.state.app.menuList[0].children;

    },
    methods:{
        goto(nav){
            this.navColor=nav.name;
            this.$router.push({ name: nav.name });
        }
    }
}
</script>
<style lang="css">
.main{
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
}
.activeColor{
    color: rgb(79, 79, 235);
}
.navColor{
    color: #a7a7a7;
}
.route{
     flex: 1;
    flex-direction: column;
    overflow: auto;
}
 footer {
    height: 3rem;
    border-top: 1px solid #e6e7e8;
    background: rgb(250, 248, 252);
 }
  nav {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;}
 nav li{
        display: flex;
        flex-direction: column;
        text-align: center;
        flex: 1;
        /* color: #a7a7a7; */
        /* height: 3rem; */
 }
 nav li i {
      height: 0.6;
      font-size: 1.2rem;
 }
 nav li span{
     font-size: 0.6rem;
 }
</style>

