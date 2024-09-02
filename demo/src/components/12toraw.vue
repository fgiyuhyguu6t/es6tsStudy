<template>
    <div>
        <h1>名字：{{ name }}</h1>
        <h1>年龄{{ age }}</h1>
        <h1>钱：{{ jop.j1.salaty }}K</h1>
        <!-- <h1>名字：{{ person.name }}</h1>
        <h1>年龄{{ person.age }}</h1>
        <h1>钱：{{ person.jop.j1.salaty }}K</h1> -->
        <button @click="person.name += '-'">名字：</button>
        <br><br>
        <button @click="person.age++">年龄</button>
        <br><br>
        <button @click="person.jop.j1.salaty++">加</button>
        <br><br><hr>
        <button @click="torow">输入原始的</button>    
<hr>
        <h1>车:{{ person.car }}</h1>
        <!-- <h1>车名:{{ person.car.name }}</h1> -->
        <!-- <h1>车价格:{{ person.car.price }}</h1> -->
        <button @click="add">添加加</button>
        <button @click="person.car.name +='55'">改车名</button>
        <button @click="person.car.price++">改价格</button>
        <button @click="changeprice">改价格改价格</button>

    </div>
</template>

<script>
import { shallowReadonly, readonly, toRef, toRefs, reactive, shallowReactive, ref, shallowRef, toRaw,markRaw } from 'vue'
export default {
    setup() {

        let person = reactive({
            name: 'zz',
            age: 9,
            jop: {
                j1: {
                    salaty: 20
                }
            }
        })
        // toRaw reactive响应数据变成不响应
        function torow(){
            const pp= toRaw(person)
            // 变化但不响应
            pp.name='改不了'
            console.log("原始",pp);
        }


        function add() {
            let car = {
                name: '奔驰',
                price: 40,
            }
            // markRaw  添加的没有响应式 不能改
            person.car = markRaw(car)
            // person.car = car
            console.log(person);
        }
        function changeprice(){
            person.car.price++
            // 数据变了，但是没有相应
            console.log(person.car.price++);
        }

        return {
            person,
            add,
            ...toRefs(person),
            changeprice,
            torow
        }
    }
}

</script>
<style lang="scss" scoped></style>