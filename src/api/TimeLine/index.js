import request from '@/utils/request'


export function getListByPlace(place){
    return request({
        url: '/TimeLine/getListByPlace',
        method: 'post',
        data:place
    })
}