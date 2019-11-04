import directives from './directives'
import filters from './filters'
const install = function(Vue) {
  directives(Vue)
  filters(Vue)
} 


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install
}