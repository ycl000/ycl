
var cookieSplit = function(str,name){
    // document.cookie = "username=Bill Gates";
    var arr = str.split(";")
    // console.log(arr)
    var cookie_str = arr.filter(function(item){
        console.log(item,item.indexOf(name))
        return item
    }).toString()
    // console.log(cookie_str)
    var index = cookie_str.indexOf(name+'=')
    if(index==-1){
        return false
    }else{
        // console.log(index)
        var val = cookie_str.slice(index,cookie_str.length)
        // console.log(val.split("=")[1])
        return val.split("=")[1]
    }
   
}
var getCookie=function(name){
    // document.cookie = "username=Bill Gates";
    var cookies = document.cookie
    console.log(cookies)
    return cookieSplit(cookies,name)
}
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
    // 用户登录状态记录
    loginStatus: getCookie("username") || null,
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
})
