<template>
    <div>
        <button @click="change">点击变化</button>
        <!-- <div class="ites"></div>
        <div class="ites"></div>
        <div class="ites"></div> -->
        <ul>
            <li v-for="(item, index) in list " :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from "vue";
let list = reactive(
    [
        {
            name: '张',
        },
        {
            name: '王',
        },
    ]
)
for(let i=0;i<list.length;i++){
    list[i].onclick=function(){
        console.log(i);
        this.list.name='2'
    }
}
function change(){
    for(var i=0;i<list.length;i++){
      
            list[i].name='2'
    }
    // list[1].name='2'

}
</script>

<style lang="less" scoped></style>