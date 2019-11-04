/* export default function mergeGlobalNum(state) {
  console.log(state)   // 全局状态对象包含了局部状态对象
  return state.globalNum1 + state.globalNum2
} */

const mergeGlobalNum = state => state.globalNum1 + state.globalNum2
export default { mergeGlobalNum }

