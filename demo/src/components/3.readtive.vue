<template>
    <div>
        <h1>readtive</h1>
        <h1 v-if="ice.name">当前产品名称:{{ice.name}}</h1>
        <h1>当前产品价格:{{ice.price}}</h1>
        <h1 v-if="ice.haoc">好吃吗？:{{ice.haoc}}</h1>
        <h1>{{ ice.hehe.h }}</h1>
       <button @click="change">修改</button>
       <button @click="add">添加属性</button>
       <button @click="dele">删除名字</button>
       <br>
       <hr>
       {{ arr }}
       <button @click="carr">修改</button>
    </div>
</template>
<!--reactive:创建一个包含响应式数据的引用对象 
    不能基本数据类型
对象类型 数组-->

<!-- proxy对象 -->
<script setup>
import {reactive} from 'vue'
const ice=reactive({
    name:'冰',
    price:25,
    hehe:{
        h:2,
        ggggg:'333'
    }
})
function change() {
    ice.name='BING'
    ice.hehe.h=5
}
function add(){
    ice.haoc='好吃'
}
function dele(){
    // delete ice.name
}
// 数组
let arr=reactive([1,2,3,4,5,6])
function carr(){
    // arr[2]=99
    arr.splice(0,1)
}

console.log(ice);
</script>
<style scoped>

</style>
