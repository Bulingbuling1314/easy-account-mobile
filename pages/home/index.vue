<template>
	<view class="home ">
		<view class="home-nav">
			<image src="/static/avatar.png" mode=""></image>
			<text>风吹过后的夏天</text>
		</view>
		<view class="home-income-expense">
			<text>本月支出(元)</text>
			<text>100.99</text>
			<view>
				<text>本月支出(元):</text>
				<text>100.99</text>
			</view>
		</view>

		<view class="home-account-detail">
			<view class="date-money">
				<view class="date">
					5月1日 <text>周六</text>
				</view>
				<view class="money">
					<text>支出：100.99</text>
					<text>收入：188.00</text>
				</view>
			</view>
			<uni-swipe-action>
				<view class="outcome-box">

					<uni-swipe-action-item :threshold='10' :right-options="options2" :show="true" :auto-close="true"
						@click="bindClick">
						<view class="outcome-item">
							<view>
								<image src="/static/icons/free-xx-chosed.png" mode=""></image>
								<text class="outcome-item-title">红包转账</text>
							</view>
							<text class="outcome-item-value">
								188.0
							</text>
						</view>
					</uni-swipe-action-item>



					<uni-swipe-action-item :right-options="options2" :show="true" :auto-close="true" @click="bindClick">
						<view class="outcome-item">
							<view>
								<image src="/static/icons/free-xx-chosed.png" mode=""></image>
								<text class="outcome-item-title">红包转账</text>
							</view>
							<text class="outcome-item-value">
								188.0
							</text>
						</view>
					</uni-swipe-action-item>
					<uni-swipe-action-item :right-options="options2" :show="true" :auto-close="true" @click="bindClick">
						<view class="outcome-item">
							<view>
								<image src="/static/icons/free-xx-chosed.png" mode=""></image>
								<text class="outcome-item-title">红包转账</text>
							</view>
							<text class="outcome-item-value">
								188.0
							</text>
						</view>
					</uni-swipe-action-item>
					<uni-swipe-action-item :right-options="options2" :show="true" :auto-close="true" @click="bindClick">
						<view class="outcome-item">
							<view>
								<image src="/static/icons/free-xx-chosed.png" mode=""></image>
								<text class="outcome-item-title">红包转账</text>
							</view>
							<text class="outcome-item-value">
								188.0
							</text>
						</view>
					</uni-swipe-action-item>
				</view>
			</uni-swipe-action>
		</view>
	</view>
	<CustomTabBar></CustomTabBar>
</template>

<script>
	import store from '@/store/index.js';
	// 组件命名符合规范不需要引入
	import CustomTabBar from '@/components/CustomTabBar.vue';
	export default {
		components: {
			CustomTabBar
		},
		data() {
			return {
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#F56C6C'
					}
				}],
			}
		},
		onLoad() {

			if (!this.$store.state.hasLogin) {
				uni.redirectTo({
					url: '/pages/login/index'
				})
			}
		},
		methods: {
			bindClick(e) {
				console.log(e, '点击的按钮')
			}
		}
	}
</script>

<style lang='scss' scoped>
	.home {
		width: 100%;
		height: 100vh;
		background: $uni-bg-color;
		padding: 0 32rpx;
		box-sizing: border-box;
		padding-top: 14rpx;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.home-nav {
			box-sizing: border-box;
			height: 60rpx;
			display: flex;
			align-items: center;
			gap: 16rpx;
			margin-bottom: 32rpx;

			image {
				width: 60rpx;
				height: 60rpx;
			}

			text {
				font-family: PingFang SC;
				font-size: 32rpx;
				font-weight: 400;
				line-height: 44.8rpx;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;
				color: #fff;
			}
		}

		.home-income-expense {
			display: flex;
			flex-direction: column;
			margin-bottom: 32rpx;

			text:first-child {
				font-family: PingFang SC;
				font-size: 20rpx;
				font-weight: 400;
				line-height: 28rpx;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;
				color: #fff;

			}

			text:nth-of-type(2) {
				font-family: San Francisco Display;
				font-size: 72rpx;
				font-weight: 500;
				line-height: 84.8rpx;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;

				color: #fff;
				margin-top: 14rpx;
				margin-bottom: 40rpx;
			}

			view {
				display: flex;
				align-items: center;

				text:first-child {
					font-family: PingFang SC;
					font-size: 20rpx;
					font-weight: 400;
					line-height: 28rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #fff;

				}

				text:nth-of-type(2) {
					font-family: San Francisco Display;
					font-size: 32rpx;
					font-weight: 500;
					line-height: 38px;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;

					color: #fff;
					margin: 0;

				}
			}
		}

		.home-account-detail {
			background: #fff;
			border-radius: 32rpx;
			padding: 32rpx 0;
			flex: 1;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;

			.date-money {
				padding: 0 32rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 28rpx;
				border-bottom: 2rpx solid #F1F1F1;

				.date {
					font-family: PingFang SC;
					font-size: 36rpx;
					font-weight: 400;
					line-height: 50.4rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #333;

					text {
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
						line-height: 34rpx;
						text-align: left;
						text-underline-position: from-font;
						text-decoration-skip-ink: none;
					}
				}

				.money {
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
					line-height: 34rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #999;
					display: flex;
					align-items: center;
					gap: 18rpx;
				}
			}

			.outcome-box {
				/* #ifndef MP-WEIXIN */
				height: 55vh;
				/* #endif */

				/* #ifdef MP-WEIXIN */

				height: 50vh;
				/* #endif */
				width: 100%;
				padding-bottom: 40rpx;
				box-sizing: border-box;
				overflow-y: auto;

				.outcome-item {
					padding: 20rpx 32rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: relative;

					&::after {
						content: '';
						width: 560rpx;
						height: 2rpx;
						position: absolute;
						right: 32rpx;
						bottom: 0;
						background-color: #F1F1F1;
					}

					image {
						width: 60rpx;
						height: 60rpx;
					}

					view {
						display: flex;
						align-items: center;
						gap: 16rpx
					}

					.outcome-item-title {
						font-family: PingFang SC;
						font-size: 16px;
						font-weight: 400;
						line-height: 44.8rpx;
						text-align: left;
						text-underline-position: from-font;
						text-decoration-skip-ink: none;
						color: #333
					}

					.outcome-item-value {
						font-family: San Francisco Display;
						font-size: 32rpx;
						font-weight: 500;
						line-height: 38rpx;
						text-align: left;
						text-underline-position: from-font;
						text-decoration-skip-ink: none;

						color: #333
					}
				}
			}
		}
	}
</style>