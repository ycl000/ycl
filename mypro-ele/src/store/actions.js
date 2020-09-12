import * as types from './mutations-types'
//设置cookie 用户登录
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//删除cookie 用户退出登录
function clearCookie(name) {  
    setCookie(name, "", -1);  
} 
const actions = {
    // 用户登录
    setUserInfo({commit}){
        // localStorage.setItem("loginStatus",true)
        setCookie('username',"Bill Gates",7)
        commit(types.SET_LOGIN_STATUS,'Bill Gates')

    },
    // 用户退出登录
    setSignOut({commit}){
        clearCookie("username")
        // localStorage.removeItem("loginStatus")
        commit(types.SET_LOGIN_STATUS,false)
    }
}
export default actions