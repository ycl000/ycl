import {FUN} from './mutations-Types'

// import * as types from "./mutations-Types" //使用时就可以使用 types.name
const mutations ={
    // 事件  //改变状态的唯一函数
    [FUN](state, value){
            state.data = value
    }
}
export default mutations