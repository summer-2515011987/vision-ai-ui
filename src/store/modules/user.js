import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/tokenActions";
const user = {
    state: {},
    mutations: {},
    actions: {
        // 登录及设置token
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                login(userInfo)
                    .then(response => {
                        const data = response.data;
                        setToken(data.token);
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        // 获取用户信息
        GetInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getInfo()
                    .then(response => {
                        const data = response.data;
                        if (data.roles && data.roles.length > 0) {
                            // 验证返回的roles是否是一个非空数组
                            commit("SET_ROLES", data.roles);
                        } else {
                            reject("用户没有绑定权限，请联系系统管理员!");
                        }
                        commit("SET_NAME", data.username);
                        commit("SET_AVATAR", data.icon);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        // 登出
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                var token = getToken();
                logout(token)
                    .then(() => {
                        commit("SET_ROLES", []);
                        removeToken();
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
export default user;