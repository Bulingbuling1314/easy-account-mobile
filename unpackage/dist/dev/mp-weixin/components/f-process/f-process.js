"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "f-process",
  props: {
    color: {
      type: String,
      default: "#98C713"
    },
    num: {
      type: String,
      default: "10"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.color,
    b: $props.num + "%"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-29c1741e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/f-process/f-process.js.map
