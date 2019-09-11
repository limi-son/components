

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
      meta: { title: 'login' },
      component: ()=>import('@/view/login/login.vue')
    },
    {
      path: '/test', //路径
      name:'test',
      component: () => import('@/view/Layout.vue'), //父组件
      children: [
        {
          path: 'test1',
          name: 'test1', 
          meta: { title: '401' },//icon: 'guihuashishi' 
          component: () => ()=>import('@/view/test/test1.vue') //子组件
        },
        {
          path: 'test2',
          name: 'test2',
          meta: { title: '403' },
          component: ()=>import('@/view/test/test2.vue')
        },
      ]
    }
  ]


export default appRouter