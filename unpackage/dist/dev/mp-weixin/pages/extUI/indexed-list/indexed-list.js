"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_airport = require("../../../common/airport.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      list: common_airport.airport.list
    };
  },
  methods: {
    bindClick(e) {
      common_vendor.index.__f__("log", "at pages/extUI/indexed-list/indexed-list.nvue:16", "点击item，返回数据" + JSON.stringify(e));
    }
  }
};
if (!Array) {
  const _easycom_uni_indexed_list2 = common_vendor.resolveComponent("uni-indexed-list");
  _easycom_uni_indexed_list2();
}
const _easycom_uni_indexed_list = () => "../../../uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.js";
if (!Math) {
  _easycom_uni_indexed_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.bindClick),
    b: common_vendor.p({
      options: $data.list,
      ["show-select"]: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/indexed-list/indexed-list.js.map
