"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_util = require("../../../common/util.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "backgroundAudio",
      bgAudioMannager: null,
      dataUrl: "https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3",
      playing: false,
      playTime: 0,
      formatedPlayTime: "00:00:00"
    };
  },
  onLoad: function() {
    this.playing = this.$backgroundAudioData.playing;
    this.playTime = this.$backgroundAudioData.playTime;
    this.formatedPlayTime = this.$backgroundAudioData.formatedPlayTime;
    let bgAudioMannager = common_vendor.index.getBackgroundAudioManager();
    if (!bgAudioMannager.title) {
      bgAudioMannager.title = "致爱丽丝";
    }
    if (!bgAudioMannager.singer) {
      bgAudioMannager.singer = "暂无";
    }
    if (!bgAudioMannager.coverImgUrl) {
      bgAudioMannager.coverImgUrl = "https://web-assets.dcloud.net.cn/unidoc/zh/Alice.jpeg";
    }
    bgAudioMannager.onPlay(() => {
      common_vendor.index.__f__("log", "at pages/API/background-audio/background-audio.vue:68", "开始播放");
      this.$backgroundAudioData.playing = this.playing = true;
    });
    bgAudioMannager.onPause(() => {
      common_vendor.index.__f__("log", "at pages/API/background-audio/background-audio.vue:72", "暂停播放");
      this.$backgroundAudioData.playing = this.playing = false;
    });
    bgAudioMannager.onEnded(() => {
      this.playing = false;
      this.$backgroundAudioData.playing = false;
      this.$backgroundAudioData.playTime = this.playTime = 0;
      this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = common_util.formatTime(0);
    });
    bgAudioMannager.onTimeUpdate((e) => {
      if (Math.floor(bgAudioMannager.currentTime) > Math.floor(this.playTime)) {
        this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = common_util.formatTime(Math.floor(bgAudioMannager.currentTime));
      }
      this.$backgroundAudioData.playTime = this.playTime = bgAudioMannager.currentTime;
    });
    this.bgAudioMannager = bgAudioMannager;
  },
  methods: {
    play: function(res) {
      if (!this.bgAudioMannager.src) {
        this.bgAudioMannager.startTime = this.playTime;
        this.bgAudioMannager.src = this.dataUrl;
      } else {
        this.bgAudioMannager.seek(this.playTime);
        this.bgAudioMannager.play();
      }
    },
    seek: function(e) {
      this.bgAudioMannager.seek(e.detail.value);
    },
    pause: function() {
      this.bgAudioMannager.pause();
    },
    stop: function() {
      this.bgAudioMannager.stop();
      this.$backgroundAudioData.playing = this.playing = false;
      this.$backgroundAudioData.playTime = this.playTime = 0;
      this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = common_util.formatTime(0);
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
    b: common_vendor.t($data.formatedPlayTime),
    c: $data.playTime,
    d: common_vendor.o((...args) => $options.seek && $options.seek(...args)),
    e: $data.playing
  }, $data.playing ? {
    f: common_assets._imports_0$9,
    g: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    h: common_assets._imports_1$1,
    i: common_vendor.o((...args) => $options.pause && $options.pause(...args))
  } : {}, {
    j: !$data.playing
  }, !$data.playing ? {
    k: common_assets._imports_2$1,
    l: common_vendor.o((...args) => $options.play && $options.play(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/background-audio/background-audio.js.map
