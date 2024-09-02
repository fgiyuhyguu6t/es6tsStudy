import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
const app =createApp(App)
app.mount('#app')
// createApp(App).mount('#app')
// app.use(store).use(router).mount('#app')

// 挂载全局对象
app.config.globalProperties.$http=axios
// app.config.globalProperties.$qs=qs
// 配置基础地址
// app.defaults.baseURL="http://bufantec.com/api/"
// 请求拦截器
axios.interceptors.request.use(config=>{
    if(config.method?.toLocaleLowerCase()=='post'){
        config.data=qs.stringify(config.data)
    }
    return config;
},err=>{
    return Promise.reject(err)
})
