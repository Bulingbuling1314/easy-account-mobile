<template>
	<view>
		<!-- 普通弹窗 -->
		<uni-popup background-color="#fff" @change="change" ref='message' borderRadius='10px 10px 10px 10px'>
			<view class="popup-content">
				<slot></slot>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	/**
	 * @description u-link是一个外部网页超链接组件，在小程序内打开内部web-view组件或复制url，在app内打开外部浏览器，在h5端打开新网页
	 * @property {String} href 点击后打开的外部网页url，小程序中必须以https://开头
	 * @property {String} text 显示的文字
	 * @property {Boolean} inWhiteList 是否在小程序白名单中，如果在的话，在小程序端会直接打开内置web-view，否则会只会复制url，提示在外部打开
	 * @example * <u-link href="https://ext.dcloud.net.cn" text="https://ext.dcloud.net.cn" :inWhiteList="true"></u-link>
	 */
	export default {
		name: 'f-message',
		props: {
			type: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			inWhiteList: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			open() {
				this.$refs.message.open()
			}

		}
	}
</script>

<style scoped>
	.popup-content {

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
		border-radius: 20rpx;
		gap: 20rpx;
	}
</style>