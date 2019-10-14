<template>
<header id="header">
    <div class="logo fl">
        <img src="../assets/logo.png" width='60' alt="">
    </div>
    <div>中智名优特实业有限公司</div>
    <router-link :to='{path:"/hellotimeson1"}'>go hellotimeson1 component</router-link>
    <table class='cf'></table>
</header>
</template>

<script>
import '../assets/css/header/header.css'  

export default {
  name: 'headerCom',
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style scoped>
#header{
    width:100%;height:60px;background:#fff;box-sizing: border-box;
}
</style>
