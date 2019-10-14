import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
    state: {
      greatSonData:'I am greatSon state\'s data',
      isLogout:true,
      mergeData:'',
      greatSonNum: 756
    }
})
export default store