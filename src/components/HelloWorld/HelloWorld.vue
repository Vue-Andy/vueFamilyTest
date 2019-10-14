<template>
  <div class="hello bs fl">
    <div class='title'>this is father(HelloWorld) component</div>
    <div v-if='num'>方式一$emit：从son组件传来的数据为{{num}}</div>
    <div v-if='msg1'>方式二$parent.$emit：从son组件传来的数据为{{msg1}}</div>
    <div v-if='msg2'>方式三$parent.事件名：从son组件传来的数据为{{msg2}}</div>
    <button @click='changeGreatSon'>$children修改greatSon的值</button>
    <hr>
    <son par='msgFromFather--HELLOWORLD' @handleSon='handle'>
      <template slot='firstSlot'>
        第一个slot
      </template>
      <template slot='secondSlot'>
        第二个slot
      </template>
    </son>
    <greatSon ref='greatSon'></greatSon>
    <hr/>
    <button @click='goChina1'>方法跳转 - path配query - 去HelloChina组件</button>
    <button @click='goChina2'>方法跳转 - path配params - 去HelloChina组件</button> <!--这种方式不能传参-->
    <button @click='goChina3'>方法跳转 - name配query - 去HelloChina组件</button>
    <button @click='goChina4'>方法跳转 - name配params - 去HelloChina组件</button><br/>

    <router-link :to='{path:"/hellotime",query:{id:"1"}}'>router-link - path配query - 去HelloTime组件</router-link>
    <router-link :to='{path:"/hellotime",params:{id:"2"}}'>router-link - path配params - 去HelloTime组件</router-link> <!--这种方式不能传参-->
    <router-link :to='{name:"HelloTime",query:{id:"3",sex:"gender"}}'>router-link - name配query - 去HelloTime组件</router-link>
    <router-link :to='{name:"HelloTime",params:{id:"4"}}'>router-link - name配params - 去HelloTime组件</router-link>
    <hr>
    <button @click='getData'>获取store里的son组件的sonData</button>
    <button @click='getMergeData'>获取融合后的sonData和greatSonData</button>
    <div v-if='mergeData'>{{mergeData}}</div>
    <button @click='getTotalNum'>获取相加之后的sonNum和greatSonNum</button>
    <div v-if='totalNum'>{{totalNum}}</div>
    <button @click='mergeAll'>Actions一键触发融合和相加</button>
  </div>
</template>

<script>
import son from './son/son'
import greatSon from './son/greatSon'
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
  components:{son,greatSon},
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
    changeGreatSon(){
      console.log(this.$refs.greatSon)
      /********* 以下两种方式都可以让父组件获取到子组件的实例(属性和方法都可以获取到) *********/
      // this.$refs.greatSon.changeTxt()
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
      this.mergeData = this.$store.state.greatSonStore.mergeData
    },
    getTotalNum(){
      this.$store.commit('mergeNum')
      this.totalNum = this.$store.state.sonStore.totalNum
    },
    mergeAll(){
      this.$store.dispatch('mergeAll')
      this.mergeData = this.$store.state.greatSonStore.mergeData
      this.totalNum = this.$store.state.sonStore.totalNum
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{width:100%;background:#fff;padding:20px;border:2px solid red;}
</style>
