"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "f-message",
  props: {
    type: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    inWhiteList: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(e) {
      common_vendor.index.__f__("log", "at components/f-message/f-message.vue:38", "当前模式：" + e.type + ",状态：" + e.show);
    },
    open() {
      this.$refs.message.open();
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("message", "274d94a0-0"),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      ["background-color"]: "#fff",
      borderRadius: "10px 10px 10px 10px"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-274d94a0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/f-message/f-message.js.map
