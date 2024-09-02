<template>
    <div>
        <h1>{{ sum }}</h1>
        <button @click="sum++">加</button>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, ref } from 'vue'

let sum = ref(1)
onBeforMounted(() => {
    console.log("onBeforMounted");
}),
    onMounted(() => {
        console.log("onMounted");
    }),
    onBeforUpdate(() => {
        console.log("onBeforUpdate");
    }),
    onUpdate(() => {
        console.log("onMounted");
    }),
    onBeforeUnmount(() => {
        console.log("onBeforeUnmount");
    }),
    onUnmounted(() => {
        console.log("onUnmounted");
    }),

</script>

<style lang="scss" scoped></style>