<template>
    <div>
        <div ref="aa" ></div>
        <h2>{{ a }}</h2>
        <button @click="dian">点</button>
        <hr>
    </div>
</template>
<script setup>
import { ref} from 'vue'
const aa=ref()
let a=ref(2)
// ad.addEventListener("click",function(){
//     setTimeout(() => {
//         this.style.background-color='red'
//     }, 2000);
// })
function dian(){
        setTimeout(() => {
            // aa.style.background-color='red'
            a.value =3
            console.log(a.value);
        }, 2000);
}
// const arr=[1,3,2,4,6,5,6]
// // function arr()
// const a =arr.filter(function(tem){
//     if(tem%2===0){
//         return true
//     }
// })
</script>
<style  scoped>
#ad{
    width: 500px;
    height: 500px;
    background-color: aliceblue;
}
</style>