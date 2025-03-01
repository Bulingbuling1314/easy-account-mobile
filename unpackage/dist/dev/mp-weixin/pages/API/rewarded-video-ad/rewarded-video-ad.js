"use strict";
const common_vendor = require("../../../common/vendor.js");
const ERROR_CODE = [-5001, -5002, -5003, -5004, -5005, -5006];
const _sfc_main = {
  data() {
    return {
      title: "激励视频广告",
      loading: false,
      loadError: false
    };
  },
  onReady() {
    this.adOption = {
      adUnitId: ""
    };
    this.createAd();
  },
  methods: {
    createAd() {
      var rewardedVideoAd = this.rewardedVideoAd = common_vendor.index.createRewardedVideoAd(this.adOption);
      rewardedVideoAd.onLoad(() => {
        this.loading = false;
        this.loadError = false;
        common_vendor.index.__f__("log", "at pages/API/rewarded-video-ad/rewarded-video-ad.vue:46", "onLoad event");
      });
      rewardedVideoAd.onClose((res) => {
        this.loading = true;
        if (res && res.isEnded) {
          common_vendor.index.__f__("log", "at pages/API/rewarded-video-ad/rewarded-video-ad.vue:53", "onClose " + res.isEnded);
        } else {
          common_vendor.index.__f__("log", "at pages/API/rewarded-video-ad/rewarded-video-ad.vue:56", "onClose " + res.isEnded);
        }
        setTimeout(() => {
          common_vendor.index.showToast({
            title: "激励视频" + (res.isEnded ? "成功" : "未") + "播放完毕",
            duration: 1e4,
            position: "bottom"
          });
        }, 500);
      });
      rewardedVideoAd.onError((err) => {
        this.loading = false;
        if (err.code && ERROR_CODE.indexOf(err.code) !== -1) {
          this.loadError = true;
        }
        common_vendor.index.__f__("log", "at pages/API/rewarded-video-ad/rewarded-video-ad.vue:72", "onError event", err);
      });
      this.loading = true;
    },
    show() {
      const rewardedVideoAd = this.rewardedVideoAd;
      rewardedVideoAd.show().catch(() => {
        rewardedVideoAd.load().then(() => rewardedVideoAd.show()).catch((err) => {
          common_vendor.index.__f__("log", "at pages/API/rewarded-video-ad/rewarded-video-ad.vue:82", "激励视频 广告显示失败", err);
          common_vendor.index.showToast({
            title: err.errMsg || err.message,
            duration: 5e3,
            position: "bottom"
          });
        });
      });
    },
    reloadAd() {
      this.loading = true;
      this.rewardedVideoAd.load();
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
  return common_vendor.e({
    a: common_vendor.p({
      title: $data.title
    }),
    b: !$data.loadError
  }, !$data.loadError ? {
    c: $data.loading,
    d: $data.loading,
    e: common_vendor.o((...args) => $options.show && $options.show(...args))
  } : {}, {
    f: $data.loadError
  }, $data.loadError ? {
    g: $data.loading,
    h: $data.loading,
    i: common_vendor.o((...args) => $options.reloadAd && $options.reloadAd(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/rewarded-video-ad/rewarded-video-ad.js.map
