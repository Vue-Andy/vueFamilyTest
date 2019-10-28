<template>
  <div class='son'>
    <div v-title>父子传值-littleSon组件</div>
    <div class="desc">此组件只总结父传子的相关知识</div>
    <div>通过props传值，子组件直接使用：{{msg}}</div>
    <div>父组件直接调用子组件的方法：{{msg1 ? msg1 : ''}}</div>
  </div>
</template>

<script>
export default {
  name: "LittleSon",
  props:['msg'],
  data () {
    return {
      msg1:'初始值'
    };
  },

  components: {},

  methods: {
    changeTxt(msg) {
      this.msg1 = msg
    }
  },
  created() {},
  mounted() {
  }

}

</script>

<style scoped>
.son {
  border: 2px solid rgb(0, 17, 17);
  padding: 10px;
  width: 50%;
  height:450px;
  overflow-y:auto;
}
</style>