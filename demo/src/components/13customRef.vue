<template>
    <div>
        <input type="text" v-model="vv">
        <h1>{{ vv }}</h1>
    </div>
</template>

<script setup>
import { customRef } from "vue";
function  myRef(value,delay) {
    let timer //定时器
    return customRef((track,trigger)=>{
        return{
            get(){
                console.log(`读了${value}`);
                track()
                return value
            },
            set(newv){
                console.log(`该了${value}`);
                // 关定时器
                clearTimeout(timer)
                timer =setTimeout(() => {
                    value=newv
                    trigger()
                }, delay);
            }
        }
    })
    
}
let vv= myRef('hello',500)
</script>

<style lang="scss" scoped>

</style>