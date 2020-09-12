import axios from "axios"
import QS from "qs"



// 请求拦截器
axios.interceptors.request.use(
    function(config){
        // 请求之前做点什么
        return config
    },
    function(error){
        // 对请求错误做点什么
        return Promise.reject(error)
    }
)
// 响应拦截器
axios.interceptors.response.use(
    function(config){
        // 对响应数据做点什么
        return config
    },
    function(err){
        // 对响应错误做点什么
        return Promise.reject(err)
    }
)


// get请求
export function get(url,params){
    return new Promise((resolve,resject)=>{
        axios.get(url,{params:params})
        .then(res=>{
            // 函数中调用resolve()/reject()这样做的目的是触发then的回调函数
            resolve(res.data)
        })
        .catch(err=>{
            resject(err.data)
        })
    })
}
// post请求
export function post(url,params){
    return new Promise((resolve,resject)=>{
        axios.post(url,QS.stringify(params))
        .then(res=>{
            resolve(res.data)
        })
        .catch(err=>{
            resject(err.data)
        })
    })
}