<template>
    <div>
        <h1>{{ sum  }}</h1>
        <button @click="add">加</button>
        <h1> 我的钱：{{ msg }}</h1>
        <button @click="msg+='0000'">加钱</button>
        <br><hr>
        <h1>{{ person.name }}</h1>
        <h1>{{ person.age }}</h1> 
        <h1>{{ person.jop.j1.salaty }}K</h1> 
        <button @click="person.name+='-'">加钱</button>
        <br><br>
        <button @click="person.age++">加</button> 
        <br><br>
        <button @click="person.jop.j1.salaty++">加</button> 
    </div>
</template>

<script setup>
import {ref,watch,reactive}  from 'vue'
let sum=ref(1)
let msg=ref(1)
function  add() {
    sum.value++
}
// 1，监视ref一个或者多个相应数据
// watch(sum,(newv,oldv)=>{
//     console.log('sum被改变',newv,oldv);
// })
// watch(msg,(newv,oldv)=>{
//     console.log('msg被改变',newv,oldv);
// })
//2. 监视多个一起写
watch([sum,msg],(newv,oldv)=>{
    console.log('msg被改变',newv,oldv);
},{immediate:true,deep:true})
// immediate 立刻执行 deep深度监视

let person=reactive({
    name:'zz',
    age:9,
    jop:{
        j1:{
            salaty:20
        }
    }
})
// 监视reactive 
// 时无法获取正确旧值
// deep 无效
// watch(person,(newv,oldv)=>{
//     console.log('被改变',newv,oldv);
// },)

// 监视对象数组里的 某个 
// 要写函数形式
watch(()=>person.age,(newv,oldv)=>{
    console.log('被改变',newv,oldv);
})
// 监视对象数组里的 某些 
// 写成数组的函数形式
watch([()=>person.age,()=>person.name],(newv,oldv)=>{
    console.log('被改变',newv,oldv);
})
// 对象中的某个属性。深度。 deep有效
watch(()=>person.jop,(newv,oldv)=>{
    console.log('被改变',newv,oldv);
},{deep:true})

</script>

<style lang="scss" scoped>

</style>