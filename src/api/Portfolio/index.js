import request from '@/utils/request'
import axios from "axios";


export function createNew(params){
    return request({
        url: '/Portfolio/create',
        method: 'post',
        data:params
    })
}

export function getList(){
    return request({
        url: '/Portfolio/getList',
        method: 'get',
        data:null
    })
}

export function deletById(params){
    return request({
        url: '/Portfolio/delete',
        method: 'post',
        data:params
    })
}

export function updateOrder(params){
    return request({
        url: '/Portfolio/update',
        method: 'post',
        data:params
    })
}