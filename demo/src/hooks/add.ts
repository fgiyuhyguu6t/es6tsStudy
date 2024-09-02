import { reactive } from "vue";
export default 
// 添加
function newState(state){
    // 输入框
    const params = reactive({
    item:
    {
        name:'张',
        age: 1
    }
})
function addIiem(){
    state.item.push(Object.assign({},params.item))
    params.item.name ='',
     params.item.age = undefined
}
return{
    params,addIiem
}
}