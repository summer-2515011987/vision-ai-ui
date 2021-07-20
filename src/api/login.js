import request from "@/utils/request";
let BASEPATH = "/VideoPlatform";
// 登陆接口
export function login(data) {
    return request({
        url: BASEPATH + "/login",
        method: "post",
        data: data
    });
}

export function getInfo() {
    return request({
        url: BASEPATH + "/info",
        method: "get"
    });
}

export function logout() {
    return request({
        url: BASEPATH + "/logout",
        method: "post"
    });
}