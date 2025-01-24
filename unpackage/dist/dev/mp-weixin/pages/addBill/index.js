"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      datetimesingle: void 0,
      tabs: ["支出", "收入"],
      current: 0,
      detailCurrent: 0,
      swiperDotIndex: 0,
      dotStyle: {
        backgroundColor: "#CCCCCC",
        border: "1px #CCCCCC solid",
        color: "#13C791",
        selectedBackgroundColor: "#13C791",
        selectedBorder: "1px #13C791 solid"
      },
      swipperData: [
        {
          icon: "/static/icons/free-zc.png",
          iconChosed: "/static/icons/free-zc-chosed.png",
          text: "早午晚餐"
        },
        {
          icon: "/static/icons/free-yl.png",
          iconChosed: "/static/icons/free-yl-chosed.png",
          text: "医疗"
        },
        {
          icon: "/static/icons/free-jt.png",
          iconChosed: "/static/icons/free-jt-chosed.png",
          text: "出行交通"
        },
        {
          icon: "/static/icons/free-zf.png",
          iconChosed: "/static/icons/free-zf-chosed.png",
          text: "住房"
        },
        {
          icon: "/static/icons/free-yj.png",
          iconChosed: "/static/icons/free-yj-chosed.png",
          text: "零食烟酒"
        },
        {
          icon: "/static/icons/free-xx.png",
          iconChosed: "/static/icons/free-xx-chosed.png",
          text: "学习"
        },
        {
          icon: "/static/icons/free-tx.png",
          iconChosed: "/static/icons/free-tx-chosed.png",
          text: "通讯"
        },
        {
          icon: "/static/icons/free-sj.png",
          iconChosed: "/static/icons/free-sj-chosed.png",
          text: "社交"
        },
        {
          icon: "/static/icons/free-tz.png",
          iconChosed: "/static/icons/free-tz-chosed.png",
          text: "金融投资"
        },
        {
          icon: "/static/icons/free-gw.png",
          iconChosed: "/static/icons/free-gw-chosed.png",
          text: "购物"
        }
      ],
      swipperData2: [
        {
          icon: "/static/icons/free-yule.png",
          iconChosed: "/static/icons/free-yule-chosed.png",
          text: "娱乐"
        },
        {
          icon: "/static/icons/free-wj.png",
          iconChosed: "/static/icons/free-wj-chosed.png",
          text: "外借"
        },
        {
          icon: "/static/icons/free-qt.png",
          iconChosed: "/static/icons/free-qt-chosed.png",
          text: "其他支出"
        }
      ],
      swipperIncomeData: [
        {
          icon: "/static/icons/income-gz.png",
          iconChosed: "/static/icons/income-gz-chosed.png",
          text: "工资"
        },
        {
          icon: "/static/icons/income-jj.png",
          iconChosed: "/static/icons/income-jj-chosed.png",
          text: "奖金"
        },
        {
          icon: "/static/icons/income-lx.png",
          iconChosed: "/static/icons/income-lx-chosed.png",
          text: "利息"
        },
        {
          icon: "/static/icons/income-tz.png",
          iconChosed: "/static/icons/income-tz-chosed.png",
          text: "投资"
        },
        {
          icon: "/static/icons/income-jz.png",
          iconChosed: "/static/icons/income-jz-chosed.png",
          text: "兼职"
        },
        {
          icon: "/static/icons/income-hb.png",
          iconChosed: "/static/icons/income-hb-chosed.png",
          text: "红包转账"
        },
        {
          icon: "/static/icons/income-jr.png",
          iconChosed: "/static/icons/income-jr-chosed.png",
          text: "借入"
        },
        {
          icon: "/static/icons/income-qt.png",
          iconChosed: "/static/icons/income-qt-chosed.png",
          text: "其他收入"
        }
      ],
      freeChosedData: {}
    };
  },
  onLoad() {
  },
  methods: {
    change(e) {
      this.detailCurrent = e.detail.current;
    },
    freeItemChosed(val) {
      this.freeChosedData = val;
    },
    changeTab() {
      common_vendor.index.__f__("log", "at pages/addBill/index.vue:249", this.current);
      this.detailCurrent = 0;
    }
  }
};
if (!Array) {
  const _easycom_v_tabs2 = common_vendor.resolveComponent("v-tabs");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_v_tabs2 + _easycom_uni_swiper_dot2 + _easycom_uni_datetime_picker2 + _easycom_uni_easyinput2)();
}
const _easycom_v_tabs = () => "../../uni_modules/v-tabs/components/v-tabs/v-tabs.js";
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_v_tabs + _easycom_uni_swiper_dot + _easycom_uni_datetime_picker + _easycom_uni_easyinput)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changeTab),
    b: common_vendor.o(($event) => $data.current = $event),
    c: common_vendor.p({
      activeColor: "#fff",
      bgColor: "transparent",
      color: "#999999",
      fontSize: "40rpx",
      bold: false,
      lineHeight: "4rpx",
      lineColor: "#FFFFFF",
      tabs: $data.tabs,
      modelValue: $data.current
    }),
    d: $data.current == "0"
  }, $data.current == "0" ? {
    e: common_vendor.f($data.swipperData, (i, j, i0) => {
      return {
        a: $data.freeChosedData.text == i.text ? i.iconChosed : i.icon,
        b: common_vendor.t(i.text),
        c: j,
        d: common_vendor.o(($event) => $options.freeItemChosed(i), j)
      };
    }),
    f: common_vendor.f($data.swipperData2, (i, j, i0) => {
      return {
        a: $data.freeChosedData.text == i.text ? i.iconChosed : i.icon,
        b: common_vendor.t(i.text),
        c: j,
        d: common_vendor.o(($event) => $options.freeItemChosed(i), j)
      };
    }),
    g: common_vendor.o((...args) => $options.change && $options.change(...args)),
    h: $data.swiperDotIndex,
    i: common_vendor.p({
      info: [1, 2],
      current: $data.detailCurrent,
      mode: "dot",
      ["dots-styles"]: $data.dotStyle,
      field: "content"
    }),
    j: common_vendor.o(_ctx.changeLog),
    k: common_vendor.o(($event) => $data.datetimesingle = $event),
    l: common_vendor.p({
      ["clear-icon"]: false,
      border: false,
      type: "date",
      modelValue: $data.datetimesingle
    }),
    m: common_vendor.p({
      inputBorder: false,
      placeholder: "请输入备注信息..."
    })
  } : {}, {
    n: $data.current == "1"
  }, $data.current == "1" ? {
    o: common_vendor.f($data.swipperIncomeData, (i, j, i0) => {
      return {
        a: $data.freeChosedData.text == i.text ? i.iconChosed : i.icon,
        b: common_vendor.t(i.text),
        c: j,
        d: common_vendor.o(($event) => $options.freeItemChosed(i), j)
      };
    }),
    p: common_vendor.o((...args) => $options.change && $options.change(...args)),
    q: $data.swiperDotIndex,
    r: common_vendor.p({
      info: [1],
      current: $data.detailCurrent,
      mode: "dot",
      ["dots-styles"]: $data.dotStyle,
      field: "content"
    }),
    s: common_vendor.o(_ctx.changeLog),
    t: common_vendor.o(($event) => $data.datetimesingle = $event),
    v: common_vendor.p({
      ["clear-icon"]: false,
      border: false,
      type: "date",
      modelValue: $data.datetimesingle
    }),
    w: common_vendor.p({
      inputBorder: false,
      placeholder: "请输入备注信息..."
    })
  } : {}, {
    x: common_vendor.o(($event) => _ctx.switchBtn(0)),
    y: common_vendor.o(($event) => _ctx.switchBtn(0))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6ad80618"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/addBill/index.js.map
