<template>
  <h1>{{ msg }}</h1>
  <h1>{{ zdata }}</h1>
  <button @click="clickcg">修改</button>
  <h1>{{ vdata }}</h1>
  <h1>只读{{ onlyData }}</h1>
  <h1>根只读：{{ genonlyData }}</h1>

  <br>
  <h1>{{comt}}</h1>
  <h1>计算属性{{ getcomt }}</h1>
  <button @click="clickcomt">修改comt</button>




  <br><br>
  <button @click="clickvdata">修改vdata</button>
  <button @click="clickonlyData">onlyData？</button>
  <button @click="clickgenonlyData">根只读</button>
</template>

<script setup>
// reactive 深相应
// shallowReactive 一级相应

import { computed, reactive, readonly, ref, shallowReactive, shallowReadonly, watch, watchEffect } from "vue";
const msg = reactive([1])
const zdata = shallowReactive({
  name:'张山',
  age:18,
  friends:['李四','王五']
})
function clickcg(){
// // msg1++
// msg.push(5)
// console.log("按了",msg);
zdata.age++
// zdata.friends.push('ddd')
}


// ref 非对象 基本数据类型
const vdata = ref(0)
function clickvdata (){
  vdata.value++
}

// readonly 只读数据
const onlyData = readonly(3)
function clickonlyData (){
  onlyData
}

// shallowReadonly 根只读
const genonlyData = shallowReadonly({
  name:'张山',
  age:18,
  friends:['李四','王五']
})
function clickgenonlyData(){
  // 一级根无法修改
// genonlyData.age++
// 二级不限只读可修改  因为不是响应式无法显示，其实已经修改
genonlyData.friends.push('多一个')
console.log(genonlyData.friends);
}


// 计算属性computed
const comt = ref('用来测试计算属性')
const getcomt = computed(()=>{
  console.log("抒发了该计算属性");
  return comt.value.length
})
// 改变comt
function clickcomt(){
  comt.value += '?'
}

// 监听 watch  只监听ref reactive本身 reactive里的属性要写成一个函数形式的参数 ()=>zdata.age
// 第一个参数是监听的对象
 watch(comt,(newValue,oldValue)=>{
  console.log("新的",newValue,"旧的",oldValue);
})

 watch( ()=>zdata.age,(newValue,oldValue)=>{
  console.log("新的age",newValue,"旧的age",oldValue);
})

// watchEffct 副作用函数 函数里面的属性修改其中一个了就会执行，
watchEffect(()=>{
  console.log("watchEffect函数抒发","comt看一下:",comt,"zdata.age:",zdata.age, "genonlyData",genonlyData);
})

</script>

<style scoped>

</style>
