import request from '@/utils/request'
import axios from "axios";

export function create(params){
    return request({
        url: '/MessageBoard/create',
        method: 'post',
        data:params
    })
}
export function getTopData(){
    return request({
        url: '/MessageBoard/getTopData',
        method: 'post',
        data:null
    })
}

export function getList(params){
    return request({
        url: '/MessageBoard/getList',
        method: 'post',
        data:params
    })
}

export function confirmCheck(params){
    return request({
        url: '/MessageBoard/confirmCheck',
        method: 'post',
        data:params
    })
}

export function cancelCheck(params){
    return request({
        url: '/MessageBoard/cancelCheck',
        method: 'post',
        data:params
    })
}

// export function cancelCheck(params){
//     return axios.get("/test.json")
// }
