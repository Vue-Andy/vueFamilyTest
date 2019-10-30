const state = {
  // 测试mutation的登录数据
  username:'pzh',
  token:'sern002115dfdf02512dfe2',
  cart:[{cargoName:'洗衣机'}],
  login:true,
  num3: 222,
  num4:555
}
// 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的 局部 状态对象。
const getters = {
  // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来  第二个参数是getters
  getLoginNumTotal( state,getters,rootState) {
    console.log(getters,rootState)
    return state.num3 + state.num4
  }
}
const mutations = {
  logout(state){
    state.username = '游客'
    state.token = ''
    state.cart = []
    state.login = false
  }
}
// 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
const actions = {
  logoutAndReset({state,commit ,rootState,getters}) {
    console.log(state,rootState)
    commit('logout')
    /* commit({
      type:'resetData'
    })  */
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}