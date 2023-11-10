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