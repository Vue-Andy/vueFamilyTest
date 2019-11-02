<template>
  <div class="hello bs fl">
    <div class='title' v-title>HelloWorld</div>
    <div class="desc">此组件只总结跳转和传参的方式</div>
    <div class="left">
      <div class="link">
        方法跳转 - path配query<button @click='goChina1'>HelloChina</button>
      </div>
      <div class="link">
        方法跳转 - path配params<button @click='goChina2'>HelloChina</button>
      </div>
      <div class="link">
        方法跳转 - name配query<button @click='goChina3'>HelloChina</button>
      </div>
      <div class="link">
        方法跳转 - name配params<button @click='goChina4'>HelloChina</button>
      </div>
    </div>
    <div class="right">
      <router-link :to='{path:"/hellotime",query:{id:"1"}}'>router-link - path配query - 去HelloTime组件</router-link><br/>
      <router-link :to='{path:"/hellotime",params:{id:"2"}}'>router-link - path配params - 去HelloTime组件</router-link><br/> <!--这种方式不能传参-->
      <router-link :to='{name:"HelloTimeSon1",query:{id:"3",sex:"gender"}}'>router-link - name配query - 去HelloTime组件</router-link><br/>
      <router-link :to='{name:"HelloTimeSon1",params:{id:"4"}}'>router-link - name配params - 去HelloTime组件</router-link>
    </div>
    <div class="cf">
      <son1></son1>
      <son2></son2>
    </div>
    <button @click='changeIsShow'>修改isShow</button>
    <div v-color-green>this text should be green</div>
    <div>{{500 | FTY}}</div>
    <div>{{1.25 | YTF}}</div>
  </div>
</template>

<script>
import son1 from './son/son1'
import son2 from './son/son2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msgFromFather:'Hello Son'
    }
  },
  components:{son1,son2},
  mounted(){
    var a = this.$route.params.userId,b=this.$router.currentRoute.params.userId;
    if(a){
      console.log("this.$route.params.userId为："+ a)
      console.log("从helloChina组件传过来的参数为id："+a)
    }
    if(b){
      console.log("this.$router.currentRoute.params.userId为："+ b)
      console.log("从helloChina组件传过来的参数为id："+b)
    }
  },
  methods:{
    changeIsShow() {
      this.$store.state.isShow = !this.$store.state.isShow
    },
    goChina1(){
      this.$router.push({
        path:'/helloChina',
        query:{
          cardId:"10011"
        }
      })
    },
    goChina2(){  //这种方法传不了参
      this.$router.push({
        path:'/helloChina',
        params:{
          cardId:"10022"
        }
      })
    },
    goChina3(){
      this.$router.push({
        name:'HelloChina',
        query:{
          cardId:"10033",
          state:true
        }
      })
    },
    goChina4(){
      this.$router.push({
        name:'HelloChina',
        params:{
          cardId:"10044"
        }
      })
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{width:100%;background:#fff;padding:20px;border:2px solid red;}
</style>
