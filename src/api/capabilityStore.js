// 能力商店
import request from "@/utils/request";
let BASEPATH = "/VideoPlatform";

// export function fetchList(params) {
//   return request({
//     url: BASEPATH + "/Company/list/",
//     method: "get",
//     params: params
//   });
// }
export function searchStore(data) {
    return request({
        url: BASEPATH + "/applicationImage/searchImage",
        method: "post",
        data: data
    });
}
//获取市场镜像更新日志
export function searchInfoLog(id) {
    return request({
        url: BASEPATH + "/applicationImageLog/searchMarketInfoLog/" + id,
        method: "get"
    });
}