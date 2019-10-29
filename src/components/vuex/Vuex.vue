<template>
  <div>
    <div v-title>vuex 组件</div>
    <div class="desc">此组件总结state和getter</div>
    <!-- <button @click='getData'>获取store里的son组件的sonData</button>
    <div v-if='sonData'>{{sonData}}</div>
    <button @click='getMergeData'>获取融合后的sonData和son2Data</button>
    <div v-if='mergeData'>{{mergeData}}</div>
    <button @click='getTotalNum'>获取相加之后的sonNum和son2Num</button>
    <div v-if='totalNum'>{{totalNum}}</div>
    <button @click='mergeAll'>Actions一键触发融合和相加</button>
    <button @click="getData">修改store里的globalData为4</button>
    <button @click="changeSonData">修改store里的son1Store里的sonData</button> -->
    <span>{{globalData}}--{{isShow}}--{{totalNum}}</span>
    <ul>
      <li v-for='(item,index) in getPassedScore' :key='index'>{{item.name}}--{{item.score}}</li>
    </ul>
    <div>总及格人数为：{{passedStudentsCount}}</div>
    <div>超过80分的人数为：{{passed80Count}}</div>
    <div>超过90分的人数为：{{passed90Count}}</div>
    <button @click='addStudent'>点击添加一个85分的学生</button>
    <div style='border:1px solid #333;'>
      <div>{{username}}</div>
      <div>{{token ? token : '退出登录后就没有token了'}}</div>
      <div>{{cart[0] ? cart[0].cargoName : '购物车空空如也'}}</div>
      <div>{{login}}</div>
    </div>
    <button @click='logout'>退出登录</button>
  </div>
</template>

<script>
import {mapState, mapGetters,mapMutations} from 'vuex';
export default {
  name: "Vuex",
  data () {
    return { };
  },
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
  // computed:mapState(['globalData','isShow'])
  /* computed:mapState({
    // 等同于 `state => state.globalData`
    globalData:'globalData',isShow:'isShow'
  }) */
  /* computed:mapState({
    // 箭头函数可使代码更简练，如果不需要自定义变量名，可以使用字符串的形式 
    globalData: state => state.globalData,
    isShow:state => state.isShow
  })  */
  /* computed:{
    ...mapState(['globalData','isShow'])
  } */
  /* computed:{
    ...mapState({globalData:'globalData',isShow:'isShow'})
  } */
  computed:{
    // 如果要与局部计算属性一起使用,则要在外层包裹一个对象
    anotherComputed() {/* ... */},
    // 可以写多个...mapState
    ...mapState({
      // globalData: state => state.globalData,
      // isShow:state => state.isShow,
      // 如果一个状态要使用多个状态，使用函数，注：为了能够使用 `this` 获取局部状态，必须使用常规函数
      totalNum(state) {
        return state.num1 + state.num2
      },
      // username:state => state.username,
      // token:state => state.token,
      // cart:state => state.cart,
      // login:state => state.login
    }),
    ...mapState(['globalData','isShow','username','token','cart','login']),
    // ...mapGetters(['getPassedScore','passedStudentsCount']),   //  不需要另起名字的可以直接数组保存字符串的形式
    ...mapGetters({getPassedScore:'getPassedScore',passedStudentsCount:'passedStudentsCount'}),  // 另取名字，需要使用对象的形式，对于需要传参的，只能当成局部计算属性
    /* // 获取getter
    getPassedScore() {
      return this.$store.getters.getPassedScore
    },
    // getter接受其他getter作为第二个参数
    passedStudentsCount() {
      return this.$store.getters.passedStudentsCount
    }, */
    // getter通过返回一个函数实现给getter传参
    passed80Count() {
      return this.$store.getters.getSomeScoreCount(80)
    },
    passed90Count() {
      return this.$store.getters.getSomeScoreCount(90)
    } 
  },
  components: {},

  methods: {
    logout() {
      this.$store.commit('logout',{})  // 或者  this.$store.commit({type:'logout', param:'...'})
    },
    // ...mapMutations(['logout']),  // ...mapMutations({lout:'logout})
    /* getData(){
      // 如果只是一个文件的状态，则按如下取值
      // console.log(this.$store.state.globalData)
      // 如果是多个文件的状态，则需要加上属于哪个文件的状态
      this.sonData = this.$store.state.son1Store.sonData
    }, */
    addStudent() {
      this.$store.state.scores.push({name:'钱七', score:85})
    },
    /* getMergeData(){
      this.$store.commit('mergeData')
      this.mergeData = this.$store.state.son2Store.mergeData
    },
    getTotalNum(){
      this.$store.commit('mergeNum')
      this.totalNum = this.$store.state.son1Store.totalNum
    },
    mergeAll(){
      this.$store.dispatch('mergeAll')
      this.mergeData = this.$store.state.son2Store.mergeData
      this.totalNum = this.$store.state.son1Store.totalNum
    },
    getData() {
      this.$store.state.globalData = 4;
      console.log(this.$store.state)
    },
    changeSonData() {
      this.$store.state.son1Store.sonData = '修改后的sonData值'
    } */
  },

  created() {},

  mounted() {}

}

</script>

<style scoped>
</style>