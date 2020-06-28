import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import createLogger from 'vuex/dist/logger'//修改日志
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'//开发环境中为ture 否则为false
const state ={
  data:"我是vuex"
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins:debug ? [createLogger()]:[]//开发环境下显示vuex的状态修改
  // modules: {
  // }
})
