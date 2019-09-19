

export const Router=[
    {
      path: '/', //路径
      name:'layout',
      component: () => import('@/view/Layout.vue'), //父组件
      redirect: { name: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {title:'首页',i:'el-icon-star-off'},
          component: ()=>import('@/view/components/home.vue')
        },
        {
          path: 'find',
          name: 'find', 
          meta: { title: '发现',i:'el-icon-menu' },//icon: 'guihuashishi' 
          component: ()=>import('@/view/test/find.vue') //子组件
        },
        {
          path: 'user',
          name: 'user',
          meta: { title: '我的',i:'el-icon-user' },
          component: ()=>import('@/view/test/user.vue')
        },
      ]
    }
  ]


export const Intercept=[
    {
      path: '/login',
      name: 'login',
      meta: { title: 'login' },
      component: ()=>import('@/view/login/login.vue')
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
]

export const appRouter=[
  ...Router,
  ...Intercept
]