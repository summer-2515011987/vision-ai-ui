import Vue from "vue";
import VueRouter from "vue-router";
// import login from "@/views/login";
Vue.use(VueRouter);
const routes = [{
        path: "/",
        name: "login",
        component: () =>
            import ("@/views/login") //路由懒加载
    },
    {
        path: "/home",
        name: "home",
        // hidden: true,判断路由入口是否可见的开关
        component: () =>
            import ("@/views/setMain"),
        redirect: "/home/node",
        meta: { title: "系统管理", icon: "ums", isLeaf: false },
        // 子路由
        children: [{
                path: "/home/node",
                name: "node",
                component: () =>
                    import ("@/views/node/index"),
                meta: { title: "边缘节点列表", icon: "ums-admin", isLeaf: true }
            },
            // 边缘节点详情
            {
                path: "/home/nodeDetail/:id",
                name: "node",
                component: () =>
                    import ("@/views/node/nodeDetail"),
                meta: { title: "边缘节点详情", icon: "ums-admin", isLeaf: true }
            },
            // edgeNodeConfig 边缘节点配置
            {
                path: "/home/edgeNodeConfig",
                name: "node",
                component: () =>
                    import ("@/views/node/edgeNodeConfig"),
                meta: { title: "边缘节点配置", icon: "ums-admin", isLeaf: true }
            },
            {
                path: "/home/userApplications",
                name: "userApplications",
                component: () =>
                    import ("@/views/applicationManagement/userApplications"),
                meta: { title: "应用管理" }
            },
            //创建容器应用
            {
                path: "/home/createApp",
                name: "createApp",
                component: () =>
                    import ("@/views/applicationManagement/components/createApp"),
                meta: { title: "创建容器应用" }
            },
            {
                path: "/home/marketApplication",
                name: "marketApplication",
                component: () =>
                    import ("@/views/applicationManagement/marketApplication"),
                meta: { title: "应用模板" }
            },

            {
                path: "/home/applicationTem",
                name: "containerTem",
                component: () =>
                    import ("@/views/applicationDeploy/applicationTem"),
                meta: { title: "任务管理" }
            },
            {
                path: "/home/containerApplication",
                name: "containerDeploy",
                component: () =>
                    import ("@/views/applicationDeploy/containerApplication"),
                meta: { title: "任务告警" }
            },
            {
                path: "/home/messageDistribution",
                name: "messageDistribution",
                component: () =>
                    import ("@/views/cloudNews/messageDistribution"),
                meta: { title: "消息下发" }
            },
            {
                path: "/home/newsReport",
                name: "newsReport",
                component: () =>
                    import ("@/views/cloudNews/newsReport"),
                meta: { title: "消息上报" }
            },

            {
                path: "/home/dataAnalysis",
                name: "dataAnalysis",
                component: () =>
                    import ("@/views/dataAnalysis"),
                meta: { title: "企业镜像" }
            },
            // 能力商店
            {
                path: "/home/capabilityStore",
                name: "capabilityStore",
                component: () =>
                    import ("@/views/capabilityStore"),
                meta: { title: "能力商店" }
            },
            // 能力商店详情
            {
                path: "/home/capabilityStoreDetail",
                name: "capabilityStoreDetail",
                component: () =>
                    import ("@/views/capabilityStore/capabilityStoreDetail"),
                meta: { title: "能力商店详情" }
            }
        ]
    },
    // // 详情页
    // {
    //     path: "/Homedetail:id",
    //     name: "Homedetail",
    //     component: () =>
    //         import ("@/views/Homedetail.vue")
    // }
    { path: "*", redirect: "/404", hidden: true }
];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;