const logoutAndReset = context => {
  context.commit('logout')  // 使用解构后 commit('logout')
  context.commit('resetData')
}

export default { logoutAndReset }