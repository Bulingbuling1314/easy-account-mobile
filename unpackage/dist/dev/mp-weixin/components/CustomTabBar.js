"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentTab: 0,
      midButton: {
        iconPath: "/static/add.png",
        width: "80px",
        height: "50px"
      },
      items: [
        // 配置你的 tabItem 列表
        {
          pagePath: "/pages/home/index",
          iconPath: "/static/home.png",
          selectedIconPath: "/static/home-active.png",
          text: "首页"
        },
        {
          pagePath: "/pages/statistics/index",
          iconPath: "/static/statics.png",
          selectedIconPath: "/static/statics-active.png",
          text: "统计"
        }
      ]
    };
  },
  computed: {
    leftItems() {
      return this.items.slice(0, Math.floor(this.items.length / 2));
    },
    rightItems() {
      return this.items.slice(Math.floor(this.items.length / 2));
    }
  },
  onMounted() {
    common_vendor.index.__f__("log", "at components/CustomTabBar.vue:67", this.$route.path, "IIIIIIIIII");
  },
  onLoad() {
  },
  methods: {
    getCurrentPageRoute() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const {
        route,
        options
      } = currentPage;
      common_vendor.index.__f__("log", "at components/CustomTabBar.vue:89", "Current Page Route:", route);
      common_vendor.index.__f__("log", "at components/CustomTabBar.vue:90", "Page Options:", options);
      return {
        route,
        options
      };
    },
    switchTab(path) {
      common_vendor.index.redirectTo({
        url: path
      });
    },
    handleMidButtonClick() {
      common_vendor.index.navigateTo({
        url: "/pages/addBill/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.leftItems, (item, index, i0) => {
      var _a, _b;
      return {
        a: item.pagePath === `/${(_a = $options.getCurrentPageRoute()) == null ? void 0 : _a.route}` ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: item.pagePath === `/${(_b = $options.getCurrentPageRoute()) == null ? void 0 : _b.route}` ? 1 : "",
        d: common_vendor.o(($event) => $options.switchTab(item.pagePath), index),
        e: index
      };
    }),
    b: $data.midButton.iconPath,
    c: common_vendor.o((...args) => $options.handleMidButtonClick && $options.handleMidButtonClick(...args)),
    d: common_vendor.f($options.rightItems, (item, index, i0) => {
      var _a, _b;
      return {
        a: item.pagePath === `/${(_a = $options.getCurrentPageRoute()) == null ? void 0 : _a.route}` ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: item.pagePath === `/${(_b = $options.getCurrentPageRoute()) == null ? void 0 : _b.route}` ? 1 : "",
        d: common_vendor.o(($event) => $options.switchTab(item.pagePath), index + $options.leftItems.length),
        e: index + $options.leftItems.length
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6def6a3b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/CustomTabBar.js.map
