<template>
    <div>
        <h3>孙</h3>
        <h1>来自祖的值{{ vvv }}</h1>
        <br><hr>

        <!-- <teleport1></teleport1> -->
        <!-- 异步引入 -->
        <Suspense>
            <template v-slot:default>
                <yybb></yybb>
            </template>
            <!-- 加载太慢，展示 -->
            <template v-slot:fallback>
                <!-- <yybb></yybb> -->
                <h3>加载太慢</h3>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import {inject} from 'vue'
import teleport1 from './15teleport'  //静态引入
// 异步引入
import {defineAsyncComponent} from 'vue'
const yybb= defineAsyncComponent(()=>import('./15teleport'))
const vvv = inject('vvv')

</script>

<style lang="scss" scoped>

</style>