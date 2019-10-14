import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/HelloWorld'
import HelloTime from '@/components/HelloTime/HelloTime'
import HelloChina from '@/components/HelloChina/HelloChina'
import HelloTimeSon1 from '@/components/HelloTime/HelloTimeSon/HelloTimeSon1'
import HelloTimeSon2 from '@/components/HelloTime/HelloTimeSon/HelloTimeSon2'
Vue.use(Router)
import Promise from "promise-polyfill";   // vue 中fetch的使用
if(!window.Promise){
  window.Promise = Promise;
}
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloworld/:userId/:storage',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hellotime',
      name: 'HelloTime',
      component: HelloTime,
      children:[
        {
          path:'/helloTimeSon1',
          component:HelloTimeSon1
        },
        {
          path:'/helloTimeSon2',
          component:HelloTimeSon2
        }
      ],
      redirect:'/helloTimeSon1'
    },
    {
      path: '/hellochina',
      name: 'HelloChina',
      component: HelloChina
    }
  ]
})
