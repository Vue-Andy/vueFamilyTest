<template>
  <div class="son fl bs">
    <div v-title>this is son1 component</div>
    <div class="desc">此组件只总结兄弟组件通信的相关知识</div>
    <div>{{initNum}}</div>
    <button @click="toBrother">click me-兄弟组件通信!</button>
    <grandSon>
      <template slot="boy" slot-scope="obj">
        <div>具名插槽boy -- 帅气，高大，威猛</div>
        <ul>
          <li v-for='item in obj.list' :key='item.id'>{{item.text}}</li>
        </ul>
      </template>
      <template slot-scope="obj">默认的插槽 {{obj.sex}}</template>
      <template slot="girl">具名插槽girl -- 优雅，美丽，大方</template>
    </grandSon>
  </div>
</template>
<script>
// import Vue from 'vue'
// var Bus = new Vue()
import Bus from "../../../bus.js";
import grandSon from "./grandSon/grandSon";
export default {
  name: "son",
  data() {
    return {
      initNum: 0
    };
  },
  mounted() {},
  methods: {
    toBrother() {
      this.initNum++;
      Bus.$emit("bro", this.initNum);
    }
  },
  components: { grandSon }
};
</script>
<style>
.son {
  border: 2px solid darkcyan;
  padding: 10px;
  width: 50%;
  height:450px;
  overflow-y:auto;
}
</style>

