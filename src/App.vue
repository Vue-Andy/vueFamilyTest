<template>
  <div id="app">
    <headerCom></headerCom>
    <div class="outer">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <footer class='cf'>Footer</footer>
  </div>
</template>

<script>
import headerCom from "@/components/header";
// import axios from 'axios'  // 如果是单独使用，可以这样引入，使用的时候  axios.get().then()
export default {
  name: "App",
  data() {
    return {
      todos: []
    };
  },
  components: {
    headerCom
  },
  mounted() {
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
  background: #ddd;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.outer {
  width: 100%;
  border-top: 1px solid #333; /* overflow:hidden; 清除浮动的方式之一  zoom:1;兼容IE6*/
  height:100%;
  padding:60px 0 30px 0;    
  box-sizing: border-box;
}
.desc{
  color:#999;
  font-size: 14px;
}
.todos {
  text-align: left;
}
.todos span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: cyan;
  margin: 5px;
}
footer{
  width:100%;
  height:30px;
  line-height: 30px;
  background:#000;
  color:#fff;
  position:fixed;
  bottom:0;
}
.left{
  width:50%;
  float:left;
  box-sizing: border-box;
}

.right{
  width:50%;
  float:right;
  box-sizing: border-box;
}
</style>
