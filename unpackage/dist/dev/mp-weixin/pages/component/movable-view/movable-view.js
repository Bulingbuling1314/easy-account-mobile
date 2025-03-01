"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      x: 0,
      y: 0,
      scale: 2,
      old: {
        x: 0,
        y: 0,
        scale: 2
      }
    };
  },
  methods: {
    tap: function(e) {
      this.x = this.old.x;
      this.y = this.old.y;
      this.$nextTick(function() {
        this.x = 30;
        this.y = 30;
      });
    },
    tap2() {
      this.scale = this.old.scale;
      this.scale = this.old.scale;
      this.$nextTick(function() {
        this.scale = 3;
      });
    },
    onChange: function(e) {
      this.old.x = e.detail.x;
      this.old.y = e.detail.y;
    },
    onScale: function(e) {
      this.old.scale = e.detail.scale;
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
      title: "movable-view,可拖动视图"
    }),
    b: $data.x,
    c: $data.y,
    d: common_vendor.o((...args) => $options.onChange && $options.onChange(...args)),
    e: common_vendor.o((...args) => $options.tap && $options.tap(...args)),
    f: common_vendor.o((...args) => $options.onScale && $options.onScale(...args)),
    g: $data.scale,
    h: common_vendor.o((...args) => $options.tap2 && $options.tap2(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/component/movable-view/movable-view.js.map
