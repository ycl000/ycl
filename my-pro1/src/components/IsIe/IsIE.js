/**
 * 识别ie--浅识别
 */
export const isIe = () => {
    let explorer = window.navigator.userAgent;
        //判断是否为IE浏览器
    if (explorer.indexOf("MSIE") >= 0) {
        return true;
    }else {
        return false
    }
}


/**
 * 颜色转换16进制转rgba
 * @param {String} hex 
 * @param {Number} opacity 
 */
export function hex2Rgba(hex, opacity) {
    if(!hex) hex = "#2c4dae";
    return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + (opacity || "1") + ")";
}


// 去除html标签
export const htmlSafeStr = (str) => {
    return str.replace(/<[^>]+>/g, "")
}


/* 获取url参数 */
export const getQueryString = () => {
    let qs = location.href.split('?')[1] || '',
        args = {},
        items = qs.length ? qs.split("&") : [];
        items.forEach((item,i) => {
            let arr = item.split('='),
                name = decodeURIComponent(arr[0]),
                value = decodeURIComponent(arr[1]);
                name.length && (args[name] = value)
        })
    return args;
}

/* 解析url参数 */
export const paramsToStringify = (params) => {
    if(params){
        let query = [];
        for(let key in params){
            query.push(`${key}=${params[key]}`)
        }
        return `${query.join('&')}`
    }else{
        return ''
    }
}

// 将数据转化为数组
export const toArray = (data) => {
    return Array.isArray(data) ? data : [data]
}

/**
 * 生成指定格式的时间
 * @param {*} timeStemp 时间戳
 * @param {*} flag 格式符号
 */
export function formatTime(timeStemp, flag) {
    let time = new Date(timeStemp);
    let timeArr = [time.getFullYear(), time.getMonth() + 1, time.getDate()];
    return timeArr.join(flag || '/')
}


//字符大于长度显示省略号
export const getSubStringSum = (str = "", num = 1) => {
    let newStr;
    if(str){
        str = str + '';
        if (str.trim().length > num ) {
            newStr = str.trim().substring(0, num) + "...";
        } else {
            newStr = str.trim();
        }
    }else{
        newStr = ''
    }
    return newStr;
}