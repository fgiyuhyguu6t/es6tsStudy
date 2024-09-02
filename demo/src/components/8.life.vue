<template>
    <div>
        <h1>{{ sum }}</h1>
        <button @click="sum++">加</button>

    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        let sum = ref(1)
        return {
            sum
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMont');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('更新前beforUpdata');
    },
    updated(){
        console.log('更新Updated');
    },
    beforeUnmount(){
        console.log('卸载前beforeUnmount');
    },
    unmounted(){
        console.log('卸载unmounted');
    },
}
</script>

<style lang="scss" scoped></style>