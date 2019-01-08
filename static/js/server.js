'use strict'
import axios from 'axios'
/**
 * 封装调用接口方法
 */

 let getShopApi = function (path, data, success, failer, method) {
    if (!path) {
        throw new Error('缺少请求地址');
    }
    let apiUrl = '/api/' + path
    return axios({
        method: method || 'POST',
        url: apiUrl,
        data: method.toUpperCase() === 'GET' ? null : data,
        responseType: 'json'
    }).then(res => {
        console.log(res);
        if (res.data.errno === 0 && success) {
            success(res.data);
        } else {
            if (failer) {
                failer(res.data);
            }
        }
    }).catch(err => {
        console.log(err);
    });
 }

 var res = {
    getShopApi
 }

 export default res;