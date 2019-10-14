<template>
    <div class='greatSon fl bs'>
        <div class='title'>this is greatSon component</div>
        <div v-if='msg'>从son组件传过来的值为：{{msg}}</div>
        <h3>以下是用vue-resource请求过来的图片！</h3>
        <!-- <button @click='handleClick'>click me in greatSon!</button> -->
        <div>
            <img v-for='img in imgs' :key='img.id' :src="img.url" alt="">
        </div>
        <hr>
        <h3>以下是用fetch请求过来的用户！</h3>
        <div class='names'>
            <span v-for='user in users' :key='user.id'>{{user.name}}</span>
        </div>
        <h3>以下是父组件通过调用$childern去获取子组件的方法</h3>
        <div>{{txt}}</div>
    </div>
</template>
<script>
// import Vue from 'vue'
// var Bus = new Vue()
import Bus from '../../../bus.js'
require("es6-promise").polyfill();
require('isomorphic-fetch');
export default {
    props:['par'],
    name:'son',
    data(){
        return {
            msg:0,
            imgs:[],
            users:[],
            txt:'父组件未调用$children之前'
        }
    },
    created(){
        var _this = this
        _this.$http.get('http://jsonplaceholder.typicode.com/photos',{
            params:{
                albumId:1
            }
        }).then(function(data){
            for(var i=0;i<data.body.length;i++){
                _this.imgs.push(data.body[i])
            }
        })
        fetch('http://jsonplaceholder.typicode.com/users').then(function(data){
            return data.json()   //  此处是为了解决返回的数据body为readableStream的问题
        }).then(function(result){
            // console.log(result)
            _this.users = result
        }).catch(function(error){
            console.log(error)
        })
    },
    mounted(){
        Bus.$on('bro',(data)=>{
            this.msg = data
        })
        
    },
    methods:{
        handleClick(){
            console.log(1)
        },
        changeTxt(){
            this.txt = '父组件调用$children之后'
        }
    }
}
</script>
<style scoped>
    .greatSon{width:50%;height:100%;border:2px solid cornflowerblue;}
    img{width:50px;margin:10px;}
    .names span{display:inline-block;height:30px;line-height:30px;font-size:16px;color:cornflowerblue;margin:10px;}
</style>



