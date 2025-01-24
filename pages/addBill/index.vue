<template>
	<view class="about ">

		<v-tabs v-model="current" activeColor='#fff' bgColor='transparent' color='#999999' fontSize='40rpx'
			:bold='false' lineHeight='4rpx' lineColor='#FFFFFF' :tabs="tabs" @change="changeTab"></v-tabs>

		<!-- 收入 -->
		<view class="home-account-detail" v-if='current=="0"'>
			<view class="date-money">
				<view class="date">
					账单金额
				</view>
				<view class="money">
					<input placeholder="$0.00" :clearable='false'></input>
				</view>
			</view>
			<uni-swiper-dot class="uni-swiper-dot-box" :info="[1,2]" :current="detailCurrent" mode="dot"
				:dots-styles="dotStyle" field="content">
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item>
						<view class="swiper-item">
							<view class="swiper-item-item" v-for="(i,j) in swipperData" :key='j'
								@click="freeItemChosed(i)">
								<image :src="freeChosedData.text==i.text?i.iconChosed:i.icon" mode=""></image>
								<text>{{i.text}}</text>
							</view>
						</view>

					</swiper-item>
					<swiper-item>
						<view class="swiper-item" style="justify-content: flex-start;">
							<view class="swiper-item-item" v-for="(i,j) in swipperData2" :key='j'
								@click="freeItemChosed(i)">
								<image :src="freeChosedData.text==i.text?i.iconChosed:i.icon" mode=""></image>
								<text>{{i.text}}</text>
							</view>
						</view>

					</swiper-item>
				</swiper>
			</uni-swiper-dot>

			<view class="date-input-box">
				<view class="date-input-content">

					<view class="date-box">

						<uni-datetime-picker :clear-icon='false' :border='false' class="date" type="date"
							v-model="datetimesingle" @change="changeLog" />
					</view>

					<view class="input-box">
						<uni-easyinput :inputBorder='false' placeholder="请输入备注信息..."></uni-easyinput>
					</view>
				</view>
			</view>
		</view>

		<!-- 支出 -->
		<view class="home-account-detail" v-if='current=="1"'>
			<view class="date-money">
				<view class="date">
					账单金额
				</view>
				<view class="money">
					<input placeholder="$0.00" :clearable='false'></input>
				</view>
			</view>
			<uni-swiper-dot class="uni-swiper-dot-box" :info="[1]" :current="detailCurrent" mode="dot"
				:dots-styles="dotStyle" field="content">
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item>
						<view class="swiper-item" style="justify-content: flex-start;gap:45rpx">
							<view class="swiper-item-item" style="width:90rpx" v-for="(i,j) in swipperIncomeData"
								:key='j' @click="freeItemChosed(i)">
								<image :src="freeChosedData.text==i.text?i.iconChosed:i.icon" mode=""></image>
								<text>{{i.text}}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>

			<view class="date-input-box">
				<view class="date-input-content">

					<view class="date-box">

						<uni-datetime-picker :clear-icon='false' :border='false' class="date" type="date"
							v-model="datetimesingle" @change="changeLog" />
					</view>

					<view class="input-box">
						<uni-easyinput :inputBorder='false' placeholder="请输入备注信息..."></uni-easyinput>
					</view>
				</view>
			</view>
		</view>
		<view class="btn-box">
			<button class="button" type="primary" @click="switchBtn(0)">保存</button>
			<button class="button" type="primary" @click="switchBtn(0)">再记一笔</button>
		</view>
	</view>

</template>

<script>
	// 组件命名符合规范不需要引入
	export default {

		data() {
			return {
				datetimesingle: undefined,
				tabs: ['支出', '收入'],
				current: 0,
				detailCurrent: 0,
				swiperDotIndex: 0,
				dotStyle: {
					backgroundColor: '#CCCCCC',
					border: '1px #CCCCCC solid',
					color: '#13C791',
					selectedBackgroundColor: '#13C791',
					selectedBorder: '1px #13C791 solid'
				},

				swipperData: [{
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
					},
				],
				swipperData2: [{
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
					},
				],
				swipperIncomeData: [{
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
					},
				],
				freeChosedData: {}

			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.detailCurrent = e.detail.current
			},
			freeItemChosed(val) {
				this.freeChosedData = val
			},
			changeTab() {
				console.log(this.current)
				this.detailCurrent = 0
			}
		}
	}
</script>

<style lang='scss' scoped>
	.about {
		width: 100%;
		/* #ifdef MP-WEIXIN */
		height: 100vh;

		/* #endif */
		/* #ifndef MP-WEIXIN */
		height: calc(100vh - 88rpx);
		/* #endif */
		background: $uni-bg-color;

		color: #FFFFFF;
		padding: 0 32rpx;
		box-sizing: border-box;
		padding-top: 40rpx;

		.home-account-detail {
			background: #fff;
			border-radius: 32rpx;
			padding: 32rpx 0;
			flex: 1;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			margin-top: 50rpx;


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
					font-size: 36rpx;
					font-weight: 400;
					line-height: 34rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #333;
					display: flex;
					align-items: center;
					gap: 18rpx;

					input {
						text-align: right;

					}

					.uni-input-placeholder {
						text-align: right;
					}
				}
			}


			.date-input-box {
				height: 80rpx;
				width: 100%;
				padding: 8rpx 32rpx;
				box-sizing: border-box;

				.date-input-content {
					border-bottom: 1px solid #F1F1F1;
					height: 80rpx;
					border-top: 2rpx solid #F1F1F1;
					display: flex;
					align-items: center;
					gap: 0rpx;
					width: 100%;

					.date-box {
						width: 220rpx;
						height: 80rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.input-box {
						flex: auto
					}
				}
			}
		}

		.btn-box {
			margin-top: 64rpx;
			height: 82rpx;
			display: flex;
			align-items: center;
			gap: 24rpx;
			justify-content: space-between;

			.button {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: PingFang SC;
				font-size: 32rpx;
				font-weight: 700;
				line-height: 44.8rpx;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;
				color: #fff;
			}

			.button:first-child {
				width: 440rpx;
				background-color: #98C713;
			}

			.button:last-child {
				flex: auto;
				background-color: #999999;
			}
		}
	}

	.swiper-box {
		.swiper-item {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			gap: 56rpx;
			justify-content: space-between;
			align-items: center;
			padding: 32rpx;
			box-sizing: border-box;

			.swiper-item-item {
				display: flex;
				flex-direction: column;
				gap: 8rpx;
				align-items: center;
				max-width: 88rpx;

				text {
					font-family: PingFang SC;
					font-size: 22rpx;
					font-weight: 400;
					line-height: 30.8rpx;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
					color: #999999;
				}

				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
	}

	:deep(.swiper-box) {
		height: 340rpx !important;
	}
</style>