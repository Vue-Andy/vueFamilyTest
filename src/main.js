// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// vue路由的使用
import router from './router'

import './assets/css/common.css'       // 引入公共CSS文件的方法，如果只引入到私有样式文件，参考header.vue

// vuex的使用
import store from './store'

// vue中axios的使用
import axios from 'axios'              // 如果不想每个文件都引入这句话，就把axios挂到vue原型上，如下：
Vue.prototype.$axios = axios           // 使用的时候  this.$axios.get().then().catch() 

// vue 中fetch的使用
import Promise from "promise-polyfill";   
if(!window.Promise){
  window.Promise = Promise;
}

Vue.config.productionTip = false       // 此处屏蔽开发环境模式提示信息

// vue resource的使用
import VueResource from 'vue-resource'
Vue.use(VueResource)

//store  import vuex from 'vuex'  ------------
//store   Vue.use(vuex)           ------------
/*store  var store = new vuex.Store({
  state: {                        如果不单独建store
    globalData:0                  则把虚线处和此注释放开
  }                               也就不用import引入store了
}) */

// vue中插件的使用
import pzhUi from './plugins/pzh-ui'
Vue.use(pzhUi)

// 此处定义全局自定义指令
Vue.directive('title',{
  inserted(el){
    el.style.fontSize = '24px';
    el.style.fontWeight = 'bold';
    el.style.color = 'red';
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,                        //------------
  components: { App },
  template: '<App/>'
})
