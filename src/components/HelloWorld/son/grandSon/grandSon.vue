<template>
  <div class="grandSon bs">
    <div class="title" v-title>this is grandSon component</div>
    <div class="desc">此组件只总结slot相关知识</div>
    <h3>slot 示例！</h3>
    <div>
      <slot name="boy" say="我是作用域插槽" bye="byebye" :list="list"></slot>
    </div>
    <div>
      <slot name="girl"></slot>
    </div>
    <slot sex="male">默认插槽</slot>
    <child :lists="nameList">
      <template slot-scope="a">{{a.bbbbb.name}}</template>
    </child>
    <table class="cf"></table>
    <button class="cb" @click="getData">修改store里的globalData为2</button>
  </div>
</template>
<script>
import Vue from "vue";
Vue.component("child", {
  props: ["lists"],
  template: `
    <div class='tem'>
      <ul>
        <li v-for="list in lists">
          <slot :bbbbb="list"></slot>
        </li>
      </ul>
    </div>
  `
});
export default {
  name: "son",
  data() {
    return {
      msg: "",
      initNum: 0,
      list: [
        { id: "l1", text: "刘备" },
        { id: "l2", text: "关羽" },
        { id: "l3", text: "张飞" }
      ],
      nameList: [
        { id: 1, name: "孙悟空" },
        { id: 2, name: "猪八戒" },
        { id: 3, name: "沙和尚" },
        { id: 4, name: "唐僧" },
        { id: 5, name: "小白龙" }
      ]
    };
  },
  methods: {
    getData() {
      this.$store.state.globalData = 2;
    }
  }
};
</script>
<style>
.grandSon {
  border: 2px solid darkkhaki;
  padding: 10px;
}
.tem {
  background: darkgray;
}
ul {
  list-style: none;
}
li {
  float: left;
  margin-right: 20px;
}
</style>


