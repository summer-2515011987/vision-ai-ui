import { getLogin, getMenus } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
import router, { resetRouter } from "@/router";

const state = {
    token: getToken(),
    name: "",
    menuName: "",
    avatar: "",
    menus: [],
    roles: []
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    },
    // 存菜单列表
    SET_MENU: (state, menus) => {
        state.menus = menus;
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    },
    // 存菜单名称
    SET_MENU_NAME: (state, menuName) => {
        state.menuName = menuName;
    }
};
const actions = {
    getLogin({ commit }) {
        return new Promise((resolve, reject) => {
            getLogin()
                .then(res => {
                    console.log("token", res);
                    let data = res.data.data;
                    commit("SET_TOKEN", data.token);
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // 获取用户菜单
    getMenus({ commit, state }) {
        return new Promise((resolve, reject) => {
            getMenus()
                .then(response => {
                    let menuList = response.data.data;
                    let menus = [];
                    menuList.forEach(element => {
                        menus.push(element.menuName);
                    });
                    if (!menus || menus.length <= 0) {
                        reject("getMenus:menus必须是一个非空数组");
                    }
                    commit("SET_MENU", menus);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

export default {
    // namespaced: true,
    state,
    mutations,
    actions
};