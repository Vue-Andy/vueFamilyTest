<template>
  <header id="header">
    <div class="logo fl">
      <img src="../assets/logo.png" width="60" alt />
    </div>
    <div v-title>活在当下有限公司</div>
    <router-link :to="{path:'/helloworld/1/10'}">HelloWorld</router-link>
    <router-link :to="{path:'/hellotimeson1'}">hellotimeson1</router-link>
    <router-link :to="{path:'/hellochina'}">hellochina</router-link>
    <table class="cf"></table>
  </header>
</template>

<script>
import "../assets/css/header/header.css";

export default {
  name: "headerCom",
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  height: 60px;
  background: #fff;
  box-sizing: border-box;
  position:fixed;
  top:0;
}
.router-link-active{
  color:aquamarine;
  font-weight:bold;
}
</style>
