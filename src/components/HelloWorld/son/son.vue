<template>
    <div class='son fl bs'>
        <slot name='secondSlot'></slot>
        <div class='title'>{{msg}}</div>
        <div>{{par}}</div>
        <div>{{initNum}}</div>
        <button @click='getData'>修改store里的globalData为4</button>
        <button @click='sonToFather'>click me-子传父!</button>
        <slot name='firstSlot'></slot>
        <button @click='toBrother'>click me-兄弟组件通信!</button>
        <hr>
        <input type="text" @change='change'>
        <grandSon>
            <template slot='boy' slot-scope="tem">
                <div>具名插槽boy -- 帅气，高大，威猛</div>
                {{tem}}
            </template>
            <template>默认的插槽</template>
            <template slot='girl'>具名插槽girl -- 优雅，美丽，大方</template>
        </grandSon>
    </div>
</template>
<script>
// import Vue from 'vue'
// var Bus = new Vue()
import Bus from '../../../bus.js'
import grandSon from './grandSon/grandSon'
export default {
    props:['par'],
    name:'son',
    data(){
        return {
            msg:'this is son component',
            initNum:0
        }
    },
    mounted(){
        
    },
    methods:{
        change(e){
            this.$parent.handleSon(e.target.value)
        },
        sonToFather(){
            this.initNum++
            this.$emit('handleSon',this.initNum)
            // console.log('event in son dispatched')
            this.$parent.$emit('handleSon2','我是以第二种方式从son组件传过来的值！')
        },
        toBrother(){
            this.initNum++
            Bus.$emit('bro',this.initNum)
        },
        getData(){
            this.$store.state.globalData = 4
        }
    },
    components:{grandSon}
}
</script>
<style>
    .son{
        border:2px solid darkcyan;
        padding:10px;
        width:50%;
    }
</style>

