<template>
    <div>
        <input type="text" v-model="person.name">
        <br><br>
        <input type="text" v-model="person.ming">
        <h1>{{ funname }}</h1>
        <h1>{{ person.funname1 }}</h1>
    </div>
</template>

<script setup>
import { reactive,computed } from "vue";
let person=reactive({
name:'张',
ming:'三'
})
// 计算属性
let funname =computed(()=>{
    return person.name+person.ming
})
person.funname1 =computed(()=>{
    return person.name+person.ming
})

</script>

<style lang="scss" scoped>

</style>