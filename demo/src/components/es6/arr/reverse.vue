<template>
    <div>
<h2>{{ arr }}</h2>
<h2>{{ fan }}</h2>

    </div>
</template>

<script setup >
import {reactive} from 'vue'
import *as aa from '../模块化/1daochu'
let arr=reactive([1,2,4])
console.log(arr);
arr.reverse() //将原数组反转，返回值是反转后的数组
// let fan=arr.reverse()
// console.log("反转",fan);
console.log("反转",arr.reverse());


// 导入
// console.log(aa.sclool);
// console.log(aa.sclool1);
// console.log(aa.name);
console.log(aa);
// console.log(aa);
// 使用暴露方法
aa.default.change()
aa.jj()


</script>

<style lang="scss" scoped>

</style>