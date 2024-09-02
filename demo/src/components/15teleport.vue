<template>
    <button @click="iss=!iss">点我弹窗</button>
    <!-- css 传送 -->
    <teleport to="body">
        <div class='mask' v-if="iss">
            <div class="box" >        
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <button @click="iss=!iss">关闭弹窗</button>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import {ref} from 'vue'
let iss = ref(false)
</script>

<style scoped>
/* 弹窗 */
.box{
    width: 500px;
    height: 500px;
    background-color: yellowgreen;
    /* 文字居中 */
    text-align: center; 
    position: absolute;
    top: 50%;
    left: 50%;
    /* 参考自身 */
    transform: translate(-50%,-50%);

}
/* 遮罩 */
.mask{
    width: 100%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    left: 0;
}
</style>