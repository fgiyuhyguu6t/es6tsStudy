<template>
    <div>

    </div>
</template>

<script setup>
let fu=(a,b)=>{
    return a+b
}
// this是静态的，只想函数声明时作用域下的this的值（声明的时候指向谁一直谁）
console.log(fu(4,5));
function  pp() {
    console.log(name);
}
let jtp=()=>{
    console.log(name);
}
window.name='全局name'
const ss={
    name:'name',
    fu1(){
        // console.log('000');
        console.log('see',pp());
    }
}
pp()
jtp()
// call方法，改变this指向
pp.call(ss)
pp.apply(ss)
pp.bind(ss)
jtp.call(ss)
let {fu1}=ss
console.log(fu1());

// 2.箭头函数不能作为构造函数来实例化对象
let person=(name,age)=>{
    this.name=name
    this.age=age
}
// let a=new person('mz',22)
// 3.不能使用 argument 变量
let f=()=>{
    console.log(argument);
}
// f(44)
function ffw(){
    console.log(argument);
}
// ffw('112')
// 简写
// 形参只有一个的时候 不写（）
// {}不写 只有一条语句时。。return也不写
let a= i=>i++
console.log(a(7));


</script>

<style lang="scss" scoped>

</style>