"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const common_assets = require("../../common/assets.js");
const fMessageVue = () => "../../components/f-message/f-message.js";
const _sfc_main = {
  components: {
    fMessageVue
  },
  data() {
    return {
      providerList: [],
      version: "",
      baseFormData: {
        name: "",
        password: ""
      }
    };
  },
  onLoad() {
  },
  methods: {
    toLogin() {
      if (!this.baseFormData.name || !this.baseFormData.password) {
        this.$refs.wxmessage.open();
        return;
      }
      common_vendor.index.reLaunch({
        url: "/pages/home/index"
      });
      this.$store.state.hasLogin = true;
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_popup2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.baseFormData.name = $event),
    b: common_vendor.p({
      inputBorder: false,
      primaryColor: "#98C713",
      placeholder: "请输入账号",
      label: "账号",
      modelValue: $data.baseFormData.name
    }),
    c: common_vendor.o(($event) => $data.baseFormData.password = $event),
    d: common_vendor.p({
      type: "password",
      primaryColor: "#98C713",
      inputBorder: false,
      placeholder: "请输入密码",
      label: "密码",
      modelValue: $data.baseFormData.password
    }),
    e: common_vendor.sr("baseForm", "d08ef7d4-0"),
    f: common_vendor.p({
      modelValue: $data.baseFormData
    }),
    g: common_vendor.o((...args) => $options.toLogin && $options.toLogin(...args)),
    h: common_assets._imports_0$1,
    i: common_vendor.t(($data.baseFormData.name ? "" : "账号") || ($data.baseFormData.age ? "" : "密码")),
    j: common_vendor.sr("wxmessage", "d08ef7d4-5"),
    k: common_vendor.o(_ctx.change),
    l: common_vendor.p({
      ["background-color"]: "#fff",
      borderRadius: "10px 10px 10px 10px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/index.js.map
