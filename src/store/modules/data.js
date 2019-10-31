const state = {
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
}
const getters = {
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
}
const mutations = {
  resetData(state) {
    console.log('resetData')
    state.globalData = 100
    state.isShow = true
    state.num1 = 35
    state.num2 = 25
  },
  add2(state) {
    return state.num1+=20
  }
}
const actions = {
  dataAction({commit}) {
    commit('add2')
    commit({
      type:'resetData'
    }) 
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}