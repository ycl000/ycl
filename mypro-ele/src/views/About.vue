<template>
<div class="about">
    <Header><span slot="h4">{{title}}</span></Header>
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
import Foot from '@/components/common/footer/foot.vue'
import Header from '../components/common/header/header'
export default {
    name: 'About',
    data() {
        return {
            title: "会员"
        }
    },
    components: {
        Foot,
        Header
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
