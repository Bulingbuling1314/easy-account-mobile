"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      info: [
        {
          colorClass: "uni-bg-red",
          url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 A"
        },
        {
          colorClass: "uni-bg-green",
          url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 B"
        },
        {
          colorClass: "uni-bg-blue",
          url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 C"
        }
      ],
      dotStyle: [
        {
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(0, 0, 0, .9)",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        },
        {
          backgroundColor: "rgba(255, 90, 95,0.3)",
          border: "1px rgba(255, 90, 95,0.3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(255, 90, 95,0.9)",
          selectedBorder: "1px rgba(255, 90, 95,0.9) solid"
        },
        {
          backgroundColor: "rgba(83, 200, 249,0.3)",
          border: "1px rgba(83, 200, 249,0.3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(83, 200, 249,0.9)",
          selectedBorder: "1px rgba(83, 200, 249,0.9) solid"
        }
      ],
      modeIndex: -1,
      styleIndex: -1,
      current: 0,
      mode: "default",
      dotsStyles: {},
      swiperDotIndex: 0
    };
  },
  onLoad() {
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
    selectStyle(index) {
      this.dotsStyles = this.dotStyle[index];
      this.styleIndex = index;
    },
    selectMode(mode, index) {
      this.mode = mode;
      this.modeIndex = index;
      this.styleIndex = -1;
      this.dotsStyles = this.dotStyle[0];
    },
    clickItem(e) {
      this.swiperDotIndex = e;
    },
    onBanner(index) {
      common_vendor.index.__f__("log", "at pages/extUI/swiper-dot/swiper-dot.nvue:124", 22222, index);
    }
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_swiper_dot2 + _easycom_uni_section2)();
}
const _easycom_uni_swiper_dot = () => "../../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f(3, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.n("swiper-item" + index),
        c: index
      };
    }),
    b: common_vendor.o((...args) => $options.change && $options.change(...args)),
    c: $data.swiperDotIndex,
    d: common_vendor.o($options.clickItem),
    e: common_vendor.p({
      info: $data.info,
      current: $data.current,
      mode: $data.mode,
      ["dots-styles"]: $data.dotsStyles,
      field: "content"
    }),
    f: $data.modeIndex === 0 ? 1 : "",
    g: common_vendor.o(($event) => $options.selectMode("default", 0)),
    h: $data.modeIndex === 1 ? 1 : "",
    i: common_vendor.o(($event) => $options.selectMode("dot", 1)),
    j: $data.modeIndex === 2 ? 1 : "",
    k: common_vendor.o(($event) => $options.selectMode("round", 2)),
    l: $data.modeIndex === 3 ? 1 : "",
    m: common_vendor.o(($event) => $options.selectMode("nav", 3)),
    n: $data.modeIndex === 4 ? 1 : "",
    o: common_vendor.o(($event) => $options.selectMode("indexes", 4)),
    p: common_vendor.p({
      title: "模式选择",
      type: "line"
    }),
    q: $data.mode !== "nav"
  }, $data.mode !== "nav" ? {
    r: common_vendor.f($data.dotStyle, (item, index, i0) => {
      return {
        a: item.selectedBackgroundColor,
        b: item.selectedBorder,
        c: item.backgroundColor,
        d: item.border,
        e: item.backgroundColor,
        f: item.border,
        g: $data.styleIndex === index ? 1 : "",
        h: index,
        i: common_vendor.o(($event) => $options.selectStyle(index), index)
      };
    })
  } : {}, {
    s: $data.mode === "nav"
  }, $data.mode === "nav" ? {
    t: common_vendor.f($data.dotStyle, (item, index, i0) => {
      return {
        a: item.color,
        b: $data.styleIndex === index ? 1 : "",
        c: index,
        d: item.selectedBackgroundColor,
        e: common_vendor.o(($event) => $options.selectStyle(index), index)
      };
    })
  } : {}, {
    v: common_vendor.p({
      title: "颜色样式选择",
      type: "line"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/swiper-dot/swiper-dot.js.map
