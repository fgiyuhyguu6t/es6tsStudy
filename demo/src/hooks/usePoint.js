import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function(){
    let p = reactive({
        x:0,
        y:0 
    })
    function savep(event){
        p.x=event.pageX
        p.y=event.pageY
    }
    onMounted(()=>{
        window.addEventListener('click',savep)
    })
    // 卸载前
    onBeforeUnmount(()=>{
        window.removeEventListener('clivk',savep)
    })
    // 
    return p 
}