<template>
  <div>
    <button @click='getData'>获取store里的son组件的sonData</button>
    <div v-if='sonData'>{{sonData}}</div>
    <button @click='getMergeData'>获取融合后的sonData和son2Data</button>
    <div v-if='mergeData'>{{mergeData}}</div>
    <button @click='getTotalNum'>获取相加之后的sonNum和son2Num</button>
    <div v-if='totalNum'>{{totalNum}}</div>
    <button @click='mergeAll'>Actions一键触发融合和相加</button>
  </div>
</template>

<script>
export default {
  name: "Vuex",
  data () {
    return {
      sonData:'初始值',
      mergeData:'未融合之前的初始值',
      totalNum: 0,
    };
  },

  components: {},

  methods: {
    getData(){
      // 如果只是一个文件的状态，则按如下取值
      // console.log(this.$store.state.globalData)
      // 如果是多个文件的状态，则需要加上属于哪个文件的状态
      this.sonData = this.$store.state.son1Store.sonData
    },
    getMergeData(){
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
    }
  },

  created() {},

  mounted() {}

}

</script>

<style scoped>
</style>