import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
    state: {
      son2Data:'I am son2 state\'s data',
      isLogout:true,
      mergeData:'',
      son2Num: 756
    }
})
export default store