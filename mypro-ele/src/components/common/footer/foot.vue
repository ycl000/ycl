<template>
<div>
    <slot name="f1"></slot>
    <slot name="f2"></slot>
    <slot name="f3"></slot>
    <slot name="f4"></slot>
    <slot name="f5"></slot>
</div>
</template>

<script>
export default {
    name: '',
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
};
</script>

<style scoped>
div {
    width: 100%;
    position: fixed;
    bottom: 0px;
    display: flex;

}

span {
    flex: 1;
    padding: 10px 5px;
}

a {
    text-align: center;
    color: black;
}
</style>
