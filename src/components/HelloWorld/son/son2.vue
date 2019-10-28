<template>
  <div class="son2 fl bs">
    <div class="title" v-title>this is son2 component</div>
    <div class="desc">此组件只总结兄弟组件通信的相关知识</div>
    <div v-if="msg">从son1组件传过来的值为：{{msg}}</div>
    <hr />
  </div>
</template>
<script>
// import Vue from 'vue'
// var Bus = new Vue()
import Bus from "../../../bus.js";
export default {
  name: "son2",
  data() {
    return {
      msg: 0
    };
  },
  created() {
  },
  mounted() {
    Bus.$on("bro", data => {
      this.msg = data;
    });
  },
  methods: {
  }
};
</script>
<style scoped>
.son2 {
  width: 50%;
  height:450px;
  overflow-y:auto;
  border: 2px solid cornflowerblue;
}
</style>



