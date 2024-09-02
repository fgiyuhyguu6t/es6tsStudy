<template>
    <div>
        <h1>解构赋值</h1>
        <h1>{{ o }}</h1>
        <hr>
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <h2>{{ qq }}</h2>
    </div>
</template>

<script setup>
// 从数组或对象中提取值，对变量进行赋值。
// 1.对数组
const f4=['x','l','z','s']
let[o,t,thre,four]=f4  //四个变量
console.log(o);
console.log(t);
// 2.对对象
const z={
    name:'zs',
    age:44,
    qq:function() {
        console.log('对象里面的函数')
    }
}
// let {name,age,qq}=z
// qq()

// 一般解构方法
let {qq}=z
qq()
qq()
qq()
</script>

<style lang="scss" scoped>

</style>