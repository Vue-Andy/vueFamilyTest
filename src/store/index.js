import Vue from 'vue'
import vuex from 'vuex'

import login from './modules/login'
import data from './modules/data'

// 独立出全局getters，mutations，actions
import getters from './getters'
import mutations from './mutaitons'
import actions from './actions'

Vue.use(vuex)
// 如果只是操作一个页面的状态，只需要state就可以了，如下
var store = new vuex.Store({
  modules: {
    login,
    data
  },
  state: {
    globalNum1: 101,
    globalNum2: 355
  },
  // 不独立出getters的写法
  /* getters:{
    mergeGlobalNum(state) {
      console.log(state)   // 全局状态对象包含了局部状态对象
      return state.globalNum1 + state.globalNum2
    }
  }, */
  // 独立出getters的写法
  getters:getters,
  // 不独立出mutations的写法
  /* mutations:{
    add1(state) {
      return state.globalNum1++
    }
  }, */
  // 独立出mutations的写法
  mutations:mutations,
  // 不独立出actions的写法
  /* actions:{
    logoutAndReset(context) {  // 或使用解构 {commit}  
      console.log(context)
      context.commit('logout')  // 使用解构后 commit('logout')
      context.commit('resetData')
    }
  } */
  // 独立出actions的写法
  actions:actions,
})
export default store

