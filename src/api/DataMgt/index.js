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
        method: 'get',
        params:params
    })
}
export function getImageTextById(id){
    return request({
        url: '/DataMgt/getImageTextById',
        method: 'post',
        data:id
    })
}

export function getGeo2Index(){
    return {
        "北京市": "0",
        "天津市": "1",
        "上海市": "2",
        "重庆市": "3",
        "河北省": "4",
        "河南省": "5",
        "云南省": "6",
        "辽宁省": "7",
        "黑龙江省": "8",
        "湖南省": "9",
        "安徽省": "10",
        "山东省": "11",
        "新疆维吾尔自治区": "12",
        "江苏省": "13",
        "浙江省": "14",
        "江西省": "15",
        "湖北省": "16",
        "广西壮族自治区": "17",
        "甘肃省": "18",
        "山西省": "19",
        "内蒙古自治区": "20",
        "陕西省": "21",
        "吉林省": "22",
        "福建省": "23",
        "贵州省": "24",
        "广东省": "25",
        "青海省": "26",
        "西藏自治区": "27",
        "四川省": "28",
        "宁夏回族自治区": "29",
        "海南省": "30",
        "台湾省": "31",
        "香港特别行政区": "32",
        "澳门特别行政区": "33"
    }
}

export function getIndex2Geo(){
    return {
        "0" :"北京市",
        "1" :"天津市",
        "2" :"上海市",
        "3" :"重庆市",
        "4" :"河北省",
        "5" :"河南省",
        "6" :"云南省",
        "7" :"辽宁省",
        "8" :"黑龙江省",
        "9" :"湖南省",
        "10" :"安徽省",
        "11" :"山东省",
        "12" :"新疆维吾尔自治区",
        "13" :"江苏省",
        "14" :"浙江省",
        "15" :"江西省",
        "16" :"湖北省",
        "17" :"广西壮族自治区",
        "18" :"甘肃省",
        "19" :"山西省",
        "20" :"内蒙古自治区",
        "21" :"陕西省",
        "22" :"吉林省",
        "23" :"福建省",
        "24" :"贵州省",
        "25" :"广东省",
        "26" :"青海省",
        "27" :"西藏自治区",
        "28" :"四川省",
        "29" :"宁夏回族自治区",
        "30" :"海南省",
        "31" :"台湾省",
        "32" :"香港特别行政区",
        "33" :"澳门特别行政区"
    }
}