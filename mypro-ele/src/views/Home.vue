<template>
<div class="home">
    <Header><span slot="h4">{{title}}</span></Header>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-if="!loginStatus">请登录<button @click="setcookie">登录</button></div>
    <div v-else>
        <span>已登录!你好{{loginStatus}}</span>
        <button @click="userOut">取消登录</button>
    </div>
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/common/header/header.vue'
import Foot from '@/components/common/footer/foot.vue'
import {
    mapGetters,
    mapMutations,
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'Home',
    data() {
        return {
            data: "测试",
            title: "首页"
        }
    },
    // 计算属性
    computed: {
        ...mapGetters([
            'loginStatus'
        ]),
        ...mapState([
            'loginStatus'
        ])
    },
    // 方法
    methods: {
        ...mapMutations({
            login: 'loginStatus',
        }),
        ...mapActions({
            setcookie: 'setUserInfo',
            userOut: 'setSignOut',
        })

    },
    // 组件注册
    components: {
        HelloWorld,
        Header,
        Foot
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
