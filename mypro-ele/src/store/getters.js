

const getters = {
    // loginStatus:state=>state.loginStatus,
     // 相当于
    loginStatus(state){
        // document.cookie = "username=Bill Gates";
       
        // state.loginStatus=JSON.parse(localStorage.getItem("loginStatus"))
        console.log(state.loginStatus,document.cookie)
        return state.loginStatus
    },

}


export default getters
