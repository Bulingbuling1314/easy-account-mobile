"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "button",
      loading: false
    };
  },
  onLoad() {
    this._timer = null;
  },
  onShow() {
    this.clearTimer();
    this._timer = setTimeout(() => {
      this.loading = true;
    }, 300);
  },
  onUnload() {
    this.clearTimer();
    this.loading = false;
  },
  methods: {
    openTypeError(error) {
      common_vendor.index.__f__("error", "at pages/component/button/button.vue:56", "open-type error:", error);
    },
    clearTimer() {
      if (this._timer != null) {
        clearTimeout(this._timer);
      }
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
    b: $data.loading,
    c: common_vendor.o((...args) => $options.openTypeError && $options.openTypeError(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/component/button/button.js.map
