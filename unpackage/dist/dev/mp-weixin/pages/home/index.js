"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const common_assets = require("../../common/assets.js");
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  components: {
    CustomTabBar
  },
  data() {
    return {
      options2: [{
        text: "删除",
        style: {
          backgroundColor: "#F56C6C"
        }
      }]
    };
  },
  onLoad() {
    if (!this.$store.state.hasLogin) {
      common_vendor.index.redirectTo({
        url: "/pages/login/index"
      });
    }
  },
  methods: {
    bindClick(e) {
      common_vendor.index.__f__("log", "at pages/home/index.vue:112", e, "点击的按钮");
    }
  }
};
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _component_CustomTabBar = common_vendor.resolveComponent("CustomTabBar");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _component_CustomTabBar)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.o($options.bindClick),
    d: common_vendor.p({
      threshold: 10,
      ["right-options"]: $data.options2,
      show: true,
      ["auto-close"]: true
    }),
    e: common_assets._imports_1,
    f: common_vendor.o($options.bindClick),
    g: common_vendor.p({
      ["right-options"]: $data.options2,
      show: true,
      ["auto-close"]: true
    }),
    h: common_assets._imports_1,
    i: common_vendor.o($options.bindClick),
    j: common_vendor.p({
      ["right-options"]: $data.options2,
      show: true,
      ["auto-close"]: true
    }),
    k: common_assets._imports_1,
    l: common_vendor.o($options.bindClick),
    m: common_vendor.p({
      ["right-options"]: $data.options2,
      show: true,
      ["auto-close"]: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4978fed5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/index.js.map
