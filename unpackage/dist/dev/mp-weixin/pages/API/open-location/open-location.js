"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "openLocation"
    };
  },
  methods: {
    openLocation: function(e) {
      common_vendor.index.__f__("log", "at pages/API/open-location/open-location.vue:58", e);
      var value = e.detail.value;
      common_vendor.index.openLocation({
        longitude: Number(value.longitude),
        latitude: Number(value.latitude),
        name: value.name,
        address: value.address
      });
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
    b: common_vendor.o((...args) => $options.openLocation && $options.openLocation(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/open-location/open-location.js.map
