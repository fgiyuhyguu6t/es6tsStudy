<template>
    <div>
        <h1>常量</h1>
    </div>
</template>

<script setup>
// 1.常量一定要赋予初值
const a ='99'
console.log(a);
// 2.不能修改
// const a =9

// 3.修改对象或数组里面的可以
const ss={
    name:0
}
ss.name=9
console.log(ss.name);
const arr=['1','4']
arr.push('9')
console.log('arr',arr);
// 4.块级作用域
{
    const o=0
}
// console.log(o);  //报错
</script>

<style lang="scss" scoped>

</style>