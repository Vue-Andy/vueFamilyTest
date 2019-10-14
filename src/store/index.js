import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
// 如果只是操作一个页面的状态，只需要state就可以了，如下
/* var store = new vuex.Store({
    state: {
      globalData:0
    }
}) */
// 如果操作多个页面的状态，则需要用到modules，如下:
// 首先引入需要的store对象
import sonStore from './son'
import greatSonStore from './greatSon'
var store = new vuex.Store({
    modules: {
        sonStore,
        greatSonStore
    },
    mutations:{
        mergeData(state){
            state.greatSonStore.mergeData = state.sonStore.sonData + ' ' +state.greatSonStore.greatSonData
        },
        mergeNum(state){
            state.sonStore.totalNum = state.sonStore.sonNum + state.greatSonStore.greatSonNum
        }
    },
    actions:{
        mergeAll(context){
            context.commit('mergeData')
            context.commit('mergeNum')
        }
    }
})
export default store