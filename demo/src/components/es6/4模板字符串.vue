<template>
    <div>
        <h3>模板字符串</h3>
        <h3>{{ str }}</h3>
        <h3>{{ str1 }}</h3>
        <h3>{{ juzi }}</h3>
    </div>
</template>

<script setup>
// `` ""  ''
let str = `模板`
// 可以出现换行符
let str1 = `<ul>
    <li>5</li>
    <li>4</li>
    </ul>`
// 变量拼接
let per ='名字'
let juzi=`${per}拼后面`
</script>

<style lang="scss" scoped></style>