<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld/> -->
  <!-- <index></index> -->
  <!-- <setup></setup>
  <setup2></setup2> -->

  <!-- <ref1></ref1> -->
  <!-- <readtive></readtive> -->
  <!-- <options></options> -->
  <!-- <newoptions></newoptions> -->
  <!-- <eslet></eslet> -->
  <!-- <letdemo></letdemo> -->
  <!-- <consts></consts> -->
  <!-- <jg></jg> -->
  <!-- <mb></mb> -->
  <!-- <jt></jt> -->
  <!-- <jty></jty> -->
  <!-- <reve></reve> -->
  <!-- <compute></compute> -->
  <!-- <watch></watch> -->
  <!-- <watchEffect></watchEffect> -->

  <!-- <button @click="iff=!iff">显示</button> -->
  <br />
  <!-- <life v-if="iff"></life> -->
  <!-- <zdyhook v-if="iff"></zdyhook> -->
  <!-- <toref></toref> -->
  <!-- <shallow></shallow> -->
  <!-- <readonly></readonly> -->
  <!-- <toraw></toraw> -->
  <!-- <customRef></customRef> -->
  <!-- <fu></fu> -->
  <types></types>
</template>

<script setup>
import { ref } from "vue";
let iff = ref(true);
import consts from "./components/es6/2const.vue";
import jg from "./components/es6/3.解构赋值.vue";
import mb from "./components/es6/4模板字符串.vue";
import jt from "./components/es6/6.箭头函数.vue";
import jty from "./components/es6/61箭头函数的引用.vue";
import reve from "./components/es6/arr/reverse.vue";
import HelloWorld from "./components/HelloWorld.vue";
import index from "./components/index.vue";
import setup from "./components/1setup.vue";
import setup2 from "./components/2-1setup.vue";
import ref1 from "./components/2.ref.vue";
import readtive from "./components/3.readtive.vue";
import options from "./components/4.options.vue";
import newoptions from "./components/4-1options.vue";
import eslet from "./components/es6/1.let.vue";
import letdemo from "./components/es6/1.letdemo.vue";
import compute from "./components/5computed.vue";
import watch from "./components/6.watch.vue";
import watchEffect from "./components/7.watchEffect.vue";
import life from "./components/8.life.vue";
// import lifesetup from './components/8.lifesetup.vue'
import zdyhook from "./components/9.zdyhook.vue";
import toref from "./components/10toref.vue";
import shallow from "./components/11shallow.vue";
import readonly from "./components/12readonly.vue";
import toraw from "./components/12toraw.vue";
import customRef from "./components/13customRef.vue";
import fu from "./components/14fu.vue";
import types from "./ts/ts/index.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
