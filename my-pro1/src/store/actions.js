const actions = {
    fun2({state,commit},val){
        state.date= 3
        commit('fun',val)//调用mutations中的函数  mutations是改变状态的唯一函数
    }

}
export default actions

// state,   等同于store.$state，若在模块中则为局部状态
// 		rootState,   等同于store.$state,只存在模块中
// 		commit,   等同于store.$commit
// 		dispatch,   等同于store.$dispatch
// 		getters   等同于store.$getters
// ————————————————
// 版权声明：本文为CSDN博主「海绵杨宝宝」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_41820577/java/article/details/100530155