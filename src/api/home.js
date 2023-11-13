import request from '@/utils/request'

export function getAllData(){
    return request({
        url: '/HomePage/getAllData',
        method: 'post',
        data:null
    })
}