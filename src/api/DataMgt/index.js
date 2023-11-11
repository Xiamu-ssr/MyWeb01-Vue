import request from '@/utils/request'



export function getId(){
    return request({
        url: '/DataMgt/getId',
        method: 'post',
        data:null
    })
}
export function uploadPic(){
    return request({
        url: '/DataMgt/uploadPic',
        method: 'post',
        data:null
    })
}

export function deletePic(name){
    return request({
        url: '/DataMgt/deletePic',
        method: 'post',
        data:name
    })
}

//新建动态
export function createImageText(params){
    return request({
        url: '/DataMgt/createImageText',
        method: 'post',
        data:params
    })
}

//取消新建动态
export function cancelImageText(params){
    return request({
        url: '/DataMgt/cancelImageText',
        method: 'post',
        data:params
    })
}

export function getList(params){
    return request({
        url: '/DataMgt/getList',
        method: 'post',
        data:params
    })
}
export function getImageTextById(id){
    return request({
        url: '/DataMgt/getImageTextById',
        method: 'post',
        data:id
    })
}