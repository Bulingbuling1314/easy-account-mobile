"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_card2 + _easycom_uni_section2)();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      ["is-shadow"]: false,
      ["is-full"]: true
    }),
    b: common_vendor.p({
      title: ".uni-h1",
      type: "line"
    }),
    c: common_vendor.p({
      title: ".uni-h2",
      type: "line"
    }),
    d: common_vendor.p({
      title: ".uni-h3",
      type: "line"
    }),
    e: common_vendor.p({
      title: ".uni-h4",
      type: "line"
    }),
    f: common_vendor.p({
      title: ".uni-h5",
      type: "line"
    }),
    g: common_vendor.p({
      title: ".uni-h6",
      type: "line"
    }),
    h: common_vendor.p({
      title: ".uni-subtitle",
      type: "line"
    }),
    i: common_vendor.p({
      title: ".uni-body",
      type: "line"
    }),
    j: common_vendor.p({
      title: ".uni-caption",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/font/font.js.map
