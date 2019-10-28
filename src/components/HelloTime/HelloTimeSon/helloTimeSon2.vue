<template>
  <div class="helloTimeSon2 bs">
    <div class='title' v-title>I am helloTimeSon2 component</div>
    <hr>
    <router-link :to='{path:"/hellotimeson1"}'>go hellotimeson1 component</router-link>
    <br>
    <!--难点知识点 -->
    <a href="https://www.cnblogs.com/star91/p/5659134.html">HTML5和CSS3新特性一览</a>
    <a href="https://www.jianshu.com/p/3eb7a1843009">js实现继承的几种方式1</a>
    <a href="http://www.itcast.cn/news/20181026/16371780641.shtml">js实现继承的几种方式2</a>
    <a href="https://segmentfault.com/a/1190000011468559#articleHeader3">js实现继承的几种方式3</a>
    <a href="https://segmentfault.com/a/1190000014206021">面向对象和继承</a>
    <a href="https://www.cnblogs.com/sunny-sl/p/6529830.html">http协议详解-面试题</a>
    <a href="https://baijiahao.baidu.com/s?id=1614404084382122793&wfr=spider&for=pc">关于TCP三次握手，这是我见过最好的解读了，通俗易懂</a>
    <a href="https://segmentfault.com/a/1190000012772040">call、apply、bind的区别</a>
    <a href="https://www.nowcoder.com/ta/front-end-interview">前端面试经典题目合集</a>
    <a href="https://baijiahao.baidu.com/s?id=1624047253519943985&wfr=spider&for=pc">常用前端面试题-附答案</a>
    <a href="https://www.jianshu.com/p/26e1e9fa7089">webStorage</a>
    <a href="https://www.cnblogs.com/endv/p/8089506.html">js操作cookie</a>
    <a href="https://www.cnblogs.com/s313139232/p/7839037.html">jquery之cookie操作</a>
    <a href="https://www.cnblogs.com/starof/p/4744392.html">css多栏自适应布局</a>
    <a href="https://www.cnblogs.com/dupd/p/5895474.html">for of 和 for in的区别</a>
    <a href="https://www.cnblogs.com/hanxuming/p/5795441.html">js属性的特性</a>
    <a href="https://www.jb51.net/article/137370.htm">new 到底做了什么</a>
    <a href="https://www.cnblogs.com/wangshengli520/p/9570750.html">一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么</a>
    <a href="https://www.cnblogs.com/zczhangcui/p/6389023.html">js创建变量的方式</a>
    <a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1023024181109440">map和set</a>
    <a href="https://blog.csdn.net/twodogya/article/details/80223508">ajax、axios、fetch之间的详细区别以及优缺点</a>
    <input list="browsers">
    <datalist id="browsers">
      <option value="Internet Explorer"/>
      <option value="Firefox"/>
      <option value="Chrome"/>
      <option value="Opera"/>
      <option value="Safari"/>
    </datalist>
    <div class="boderImage">border-image属性</div>
  </div>
</template>

<script>
export default {
  name: 'HelloTimeSon2',
  data () {
    return {
      num: 0
    }
  },  
}
</script>
<style scoped>
  @import '../../../assets/css/helloTime2.css';
  .helloTimeSon2{border:2px solid purple;padding:10px;}
  .boderImage{border: 10px solid transparent;padding:10px;border-image:url(../../../assets/logo.png) 30 /* stretch */ round;}
</style>



