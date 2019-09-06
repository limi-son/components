const appRouter=[
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/view/components/HelloWorld.vue')
    },
    {
      path: '/401',
      name: '401',
      component: ()=>import('@/view/Intercept/401.vue')
    },
    {
      path: '/403',
      name: '403',
      component: ()=>import('@/view/Intercept/403.vue')
    },
    {
      path: '/500',
      name: '500',
      component: ()=>import('@/view/Intercept/500.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/view/login/login.vue')
    }
  ]


export default appRouter