<template>
    <div>
        <h1>名字：{{ person.name }}</h1>
        <h1>年龄{{ person.age }}</h1> 
        <h1>钱：{{ person.jop.j1.salaty }}K</h1> 
        <button @click="person.name+='-'">名字：</button>
        <br><br>
        <button @click="person.age++">年龄</button> 
        <br><br>
        <button @click="person.jop.j1.salaty++">加</button> 
        <br><hr>
        <h1>{{ aa.y }}</h1>
        <button @click="aa.y+=8">修改</button>
        <button @click="aa={y:9}">替换</button>
    </div>
</template>

<script>
import {watchEffect,toRef,toRefs,reactive,shallowReactive,ref,shallowRef}  from 'vue'
export default{
    setup(){
        // shallowReactive  只修改第一层对象
        let person=shallowReactive({
            name:'zz',
            age:9,
            jop:{
                j1:{
                    salaty:20
                }
            }
        })

        // let aa=ref(0)
        // shallowRef  数字可以变，字符串不能变。可以替换
        // let aa=shallowRef(0)
        let aa=shallowRef({
            y:0
        })

        return{
            person,
            aa,
            // ...toRefs(person)
        }
    }
}

</script>
<style lang="scss" scoped>

</style>