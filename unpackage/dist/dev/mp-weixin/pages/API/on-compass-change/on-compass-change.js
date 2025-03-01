"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "onCompassChange",
      direction: 0
    };
  },
  onReady: function() {
    common_vendor.index.onCompassChange((res) => {
      this.direction = parseInt(res.direction);
    });
  },
  onUnload() {
    common_vendor.index.stopCompass();
    this.direction = 0;
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
    b: common_assets._imports_0$8,
    c: common_vendor.s("transform: rotate(" + $data.direction + "deg)"),
    d: common_vendor.t($data.direction)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/on-compass-change/on-compass-change.js.map
