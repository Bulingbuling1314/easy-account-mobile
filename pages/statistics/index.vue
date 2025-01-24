<template>
	<!-- #ifndef MP-WEIXIN -->
	<view class="about ">
	<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="about " :style="{'paddingTop': navbarHeight+'px'}">
		<!-- #endif -->
			<view class="select-type">
				<view class="select">
					<uni-data-select v-model="selectValue" :localdata="range" :clear='false'
						@change="selectChange"></uni-data-select>
				</view>
				<view class="select-item">
					<v-tabs v-model="current" activeColor='#fff' bgColor='transparent' color='#999999' fontSize='36rpx'
						height="88rpx" :bold='false' lineHeight='0' lineColor='#FFFFFF' :tabs="tabs"
						@change="changeTab"></v-tabs>
				</view>
			</view>
			<view class="income-expense-summary">
				<view class="summary-item" @click='summaryItemChange("支出")'
					:class="{chosedSummaryItem:chosedType=='支出'}">
					<view class="summary-item-label">
						本月支出(元)
					</view>
					<view class="summary-item-value">
						无支出
					</view>
				</view>
				<view class="summary-item" @click='summaryItemChange("收入")'
					:class="{chosedSummaryItem:chosedType=='收入'}">
					<view class="summary-item-label">
						本月收入(元)
					</view>
					<view class="summary-item-value">
						无收入
					</view>
				</view>
			</view>


			<view class="main-box">
				<view class="header">
					<text>统计明细</text>
					<view>按日期</view>
				</view>
				<view class="body">
					<view class="body-item" v-for="i in 15" :key='i'>
						<image src="/static/icons/free-zf-chosed.png" mode=""></image>
						<view class="body-item-desc">
							<view class="item-summary">
								<view>
									早午晚餐 <text>200笔 95%</text>
								</view>
								<view>
									5000.99
								</view>
							</view>
							<view class="process">
								<f-process></f-process>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<CustomTabBar></CustomTabBar>
</template>

<script>
	// 组件命名符合规范不需要引入
	import CustomTabBar from '@/components/CustomTabBar.vue';
	export default {
		components: {
			CustomTabBar
		},
		data() {
			return {
				navbarHeight: 0,
				selectValue: 0,
				range: [{
						value: 0,
						text: "月账单"
					},
					{
						value: 1,
						text: "年账单"
					},

				],
				current: 0,
				tabs: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				chosedType: '支出'
			}
		},
		onLoad() {
			const systemInfo = uni.getSystemInfoSync();
			// 对于微信小程序，statusBarHeight是状态栏高度，navigationBarHeight需要自行计算或设定
			this.navbarHeight = systemInfo.statusBarHeight + (systemInfo.platform === 'android' ? 48 :
				44); // 微信小程序中默认的导航栏高度

		},
		mounted() {


		},
		methods: {
			selectChange(val) {
				if (val == '0') {
					this.tabs = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				} else {
					this.tabs = this.getLastYear()
				}
			},
			summaryItemChange(val) {
				this.chosedType = val
			},
			getLastYear() {
				const currentYear = new Date().getFullYear();
				return [currentYear - 1, currentYear, currentYear + 1];
			}
		}
	}
</script>

<style lang='scss' scoped>
	.about {
		width: 100%;
		height: 100vh;
		background: $uni-bg-color;
		display: flex;
		flex-direction: column;
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
		overflow: hidden;

		.select-type {
			/* #ifndef MP-WEIXIN */
			margin-top: 20rpx;
			/* #endif */
			height: 88rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.select {
				width: 200rpx;
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				:deep(.uni-select__input-box) {
					display: flex;
					align-items: center;
					gap: 10rpx;
				}

				:deep(.uni-select__input-text) {
					color: #FFFFFF;
				}

				:deep(.uni-select) {
					border: none;
				}

				:deep(.uni-select__selector) {
					background-color: #313446;
					border: none;
					top: calc(100%) !important;
					box-shadow: 0px 0px 2px #98C713;
				}

				:deep(.uni-popper__arrow_bottom) {
					display: none;
				}
			}

			.select-item {
				width: 75%;

				:deep(.v-tabs__container) {
					gap: 0;
				}
			}
		}

		.income-expense-summary {
			margin-top: 40rpx;
			display: flex;
			gap: 180rpx;

			.summary-item {
				display: flex;
				flex-direction: column;
				gap: 14rpx;

				.summary-item-label {
					font-size: 20rpx;
					font-weight: 400;
					line-height: 28rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #999;
				}

				.summary-item-value {
					font-size: 48rpx;
					font-weight: 500;
					line-height: 56rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #999;
				}
			}

			.chosedSummaryItem {

				.summary-item-label,
				.summary-item-value {

					color: #fff;
				}
			}
		}

		.main-box {
			background: #fff;
			border-radius: 30rpx;
			margin-top: 48rpx;
			/* flex: auto; */
			height: calc(100% - 120rpx);

			.header {

				padding: 26rpx 32rpx;

				display: flex;
				align-items: center;
				justify-content: space-between;

				text {
					font-family: PingFang SC;
					font-size: 36rpx;
					font-weight: 400;
					line-height: 50.4rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #333;
				}

				view {
					width: 140rpx;
					height: 60rpx;

					border-radius: 30rpx;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
					line-height: 34rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #fff;
					background: #98C713;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.body {
				padding: 0 32rpx;
				border-top: 2rpx solid #F1F1F1;
				padding-bottom: 32rpx;
				overflow-y: auto;
				height: calc(100% - 440rpx);

				.body-item {
					padding-top: 20rpx;
					display: flex;
					align-items: center;
					gap: 16rpx;

					image {
						width: 60rpx;
						height: 60rpx;
					}

					.body-item-desc {
						flex: 1;
						display: flex;
						flex-direction: column;
						gap: 8rpx;
						font-family: PingFang SC;
						font-size: 32rpx;
						font-weight: 400;
						line-height: 44.8rpx;
						text-align: left;
						text-underline-position: from-font;
						text-decoration-skip-ink: none;
						color: #333;
						padding-bottom: 20rpx;
						border-bottom: 2rpx solid #F1F1F1;

						.item-summary {
							display: flex;
							align-items: center;
							justify-content: space-between;

							view:first-child {
								display: flex;
								gap: 16rpx;
								align-items: flex-end;

								text {
									font-family: PingFang SC;
									font-size: 22rpx;
									font-weight: 400;
									line-height: 30.8rpx;
									text-align: left;
									text-underline-position: from-font;
									text-decoration-skip-ink: none;
									color: #999;
								}
							}
						}

					}
				}
			}

		}
	}
</style>