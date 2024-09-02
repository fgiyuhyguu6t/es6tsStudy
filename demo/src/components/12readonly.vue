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
        <button @click="aa={y:9}">替换</button>
    </div>
</template>

<script>
import {shallowReadonly,readonly,toRef,toRefs,reactive,shallowReactive,ref,shallowRef}  from 'vue'
export default{
    setup(){
        
        let person=reactive({
            name:'zz',
            age:9,
            jop:{
                j1:{
                    salaty:20
                }
            }
        })

        let aa=readonly({
            y:0
        })

        // readonly  不能改
        // shallowReadonly 改最内一层
        person=shallowReadonly(person)
        return{
            person,
            aa,
        }
    }
}

</script>
<style lang="scss" scoped>

</style>