<template>
	<view class="about ">
		<view class="word-desc">
			记录，
			<br />
			让生活更简单。
		</view>

		<view class="form-box">
			<uni-forms ref="baseForm" :modelValue="baseFormData">
				<uni-forms-item>
					<view class="form-item">
						<view class="form-item-label">
							手机号
						</view>
						<uni-easyinput v-model="baseFormData.name" :inputBorder="false" primaryColor='#98C713'
							placeholder="请输入账号" label='账号' />
					</view>
				</uni-forms-item>
				<uni-forms-item>
					<view class="form-item">
						<view class="form-item-label">
							密码
						</view>
						<uni-easyinput v-model="baseFormData.password" type="password" primaryColor='#98C713'
							:inputBorder="false" placeholder="请输入密码" label='密码' />
					</view>
				</uni-forms-item>
			</uni-forms>
		</view>

		<view class="btn">
			<button class="button" type="primary" @click="toLogin">登录</button>
		</view>
	</view>
	<!-- #ifndef MP-WEIXIN -->
	<f-message ref='message'>
		<image src="/static/message-warn.png" style="width: 28px;height: 28px;" mode=""></image>
		请输入{{(baseFormData.name?"":'账号')||(baseFormData.age?"":'密码')}}
	</f-message>
	<!-- #endif -->

	<!-- #ifdef  MP-WEIXIN -->
	<!-- 需条件编译的代码 -->
	<uni-popup background-color="#fff" @change="change" ref='wxmessage' borderRadius='10px 10px 10px 10px'>
		<view class="popup-content">
			<image src="/static/message-warn.png" style="width: 28px;height: 28px;" mode=""></image>
			请输入{{(baseFormData.name?"":'账号')||(baseFormData.age?"":'密码')}}
		</view>
	</uni-popup>
	<!-- #endif -->
</template>

<script>
	import store from '@/store/index.js';
	// 组件命名符合规范不需要引入
	import fMessageVue from '@/components/f-message/f-message.vue';
	export default {
		components: {
			fMessageVue
		},
		data() {
			return {
				providerList: [],
				version: '',
				baseFormData: {
					name: '',
					password: ''
				}
			}
		},
		onLoad() {

		},
		methods: {
			toLogin() {


				if (!this.baseFormData.name || !this.baseFormData.password) {
					// #ifdef  MP-WEIXIN
					this.$refs.wxmessage.open()
					// #endif

					// #ifndef  MP-WEIXIN
					this.$refs.message.open()
					// #endif
					return
				}

				uni.reLaunch({
					url: '/pages/home/index'
				});

				this.$store.state.hasLogin = true
			}
		}
	}
</script>

<style lang='scss' scoped>
	.popup-content {

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
		border-radius: 20rpx;
		gap: 20rpx;
	}

	.about {
		width: 100%;
		height: 100vh;
		background: $uni-bg-color;
		display: flex;
		flex-direction: column;
		gap: 80rpx;
		justify-content: center;
		font-family: PingFang SC;
		font-size: 60rpx;
		font-weight: 700;
		line-height: 84rpx;
		text-align: left;
		text-underline-position: from-font;
		text-decoration-skip-ink: none;
		color: #FFFFFF;
		padding: 0 32rpx;
		box-sizing: border-box;

		.word-desc {
			padding: 0 32rpx;
			box-sizing: border-box;
		}

		.form-box {
			padding: 0 32rpx;
			box-sizing: border-box;
		}

		.form-item {

			box-sizing: border-box;
			height: 96rpx;
			background: #fff;
			border-radius: 63rpx;
			display: flex;
			align-items: center;
			padding: 0 32rpx;

			.form-item-label {
				font-size: 32rpx;
				font-weight: 400;
				line-height: 44.8rpx;
				color: #333;
				width: 100rpx;
			}
		}

		.btn {
			padding: 0 32rpx;

			.button {
				border-radius: 63rpx;
				background: #98C713;
				height: 96rpx;
				font-family: PingFang SC;
				font-size: 36rpx;
				font-weight: 700;
				line-height: 96rpx;
			}
		}
	}
</style>