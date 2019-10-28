<template>
  <div class='son'>
    <div v-title>父子传值-Son组件</div>
    <div class="desc">此组件只总结子传父的各种方法</div>
    <button @click='m1(100)'>子传父-1.父：定义方法 子：this.$parent.父方法名</button><br>
    <button @click='m2'>子传父-2.父：绑定自定义事件 子：this.$emit('自定义事件名')</button><br>
    <button @click="m3">子传父-3.父：this.$on('自定义事件名')  子:this.$emit('自定义事件名')</button><br>
    <button @click="m4">子传父-4.父：属性传值  子:this.传过来的属性名</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  props:['attrMethod'],
  data () {
    return {
      msg: "this is son1 component",
      initNum: 200
    };
  },

  components: {},

  methods: {
    m1(num) {
      // 父组件定义handleSon1方法
      this.$parent.handleSon1(num)
    },
    m2() {
      // 父组件通过自定义事件 mm 和子组件通信
      this.$emit('mm',200)
    },
    m3() {
      this.initNum++;
      // 父组件用了$on 子组件就必须用$emit  通过自定义事件通信
      this.$parent.$emit("handleSon3", this.initNum);
    },
    m4() {
      // 父组件通过属性传值把方法传给子组件
      this.attrMethod(400)
    },
  },

  created() {},

  mounted() {
  }

}

</script>

<style scoped>
.son {
  border: 2px solid darkcyan;
  padding: 10px;
  width: 50%;
  height:450px;
  overflow-y:auto;
}
</style>