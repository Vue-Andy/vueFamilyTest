<template>
  <div class="hello bs fl">
    <div class='title' v-title>HelloWorld组件</div>
    <p class="desc">此组件只总结页面跳转的各种方式</p>
    <div class="link">
      <span>1.方法跳转 - path配query</span>  <button @click='goChina1'>HelloChina</button>
    </div>
    <div class="link">
      <span>2.方法跳转 - path配params</span>  <button @click='goChina2'>HelloChina</button><!--这种方式不能传参-->
    </div>
    <div class="link">
      <span>3.方法跳转 - name配query</span>  <button @click='goChina3'>HelloChina</button>
    </div>
    <div class="link">
      <span>4.方法跳转 - name配params</span> <button @click='goChina4'>HelloChina</button>
    </div>
    <div class="link">
      <span>5.router-link - path配query</span> <router-link :to='{path:"/hellotime",query:{id:"1"}}'>HelloTime</router-link>
    </div>
    <div class="link">
      <span>6.router-link - path配params</span> <router-link :to='{path:"/hellotime",params:{id:"2"}}'>HelloTime</router-link><!--这种方式不能传参-->
    </div>
    <div class="link">
      <span>7.router-link - name配query</span> <router-link :to='{name:"HelloTimeSon1",query:{id:"3",sex:"gender"}}'>HelloTime</router-link>
    </div>
    <div class="link">
      <span>8.router-link - name配params</span> <router-link :to='{name:"HelloTimeSon1",params:{id:"4"}}'>HelloTime</router-link>
    </div>
    
    <div v-if='num'>子传父方式一$emit：{{num}}</div>
    <div v-if='msg1'>子传父方式二$parent.$emit：{{msg1}}</div>
    <div v-if='msg2'>子传父方式三$parent.事件名：{{msg2}}</div>
    <button @click='changeson2'>$children修改son2的值</button>
    <hr>
    <son1 par='msgFromFather--HELLOWORLD' @handleSon='handle'>
      <template slot='firstSlot'>
        第一个slot
      </template>
      <template slot='secondSlot'>
        第二个slot
      </template>
    </son1>
    <son2 ref='son2'></son2>
    <hr/>
    
    <hr>
    <button @click='getData'>获取store里的son组件的sonData</button>
    <button @click='getMergeData'>获取融合后的sonData和son2Data</button>
    <div v-if='mergeData'>{{mergeData}}</div>
    <button @click='getTotalNum'>获取相加之后的sonNum和son2Num</button>
    <div v-if='totalNum'>{{totalNum}}</div>
    <button @click='mergeAll'>Actions一键触发融合和相加</button>
  </div>
</template>

<script>
import son1 from './son/son1'
import son2 from './son/son2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 0,
      msgFromFather:'Hello Son',
      mergeData:'',
      totalNum: 0,
      msg1:'',
      msg2:''
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
    // 子与父通信方式2
    this.$on('handleSon2',function(msg){
      this.msg1 = msg
    })
  },
  methods:{
    handle(msg){
      this.num = msg
    },
    changeson2(){
      console.log(this.$refs.son2)
      /********* 以下两种方式都可以让父组件获取到子组件的实例(属性和方法都可以获取到) *********/
      // this.$refs.son2.changeTxt()
      this.$children[1].changeTxt()
    },
    handleSon(msg){
      this.msg2 = msg
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
    getData(){
      // 如果只是一个文件的状态，则按如下取值
      // console.log(this.$store.state.globalData)
      // 如果是多个文件的状态，则需要加上属于哪个文件的状态
      console.log(this.$store.state.sonStore.sonData)
    },
    getMergeData(){
      this.$store.commit('mergeData')
      this.mergeData = this.$store.state.son2Store.mergeData
    },
    getTotalNum(){
      this.$store.commit('mergeNum')
      this.totalNum = this.$store.state.sonStore.totalNum
    },
    mergeAll(){
      this.$store.dispatch('mergeAll')
      this.mergeData = this.$store.state.son2Store.mergeData
      this.totalNum = this.$store.state.sonStore.totalNum
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{width:100%;background:#fff;padding:20px;border:2px solid red;}
.link > span{
  display:inline-block;
  width:300px;
  text-align: left;
  font-size: 16px;
  color:#333;
}
</style>
