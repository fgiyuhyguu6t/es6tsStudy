<template>
    <div class="fbox">
        <h1>父组件</h1>
        <h1>{{ vvv.name }}</h1>
        <hr>
        <zi></zi>
        <a-button type="primary">确认</a-button>
        
    </div>
</template>

<script setup>
import {provide,reactive} from 'vue'
import zi from './14zi'
let vvv =reactive({
    name:'父的值'
})
provide('vvv',vvv)
</script>

<style scoped>
.fbox{
    background-color: antiquewhite;
}

</style>