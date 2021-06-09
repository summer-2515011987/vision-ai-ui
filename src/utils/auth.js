export function setRegionId(uuid) {
    return window.sessionStorage.setItem("osId", uuid || "");
    // return Cookies.set(ReginonId, uuid || '')
}