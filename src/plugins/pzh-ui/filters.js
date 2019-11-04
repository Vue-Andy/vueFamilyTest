const FTY = function (val) {
  if(!val) {
    return '0.00'
  }else{
    return val/100
  }
}

const YTF = function (val) {
  if(!val) {
    return '0'
  }else{
    return val*100
  }
}

export default function(Vue) {
  Vue.filter('FTY',FTY)
  Vue.filter('YTF',YTF)
}