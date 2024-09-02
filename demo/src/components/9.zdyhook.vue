<template>
    <div>
        <!-- <h1>{{ ppp }}</h1> -->
        <h1>x:{{ ppp.x }}</h1>
        <h1>y:{{ ppp.y }}</h1>
    </div>
</template>

<script setup>
import usep from '../hooks/usePoint'
let ppp=usep()
</script>

<style lang="scss" scoped>

</style>