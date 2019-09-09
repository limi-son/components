import Vue from 'vue'
import Router from 'vue-router'
import appRouter from './appRouter'
import Cookies from 'js-cookie';

Vue.use(Router)

const router= new Router({
   routes: appRouter
})

router.beforeEach((to, from, next) => {
    if (!Cookies.get('user') && to.name !== 'login') { 
        // 判断是否已经登录且前往的页面不是登录页
            next({
                name: 'login'
            });
        } else if (Cookies.get('user') && to.name === 'login') {
            // 判断是否已经登录且前往的是登录页
            next({
                name: 'home'
            });
        } else {
           next();
        }
})



export default router