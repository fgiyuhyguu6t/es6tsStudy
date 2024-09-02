<template>
    <h2>setup函数的介绍和使用</h2>
    <h2>vue:{{ t1 }}</h2>
    <h2>vue:{{ t2 }}</h2>
    <button @click="changev2">改变vue2</button>
    <button @click="getvue3">获取vue3的数据用vue2的方法</button>
    <button @click="getvue2">获取vue2的数据</button>
    <h1>{{ count }}</h1>
    <button @click="add">加</button>
    <button @click="addcount">加3</button>
    <hr>
    <h3>子组件</h3>
    
    <h3>子组件过来的值-----{{zzzdz}}</h3>
    
    <demo :t3="t3" t4="t4" @fc="jc">
        <template v-slot:one>
            <h2>插槽</h2>
        </template>
    </demo>
    <demo :t3="t3" t4="t4" @fc="jc">
        <template v-slot:one>
            <h2>二次运用</h2>
        </template>
    </demo>
</template>
<script>
import { ref } from 'vue'
import demo from './1.1demo.vue'
export default {
    components: { demo },
    data() {
        return {
            t1: 'vue2',
            count: 0
        }
    },
    methods: {
        changev2() {
            this.t1 = 'vue222'
        },
        getvue3() {
            console.log('vue3数据:', this.t2);
        },
        add() {
            this.count++
        }
    },
    // 在beforecreate喝create之间
    setup(props) {
        //props 是一个对象，组件外部传来的值，并且这个值是组件内的值
        let t2 = ref('vue3 setup的数据')
        let count = ref(0)
        // 定义数据要返回
        console.log('setup');
        function addcount() {
            count.value++
        }

        function getvue2() {
            // 没有this数据 没有vue的数据
            // console.log('vue3',this.t2);// 没有
            console.log('vue2数据:', this.t1);//打印不了
        }
        let t3 = ref('给子组件传递数据')
        let t4 = ref(8)
        // 接受子组件的值
        let zzzdz=ref()
        function jc(z){
            console.log('子组件的值:',z);
            zzzdz.value=z
        }
        return {
            t2, getvue2, count, addcount, t3, t4,jc,zzzdz
        }
    }
}
</script>