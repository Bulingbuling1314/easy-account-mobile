"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "toast"
    };
  },
  methods: {
    toast1Tap: function() {
      common_vendor.index.showToast({
        title: "默认"
      });
    },
    toast2Tap: function() {
      common_vendor.index.showToast({
        title: "duration 3000",
        duration: 3e3
      });
    },
    toast3Tap: function() {
      common_vendor.index.showToast({
        title: "loading",
        icon: "loading",
        duration: 5e3
      });
    },
    toast4Tap: function() {
      common_vendor.index.showToast({
        title: "logo",
        image: "../../../static/uni.png"
      });
    },
    hideToast: function() {
      common_vendor.index.hideToast();
    }
  }
};
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  _easycom_page_head2();
}
const _easycom_page_head = () => "../../../components/page-head/page-head.js";
if (!Math) {
  _easycom_page_head();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.title
    }),
    b: common_vendor.o((...args) => $options.toast1Tap && $options.toast1Tap(...args)),
    c: common_vendor.o((...args) => $options.toast2Tap && $options.toast2Tap(...args)),
    d: common_vendor.o((...args) => $options.toast3Tap && $options.toast3Tap(...args)),
    e: common_vendor.o((...args) => $options.toast4Tap && $options.toast4Tap(...args)),
    f: common_vendor.o((...args) => $options.hideToast && $options.hideToast(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/toast/toast.js.map
