<template>
    <div>
        <h2>没有ref   {{ a }}</h2>
        <h2>值1:  {{v1}}</h2>
        <h2>值2:  {{v2}}</h2>
        <h2>值3:  {{v3}}</h2>
        <h1>集合:  {{va}}</h1>
        <button @click="all">全放va</button>
        <hr>
        <p><input type="text" v-model="mobile"></p>
        <h2>{{ mobile }}</h2>
        <hr>
        <h1>当前产品名称:{{coffee.name}}</h1>
        <h1>当前产品价格:{{coffee.price}}</h1>
        <hr>
        <h3>登录</h3>
        <h3>用户名：<input type="text" v-model="params.username"></h3>
        <h3>密码：<input type="password" v-model="params.password"></h3>
        <button @click="doLogin">登录</button>
        <p>{{params}}</p>
    </div>
</template>
<!-- ref:创建一个包含响应式数据的引用对象 xxx.value
可以接受基本数据类型，对象类型 -->
<script>
import { ref,getCurrentInstance} from 'vue'
// import axios from 'axios'
// import qs from 'qs'

    export default {
        setup(props){
            const {proxy}=getCurrentInstance()
            console.log(proxy.$http);
            let a ='没有ref'
            let v1=ref('zz')
            let v2=ref('2000')
            let v3=ref('8.16')
            let va= ref('结合')
            function all(){
                va.value=`改变一下全放进来：${v1.value} ${a}`
                console.log(va);
            }

            // input
            let mobile=ref('123')

            const coffee={
                name:'橙c美式',
                price:9.9
            }
            // 登录
            const params=ref({
                username:'',
                password:''
            })
            function doLogin(){
                // console.log('hehe',params);
                // console.log(params.value);
                // axios.post('http://bufantec.com/api/test/user/doLogin',qs.stringify(params.value))
                // .then(res=>{
                //     console.log(res);
                // })

                proxy.$http.post('test/user/doLogin',params.value)
                .then(res=>{
                    console.log(res);
                })
            }

            return{
                a,v1,v2,v3,va,all,mobile,coffee,params,doLogin
            }
        }
    }
</script>

<style lang="less" scoped>

</style>