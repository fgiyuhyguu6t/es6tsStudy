<template>
    <div>
        <h5>我是setup的测试</h5>
        <h2>来着父的值：{{ t3 }}</h2>
       <h4>{{newt3}}</h4>
       <!-- <h1>zzzdz</h1> -->
       <slot name="one"></slot>
       <button @click="send">传值给父组件</button>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        props:{
            t3:{
                type:String,
                require:true
            }
        },
        setup(props,context){
            // context 表示上下文对象，包含attrs，slots，emit
            // attrs 外部传递过来的属性，并且没有在props中定义
            // slots 插槽
            // emit 分发事件


            console.log(props);
            console.log('context',context);
            console.log("没有的值",context.attrs);
            console.log("插槽",context.slots);
            
            const zizi=ref('100块')
            // 传值给父组件
            function send(){
                context.emit('fc',zizi)
            }


            const newt3=ref(props.t3 +'   经过setup')
            return{
                newt3,send
            }
        }
    }
</script>

<style scoped>

</style>