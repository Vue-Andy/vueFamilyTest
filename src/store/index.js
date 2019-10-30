import Vue from 'vue'
import vuex from 'vuex'

import login from './modules/login'
import data from './modules/data'

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
  getters:{
    mergeGlobalNum(state) {
      console.log(state)   // 全局状态对象包含了局部状态对象
      return state.globalNum1 + state.globalNum2
    }
  },
  mutations:{
    
    
  },
  actions:{
    
  }
})
// 如果操作多个页面的状态，则需要用到modules，如下:
// 首先引入需要的store对象
/* import son1Store from './son1'
import son2Store from './son2'
var store = new vuex.Store({
  modules: {
    son1Store,
    son2Store
  },
  mutations: {
    mergeData(state) {
      state.son2Store.mergeData = state.son1Store.sonData + ' ' + state.son2Store.son2Data
    },
    mergeNum(state) {
      state.son1Store.totalNum = state.son1Store.sonNum + state.son2Store.son2Num
    }
  },
  actions: {
    mergeAll(context) {
      context.commit('mergeData')
      context.commit('mergeNum')
    }
  }
}) */
export default store

