export default function (Vue) {
  Vue.directive('color-green', {
    inserted: function (el, binding) {
      el.style.color = 'green';
    }
  })
}