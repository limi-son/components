import Vue from 'vue'
import Router from 'vue-router'
import appRouter from './appRouter'

Vue.use(Router)

const router= new Router({
   routes: appRouter
})



export default router