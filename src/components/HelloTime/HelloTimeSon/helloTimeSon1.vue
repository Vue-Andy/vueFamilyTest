<template>
  <div class="helloTimeSon1 bs">
    <div class='title' v-title>I am helloTimeSon1 component</div>
    <hr>
    <div>
        <router-link :to='{path:"/hellotimeson2"}'>go hellotimeson2 component</router-link>
    </div>
    <button>vuex store里的son组件的sonData为：{{$store.state.sonStore.sonData}}</button>
    <button @click='changeData'>修改store里son组件的sonData</button>
    <div class="float  clearfix">
      <div class="left">此处文本浮动，父元素需要清除浮动</div>
    </div>
     <div class="right cb">bbbb</div>
     <div class="model">
       <input type="text" v-model='message'>
       <p>双向绑定的值为：{{message}}</p>
     </div>
     <div class="bind">
       <input type="text" :value='message1' @change='inp' id='inp'>
       <p>双向绑定的值为：{{message1}}</p>
       <button @click='handleChange'>change message1</button>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloTimeSon1',
  data () {
    return {
      num: 0,
      message:'',
      message1:''
    }
  }, 
  methods:{
    changeData(){
      this.$store.state.sonStore.sonData = 'I am changed son state\'s data'
    },
    inp(e){
      var val = e.target.value
      console.log(val)
      this.message1 = val
    },
    handleChange(){
      this.message1 = '333'
    }
  } 
}
</script>
<style scoped>
  .helloTimeSon1{padding:10px;border:2px solid #333;}
  .clearfix:after{
     content:".";        
     display:block;        
     height:0;        
     clear:both;        
     visibility:hidden;        
}
/* .cb{clear:both;} */
  div.left{width:200px;height:200px;background:rgb(188, 223, 188);float:left;color:#fff;}
  div.right{width:200px;height:200px;background:rgb(80, 80, 83);float:left;color:#fff;}
  #inp:hover{transform: translate(200px) 5s linear;}
</style>
