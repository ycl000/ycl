import * as types from './mutations-types'
const mutations = {
    [types.SET_LOGIN_STATUS](state,sta){
        console.log(sta)
        state.loginStatus = sta

    }
}
export default mutations