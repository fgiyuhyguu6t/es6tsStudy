<template>
    <div>
        <setzi :v1="111" :v2="dd"></setzi>
    </div>
</template>

<script>
import setzi from './2-1zi'
export default {

    components:{setzi},
    data(){
        return{
            v1:'',
            dd:'5555'
        }
    },
    
    setup(props,context){
        // props 外面传来的值
    }
}
</script>

<style lang="scss" scoped>

</style>