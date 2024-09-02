<template>
    <div>
        <h1>名字：{{ person.name }}</h1>
        <h1>年龄{{ person.age }}</h1> 
        <h1>钱：{{ person.jop.j1.salaty }}K</h1> 
        <hr>
        <h1>名字：{{ name }}</h1>
        <h1>年龄{{ age }}</h1> 
        <h1>钱：{{ jop.j1.salaty }}K</h1> 
        <button @click="person.name+='-'">名字：</button>
        <br><br>
        <button @click="person.age++">年龄</button> 
        <br><br>
        <button @click="person.jop.j1.salaty++">加</button> 
    </div>
</template>

<script>
import {watchEffect,toRef,toRefs,reactive}  from 'vue'
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

        return{
            person,
            // name:toRef(person,'name'),
            // age:toRef(person,'age'),
            // age:toRef(person,'age')

            // 全部一起变成可像相应的
            ...toRefs(person)
        }
    }
}

</script>
<style lang="scss" scoped>

</style>