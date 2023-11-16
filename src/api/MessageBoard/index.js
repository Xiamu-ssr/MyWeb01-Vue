import request from '@/utils/request'

export function create(params){
    return request({
        url: '/MessageBoard/create',
        method: 'post',
        data:params
    })
}