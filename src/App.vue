<template>
  <div id="app">
    <headerCom></headerCom>
    <div class="outer">
      <router-view/>
      <div class="inner">
        <h4>我是APP.vue里router-view的兄弟元素</h4>
        <h5>以下是通过axios请求过来的todos</h5>
        <div class='todos'>
          <span v-for='todo in todos' :key='todo.id'>{{todo.title}}</span>
        </div>
      </div>
      <!-- <table class="cf"></table> -->
    </div>
    <footer></footer>
  </div>
</template>

<script>
import headerCom from '@/components/header'
// import axios from 'axios'  // 如果是单独使用，可以这样引入，使用的时候  axios.get().then()
export default {
  name: 'App',
  data(){
    return {
      todos:[]
    }
  },
  components:{
    headerCom
  },
  mounted(){
    var _this = this
    _this.$axios.get('http://jsonplaceholder.typicode.com/todos',{
      params:{
        userId:1
      }
    }).then(function(data){
      _this.todos = data.data
    }).catch(function(err){
      console.log(err)
    })
  }
}
</script>

<style>
*{padding:0;margin:0;}
#app {
  width:100%;
  height:100vh;
  overflow-y:scroll;
  background:#ddd;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.outer{width:100%;border-top:1px solid #333;/* overflow:hidden; 清除浮动的方式之一  zoom:1;兼容IE6*/}
.inner{width:50%;height:100%;text-align:center;float:left;background:darkgray;}
.todos{text-align: left;}
.todos span{display:inline-block;height:20px;line-height: 20px;font-size:14px;color:cyan;margin:5px;}
</style>
