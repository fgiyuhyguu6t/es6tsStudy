<template>
    <div>
        <h1>子组件</h1>
        来自父组件的值
        <h1>{{ v1 }}</h1>
        <h1>{{ v2 }}</h1>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            zidzhi: '子的值'
        }
    },
    // props: {
    //     v1: {

    //     }, v2: {

    //     }
    // },
    props:["v1","v2"],
    setup(props, context) {
        console.log(props);
        console.log(context.attrs);
    }
}

</script>

<style lang="scss" scoped></style>