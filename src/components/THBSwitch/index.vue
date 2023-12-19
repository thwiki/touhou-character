<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "THBSwitch",
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
@import url(./style.less);
</style>