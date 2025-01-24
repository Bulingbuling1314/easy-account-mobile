"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    hasLogin: false,
    isUniverifyLogin: false,
    loginProvider: "",
    openid: null,
    testvuex: false,
    colorIndex: 0,
    colorList: ["#FF0000", "#00FF00", "#0000FF"],
    noMatchLeftWindow: true,
    active: "componentPage",
    leftWinActive: "/pages/component/view/view",
    activeOpen: "",
    menu: [],
    univerifyErrorMsg: "",
    // vuex测试例使用
    username: "foo",
    sex: "男",
    age: 10
  },
  mutations: {
    login(state, provider) {
      state.hasLogin = true;
      state.loginProvider = provider;
    },
    logout(state) {
      state.hasLogin = false;
      state.openid = null;
    },
    setOpenid(state, openid) {
      state.openid = openid;
    },
    setTestTrue(state) {
      state.testvuex = true;
    },
    setTestFalse(state) {
      state.testvuex = false;
    },
    setColorIndex(state, index) {
      state.colorIndex = index;
    },
    setMatchLeftWindow(state, matchLeftWindow) {
      state.noMatchLeftWindow = !matchLeftWindow;
    },
    setActive(state, tabPage) {
      state.active = tabPage;
    },
    setLeftWinActive(state, leftWinActive) {
      state.leftWinActive = leftWinActive;
    },
    setActiveOpen(state, activeOpen) {
      state.activeOpen = activeOpen;
    },
    setMenu(state, menu) {
      state.menu = menu;
    },
    setUniverifyLogin(state, payload) {
      typeof payload !== "boolean" ? payload = !!payload : "";
      state.isUniverifyLogin = payload;
    },
    setUniverifyErrorMsg(state, payload = "") {
      state.univerifyErrorMsg = payload;
    },
    // vuex测试例使用
    increment(state) {
      state.age++;
    },
    incrementTen(state, payload) {
      state.age += payload.amount;
    },
    resetAge(state) {
      state.age = 10;
    }
  },
  getters: {
    currentColor(state) {
      return state.colorList[state.colorIndex];
    },
    // vuex测试例使用
    doubleAge(state) {
      return state.age * 2;
    }
  },
  actions: {
    // vuex测试例使用
    incrementAsync(context, payload) {
      context.commit("incrementTen", payload);
    },
    // lazy loading openid
    getUserOpenId: async function({
      commit,
      state
    }) {
      return await new Promise((resolve, reject) => {
        if (state.openid) {
          resolve(state.openid);
        } else {
          common_vendor.index.login({
            success: (data) => {
              commit("login");
              setTimeout(function() {
                const openid = "123456789";
                common_vendor.index.__f__("log", "at store/index.js:113", "uni.request mock openid[" + openid + "]");
                commit("setOpenid", openid);
                resolve(openid);
              }, 1e3);
            },
            fail: (err) => {
              common_vendor.index.__f__("log", "at store/index.js:119", "uni.login 接口调用失败，将无法正常使用开放接口等服务", err);
              reject(err);
            }
          });
        }
      });
    },
    getPhoneNumber: function({
      commit
    }, univerifyInfo) {
      return new Promise((resolve, reject) => {
        common_vendor.index.request({
          url: "https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login",
          method: "POST",
          data: univerifyInfo,
          success: (res2) => {
            const data = res2.data;
            if (data.success) {
              resolve(data.phoneNumber);
            } else {
              reject(res2);
            }
          },
          fail: (err) => {
            reject(res);
          }
        });
      });
    }
  }
});
exports.store = store;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
