"use strict";
const common_vendor = require("../../common/vendor.js");
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  components: {
    CustomTabBar
  },
  data() {
    return {
      navbarHeight: 0,
      selectValue: 0,
      range: [
        {
          value: 0,
          text: "月账单"
        },
        {
          value: 1,
          text: "年账单"
        }
      ],
      current: 0,
      tabs: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      chosedType: "支出"
    };
  },
  onLoad() {
    const systemInfo = common_vendor.index.getSystemInfoSync();
    this.navbarHeight = systemInfo.statusBarHeight + (systemInfo.platform === "android" ? 48 : 44);
  },
  mounted() {
  },
  methods: {
    selectChange(val) {
      if (val == "0") {
        this.tabs = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
      } else {
        this.tabs = this.getLastYear();
      }
    },
    summaryItemChange(val) {
      this.chosedType = val;
    },
    getLastYear() {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      return [currentYear - 1, currentYear, currentYear + 1];
    }
  }
};
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_v_tabs2 = common_vendor.resolveComponent("v-tabs");
  const _component_CustomTabBar = common_vendor.resolveComponent("CustomTabBar");
  (_easycom_uni_data_select2 + _easycom_v_tabs2 + _component_CustomTabBar)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_v_tabs = () => "../../uni_modules/v-tabs/components/v-tabs/v-tabs.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_v_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.selectChange),
    b: common_vendor.o(($event) => $data.selectValue = $event),
    c: common_vendor.p({
      localdata: $data.range,
      clear: false,
      modelValue: $data.selectValue
    }),
    d: common_vendor.o(_ctx.changeTab),
    e: common_vendor.o(($event) => $data.current = $event),
    f: common_vendor.p({
      activeColor: "#fff",
      bgColor: "transparent",
      color: "#999999",
      fontSize: "36rpx",
      height: "88rpx",
      bold: false,
      lineHeight: "0",
      lineColor: "#FFFFFF",
      tabs: $data.tabs,
      modelValue: $data.current
    }),
    g: common_vendor.o(($event) => $options.summaryItemChange("支出")),
    h: $data.chosedType == "支出" ? 1 : "",
    i: common_vendor.o(($event) => $options.summaryItemChange("收入")),
    j: $data.chosedType == "收入" ? 1 : "",
    k: $data.navbarHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6e199430"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/statistics/index.js.map
