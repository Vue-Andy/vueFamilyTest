<template>
  <div class="helloTime bs">
    <div v-title>this is helloTime component</div>
    <div v-if='num'>{{num}}</div>
    <hr>
    <div>
      <router-link :to='{name:"HelloWorld",params:{userId:3323,storage:"aaaddd"}}'>router-link - 去HelloWorld组件</router-link>
      <br>
      <button @click='goWorld'>方法跳转 - 去HelloWorld组件</button>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloTime',
  data () {
    return {
      num: 0,
      userId:''
    }
  },
  mounted(){
    var a = this.$route.query.id,b=this.$route.params.id,c=this.$router.currentRoute.query.id,d=this.$router.currentRoute.params.id;
    if(a){
      console.log("this.$route.query.id为："+ a)
      console.log("从helloWorld组件传过来的参数为id："+a)
    }
    if(b){
      console.log("this.$route.params.id为："+ b)
      console.log("从helloWorld组件传过来的参数为id："+b)
    }
    if(c){
      console.log("this.$router.currentRoute.query.id为："+ c)
      console.log("从helloWorld组件传过来的参数为id："+c)
    }
    if(d){
      console.log("this.$router.currentRoute.params.id为："+ d)
      console.log("从helloWorld组件传过来的参数为id："+d)
    }
  },
  methods:{
   goWorld(){
     var userId = 444,storage = 'abcdef';
     this.$router.push({
      //  path:`/HelloWorld/333/456`
       path:`/HelloWorld/${userId}/${storage}`
     })
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helloTime{border:2px solid fuchsia;float:left;width:50%;}
</style>
