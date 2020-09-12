<template>
<div>
    <Header><span slot="h4">{{msg}}</span></Header>
    <h1>This is an about page</h1>
    <Foot>
        <span slot="f1">
            <router-link to="/">首页</router-link>
        </span>
        <span slot="f2">
            <router-link to="/about">会员</router-link>
        </span>
        <span slot="f3">订单</span>
        <span slot="f4">
            <router-link to="/myonline">我的</router-link>
        </span>

    </Foot>
</div>
</template>

<script>
import Header from '@/components/common/header/header.vue'
import Foot from '@/components/common/footer/foot.vue'
export default {
    name: 'My',
    data() {
        return {
            msg: "我是Myonline页面  欢迎光临"
        };
    },
    computed: {
        // 计算属性
    },
    watch: {
        // 监听
    },
    mounted() {
        // this.$toast('暂无版权')
    },
    methods: {
        // 方法
    },
    components: {
        Header,
        Foot,
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
</style>
