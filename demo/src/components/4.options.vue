<template>
    名字：<input type="text" v-model="params.item.name">
    <br>
    年龄：<input type="text" v-model="params.item.age">
    <br><br>
    <button @click="add">添加</button>
    <ul>
        <li v-for="(intex, index) in state.item" :key="index">
            NO:{{ index + 1 }}-----名字：{{ intex.name }} ---年龄：{{ intex.age }} <button @click="delect(index)">删除</button>
        </li>
    </ul>
</template>

<script setup>
import { reactive } from "vue";
import originData from '../hooks/del.ts'
import newState from '../hooks/add.ts'
// 解构出来
let {state,removeItem}=originData()
let {params,addIiem}=newState(state)

</script>

<style lang="scss" scoped></style>