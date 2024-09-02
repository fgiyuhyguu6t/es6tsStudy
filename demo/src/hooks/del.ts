import { reactive } from "vue";
export default 
// 删除一项数据
function originData() {
    const state = reactive({
        item: [
            {
                name: '张',
                age: 18
            },
            {
                name: '王',
                age: 18
            },
        ]
    })
    // 删除一项
    function removeItem(i) {
    state.item = state.item.filter((el, index) => index !== i)
}
return {
    state,removeItem
}
}