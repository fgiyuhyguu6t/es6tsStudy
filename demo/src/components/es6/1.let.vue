<template>
    
    <h1>let</h1>
    <h1>{{ e }}</h1>
    
</template>

<script setup>
// 声明变量
let a
let e=100
let tt =33,g='ooo'
let r,t
//1.变量不能重复声明
// let r  

// 2.块级作域，全局，函数，eval
// 块级 (if else while for 函数...)
{
    let go='zzz'
}
// console.log(go);  // let go只在函数作用块里面生效
{
    var gov='zzz'
}
console.log(gov);  //var 可以全局

// 3.不存在变量提升
// console.log(so);  //使用前必须先声明
let so='后定义'

// 4.不影响作用域提升
{
    let school='yydx';
    function fun() {
        console.log(school);
    }
    fun()
}

</script>

<style lang="less" scoped>

</style>