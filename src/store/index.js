import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
// 如果只是操作一个页面的状态，只需要state就可以了，如下
var store = new vuex.Store({
  state: {
    globalData:0,
    isShow:false,
    num1:12,
    num2:10,
    scores:[{
      name:'张三', score: 98,
    }, {
      name:'李四', score: 70,
    }, {
      name:'王五', score: 80,
    }, {
      name:'赵六', score: 56,
    }],
    // 测试mutation的登录数据
    username:'pzh',
    token:'sern002115dfdf02512dfe2',
    cart:[{cargoName:'洗衣机'}],
    login:true
  },
  getters:{
    getPassedScore: state => {
      return state.scores.filter( score => score.score >= 60)
    },
    // getter也可以接受其他 getter 作为第二个参数
    passedStudentsCount: (state,getters) => {
      return getters.getPassedScore.length
    },
    // 也可以通过让 getter 返回一个函数，来实现给 getter 传参
    getSomeScoreCount: (state) => (score) => {
      return state.scores.filter( item => item.score >= score ).length
    }
  },
  mutations:{
    logout(state){
      state.username = '游客'
      state.token = ''
      state.cart = []
      state.login = false
    }
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

