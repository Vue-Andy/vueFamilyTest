<template>
  <div>
    <div v-title>Father</div>
    <div class="desc">此组件只总结父子传值相关知识</div>
    <div class="box">
      <div class='left'>
        <div v-if='msg1'>子传父方式一：{{msg1}}</div>
        <div v-if='msg2'>子传父方式二：{{msg2}}</div>
        <div v-if='msg3'>子传父方式三：{{msg3}}</div>
        <div v-if='msg4'>子传父方式四：{{msg4}}</div>
      </div>
      <div class='right'>
        <button @click='toLittleSon'>this.$refs.子ref名.子方法名</button>
        <button @click='toLittleSon'>this.$children[n].子方法名</button>
      </div>
    </div>
    <div class="cf">
      <son @mm='handleSon2' :attrMethod='handleSon4' class='left'></son>
      <littleSon ref='littleSon' class='right' :msg='msgFromFather1'></littleSon>
    </div>
  </div>
</template>

<script>
import son from './Son'
import littleSon from './LittleSon'
export default {
  name: "Father",
  data () {
    return {
      msg1:'',
      msg2:'',
      msg3:'',
      msg4:'',
      msgFromFather:'I am your father',
      msgFromFather1:'another msg from father'
    };
  },

  components: {son,littleSon},

  methods: {
    handleSon1(msg){
      this.msg1 = msg
    },
    handleSon2(msg){
      this.msg2 = msg
    },
    handleSon4(msg) {
      this.msg4 = msg
    },
    toLittleSon(){
      /********* 以下两种方式都可以让父组件获取到子组件的实例(属性和方法都可以获取到) *********/
      this.$refs.littleSon.changeTxt(this.msgFromFather)
      // this.$children[1].changeTxt(this.msgFromFather)
    },
  },

  created() {},

  mounted() {
    // 子与父通信方式2
    this.$on('handleSon3',function(msg){
      this.msg3 = msg
    })
  }

}

</script>

<style scoped>
</style>