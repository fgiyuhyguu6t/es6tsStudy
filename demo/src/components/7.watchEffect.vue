<template>
    <div>
        <h1>{{ sum  }}</h1>
        <button @click="add">加</button>
        <h1> 我的钱：{{ msg }}</h1>
        <button @click="msg+='0000'">加钱</button>
        <br><hr>
        <h1>名字：{{ person.name }}</h1>
        <h1>年龄{{ person.age }}</h1> 
        <h1>{{ person.jop.j1.salaty }}K</h1> 
        <button @click="person.name+='-'">名字：</button>
        <br><br>
        <button @click="person.age++">年龄</button> 
        <br><br>
        <button @click="person.jop.j1.salaty++">加</button> 
    </div>
</template>

<script setup>
import {ref,watchEffect,reactive}  from 'vue'
let sum=ref(1)
let msg=ref(1)
function  add() {
    sum.value++
}

let person=reactive({
    name:'zz',
    age:9,
    jop:{
        j1:{
            salaty:20
        }
    }
})

watchEffect(()=>{
    const x1 =sum.value
    const x2= person.name
    console.log("watchEffect");
})
</script>

<style lang="scss" scoped>

</style>