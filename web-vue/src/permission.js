import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/tokenActions"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

// NProgress.configure({ showSpinner: false });
const whiteList = ["/login", "/auth-redirect"];
router.beforeEach((to, from, next) => {
    NProgress.start();
    // 设置页面标题
    let hasToken = window.sessionStorage.getItem("token");
    document.title = getPageTitle(to.meta.title);
    if (hasToken) {
        if (to.path === "/login") {
            next({ path: "/" });
            NProgress.done();
        } else {
            store.dispatch("getMenus").then(res => {
                let roles = res.data.data;
                console.log("jiaose", roles);
                const accessRoutes = store.dispatch("premission/generateRoutes", roles);
                router.addRoutes(accessRoutes);
                next({...to, replace: true });
            });
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            NProgress.done();
            next();
        } else {
            console.log("666");
            next(`/login`);
            NProgress.done();
        }
    }
});
router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});