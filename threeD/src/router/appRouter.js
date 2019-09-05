const appRouter=[
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('@/view/components/HelloWorld.vue')
    }
  ]
export default appRouter