// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//store  import vuex from 'vuex'  ------------
import App from './App'
import router from './router'
import './assets/css/common.css'       // 引入公共CSS文件的方法，如果只引入到私有样式文件，参考header.vue
import store from './store'
import VueResource from 'vue-resource' //引入引入资源请求插件vue-resource，用于发起http请求
import axios from 'axios'              // 如果不想每个文件都引入这句话，就把axios挂到vue原型上，如下：
Vue.prototype.$axios = axios           // 使用的时候  this.$axios.get().then().catch()  
Vue.config.productionTip = false       // 此处屏蔽开发环境模式提示信息
Vue.use(VueResource)
//store   Vue.use(vuex)           ------------
/*store  var store = new vuex.Store({
  state: {                        如果不单独建store
    globalData:0                  则把虚线处和此注释放开
  }                               也就不用import引入store了
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,                        //------------
  components: { App },
  template: '<App/>'
})
