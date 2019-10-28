import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/HelloWorld'
import HelloTime from '@/components/HelloTime/HelloTime'
import HelloChina from '@/components/HelloChina/HelloChina'
import HelloTimeSon1 from '@/components/HelloTime/HelloTimeSon/HelloTimeSon1'
import HelloTimeSon2 from '@/components/HelloTime/HelloTimeSon/HelloTimeSon2'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
      // redirect: '/helloworld'
    },
    {
      path: '/helloworld/:userId/:storage',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 如果路由有子集路由且有默认路由，父级路由就不能用name，且其他地方通过name跳转到父级路由只能填写默认子集路由的name
    {
      path: '/hellotime',
      component: HelloTime,
      children:[
        {
          path:'/',
          redirect:'/helloTimeSon1'
        },
        {
          path:'/helloTimeSon1',
          name:'HelloTimeSon1',
          component:HelloTimeSon1
        },
        {
          path:'/helloTimeSon2',
          name:'HelloTimeSon2',
          component:HelloTimeSon2
        }
      ],
    },
    {
      path: '/hellochina',
      name: 'HelloChina',
      component: HelloChina
    }
  ]
})
