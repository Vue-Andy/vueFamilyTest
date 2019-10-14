<template>
  <div class="helloChina">
    <div>I am helloChina component</div>
    <div>{{msg}}</div>
    <hr>
    <div>
      <router-link :to='{path:"/helloworld/222/abc"}'>去HelloWorld页面</router-link>
    </div>
    <p><label>父组件</label><input type="text" v-model="txt" @change='change'/></p>
    <child ref="c1"></child>
  </div>
</template>

<script>
export default {
  name: 'HelloChina',
  data () {
    return {
      msg: '中国易语言编程！！！',
      txt:''
    }
  },
  components:{
    'child': {
      template: '<h1>{{this.txt}}</h1>',
      data: function(){
          return {txt: '初始值'};
      },
      methods: {
          childEvent: function(_txt){
            this.txt = _txt;
          },
          childEvent1: function(){}
      }
    }
  },
  mounted(){
    var a = this.$route.query.cardId,b=this.$route.params.cardId,c=this.$router.currentRoute.query.cardId,d=this.$router.currentRoute.params.cardId;
    if(a){
      console.log("this.$route.query.cardId为："+ a)
      console.log("从helloWorld组件传过来的参数为cardId："+a)
    }
    if(b){
      console.log("this.$route.params.cardId为："+ b)
      console.log("从helloWorld组件传过来的参数为cardId："+b)
    }
    if(c){
      console.log("this.$router.currentRoute.query.cardId为："+ c)
      console.log("从helloWorld组件传过来的参数为cardId："+c)
    }
    if(d){
      console.log("this.$router.currentRoute.params.cardId为："+ d)
      console.log("从helloWorld组件传过来的参数为cardId："+d)
    }
  },
  methods:{
    change: function(event){
      console.log(this.$refs)
      // this.$refs.c1.childEvent(event.target.value);
      this.$children[1].childEvent(event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helloChina{width:50%;background:fuchsia;float:left;}
</style>
