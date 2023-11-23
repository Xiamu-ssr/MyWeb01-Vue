
export function randomTimeLineStyle(){
    let size = ['large', 'normal'];
    let type = ['primary', 'success', 'warning', 'danger', 'info'];
    let hollow = [false, true];
    let activity = {}
    activity["size"] = randomGetOneInArray(size);
    activity["type"] = randomGetOneInArray(type);
    activity["hollow"] = randomGetOneInArray(hollow);
    return activity;
}

export function randomTagStyle(){
    let size = ['large', 'default', 'small', ''];
    let type = ['success', 'info', 'warning', 'danger', ''];
    let effect = ['dark', 'light', 'plain'];
    let round = [false, true];
    let tag = {}
    tag["size"] = randomGetOneInArray(size)
    tag["type"] = randomGetOneInArray(type)
    tag["effect"] = randomGetOneInArray(effect)
    tag["round"] = randomGetOneInArray(round)
    return tag;
}

export function randomGetOneInArray(list){
    return list[Math.floor(Math.random() * list.length)]
}