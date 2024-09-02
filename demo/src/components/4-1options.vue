<template>
    名字：<input type="text" v-model="pri.item.name">
    <br>
    年龄：<input type="text" v-model="pri.item.age">
    <br><br>
    <button @click="add">添加</button>
    <ul>
        <li v-for="(intex, index) in list.item" :key="index">
            NO:{{ index + 1 }}-----名字：{{ intex.name }} ---年龄：{{ intex.age }} <button @click="delect(index)">删除</button>
            <!-- ---年龄：{{index.age}} -->
        </li>
    </ul>
</template>
<script setup>
import { reactive } from "vue";
const list = reactive({
    item: [
        {
            name: '张',
            age: 18
        },
        {
            name: '王',
            age: 18
        },
    ]
})
// 输入框
const pri = reactive({
    item:
    {
        name: '张',
        age: 1
    }
})
function add() {
    list.item.push(Object.assign({}, pri.item))
    pri.item.name = pri.item.age = ''
}
function delect(i) {
    list.item = list.item.filter((el, index) => index !== i)
}
</script>

<style lang="scss" scoped></style>