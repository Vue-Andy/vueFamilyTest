<template>
  <div class='container'>
    <div v-title>vuex 组件</div>
    <div class="desc">此组件总结vuex相关知识，包括单文件store和分离出modules,mutations...</div>
    <div class="boxItem">
      <h3>既有局部状态又有全局状态时，获取局部状态：</h3>
      <i>data.js：</i>
      <div>{{globalData}}--{{isShow}}--{{totalNum}}</div>
      <div>==========</div>
      <div>
        <i>login.js：</i>
        <div>{{username}}</div>
        <div>{{token ? token : '退出登录后就没有token了'}}</div>
        <div>{{cart[0] ? cart[0].cargoName : '购物车空空如也'}}</div>
        <div>isLogin:{{login?'yes':'no'}}</div>
      </div>
      <h3>既有局部状态又有全局状态时，获取全局状态：</h3>
      <div>全局状态:{{globalNum1}}</div>
    </div>
    <div class="boxItem">
      <h3>既有局部getters又有全局getters时，获取局部getters：</h3>
      <i>data.js：</i>
      <ul>
        <li v-for='(item,index) in getPassedScore' :key='index'>{{item.name}}--{{item.score}}</li>
      </ul>
      <div>总及格人数为：{{passedStudentsCount}}</div>
      <div>超过80分的人数为：{{passed80Count}}</div>
      <div>超过90分的人数为：{{passed90Count}}</div>
      <div>==========</div>
      <i>login.js：</i>
      <div>num3+num4:{{getLoginNumTotal}}</div>
      <h3>既有局部getters又有全局getters时，获取全局getters：</h3>
      <div>{{mergeGlobalNum}}</div>
    </div>
    <div class="boxItem">
      <h3>既有局部mutations又有全局mutations时，获取局部mutations：</h3>
      <i>login.js：</i>
      <button @click='logout'>退出登录</button>
      <div>==========</div>
      <i>data.js：</i>
      <button @click='resetData'>重置数据</button>
      <h3>既有局部mutations又有全局mutations时，获取全局mutations：</h3>
      <button @click='add1'>全局数据1++</button>
    </div>
    <div class="boxItem">
      <h3>既有局部actions又有全局actions时，获取局部actions：</h3>
      <i>login.js：</i>
      <button @click='loginAction'>退出登录并num3+=10</button>
      <div>==========</div>
      <i>data.js：</i>
      <button @click='dataAction'>重置数据并num1+=20</button>
      <h3>既有局部actions又有全局actions时，获取全局actions：</h3>
      <button @click='logoutAndReset'>一键触发loginAction和dataAction</button>
    </div>
    <button @click='addStudent'>点击添加一个85分的学生</button>
  </div>
</template>

<script>
import {mapState, mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: "Vuex",
  data () {
    return { };
  },
  computed:{
    // 此行的意思是可以在一个计算属性里获取多个局部或全局的数据，同时，也可以有多个...mapState
    ...mapState({
      totalNum(state) {  
        return state.data.num1 + state.data.num2
      }
    }),
    ...mapState({
      // 局部状态的获取
      globalData: state => state.data.globalData,  // 相当于 this.$store.state.data.globalData
      isShow: state => state.data.isShow,

      username: state => state.login.username,
      token: state => state.login.token,
      cart: state => state.login.cart,
      login: state => state.login.login,

      // 全局状态的获取
      globalNum1:(state)=> state.globalNum1,
      
      // 局部和全局getters的获取  注：通过输出的getters可知，不同module下的getter都被合并到了一起 
      // 局部getters
      getPassedScore: (state,getters) => getters.getPassedScore,   // 相当于 this.$store.getters.getPassedScore
      passedStudentsCount:(state,getters) => getters.passedStudentsCount,
      passed80Count:(state,getters) => getters.getSomeScoreCount(80),
      passed90Count:(state,getters) => getters.getSomeScoreCount(90),
      
      getLoginNumTotal: (state,getters) => getters.getLoginNumTotal,
      // 全局getters
      mergeGlobalNum: (state,getters) => getters.mergeGlobalNum
    }),
    /* 
    // 既有全局又有局部状态的时候，获取部状态的方式如下
    globalData() {
      return this.$store.state.data.globalData
    } 
    // 既有全局又有局部状态的时候，获取全局状态的方式如下
    globalNum1() { 
      return this.$store.state.globlaNum1
    },
    // 既有局部getters又有全局getters时，获取局部getters的方式如下 
    getLoginNumTotal() {
      return this.$store.getters.getLoginNumTotal
    },
    // 既有局部getters又有全局getters时，获取全局getters的方式如下
    mergeGlobalNum() {
      return this.$store.getters.mergeGlobalNum
    } 
    */
  },
  components: {},

  methods: {
    // 局部mutations和全局mutations都可以通过以下方式引入
    ...mapMutations(['add1','resetData','add2','logout','add3']),  // ...mapMutations({lout:'logout})
    // 局部actions和全局actions都可以通过以下方式引入
    ...mapActions({  // 或者：  ...mapActions(['loginAction','dataAction']),  如果有同名的，会全部执行
      // 局部action
      loginAction:'loginAction',  // 可重命名
      dataAction:'dataAction',
      // 全局action
      logoutAndReset:'logoutAndReset'
    }),
    addStudent() {
      this.$store.state.data.scores.push({name:'钱七', score:85})
    }
  },

  created() {},

  mounted() {
    console.log(this.$store)
  }

}

</script>

<style scoped>
  div.boxItem{
    float:left;
    width:50%;
    height:300px;
    border:1px solid #333;
    box-sizing: border-box;
  }
</style>