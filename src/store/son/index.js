import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
    state: {
      sonData:'I am son state\'s data',
      isLogin: false,
      sonNum: 123,
      totalNum: 0
    }
})
export default store