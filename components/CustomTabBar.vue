<!-- components/CustomTabBar.vue -->
<template>
	<view class="custom-tab-bar">
		<!-- 左侧按钮列表 -->
		<block v-for="(item, index) in leftItems" :key="index">
			<view class="tab-item" @click="switchTab(item.pagePath)">
				<image
					:src="item.pagePath === `/${getCurrentPageRoute()?.route}` ? item.selectedIconPath : item.iconPath">
				</image>
				<text :class="{ 'active': item.pagePath === `/${getCurrentPageRoute()?.route}` }">{{ item.text }}</text>
			</view>
		</block>

		<!-- 中间按钮 -->
		<view class="mid-button" @click="handleMidButtonClick">
			<image :src="midButton.iconPath"></image>
		</view>

		<!-- 右侧按钮列表 -->
		<block v-for="(item, index) in rightItems" :key="index + leftItems.length">
			<view class="tab-item" @click="switchTab(item.pagePath)">
				<image
					:src="item.pagePath === `/${getCurrentPageRoute()?.route}` ? item.selectedIconPath : item.iconPath">
				</image>
				<text :class="{ 'active': item.pagePath === `/${getCurrentPageRoute()?.route}` }">{{ item.text }}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				midButton: {
					iconPath: '/static/add.png',
					width: '80px',
					height: '50px'
				},
				items: [
					// 配置你的 tabItem 列表
					{
						pagePath: "/pages/home/index",
						iconPath: "/static/home.png",
						selectedIconPath: "/static/home-active.png",
						text: "首页"
					},
					{
						pagePath: "/pages/statistics/index",
						iconPath: "/static/statics.png",
						selectedIconPath: "/static/statics-active.png",
						text: "统计"
					}
				]
			};
		},
		computed: {
			leftItems() {
				return this.items.slice(0, Math.floor(this.items.length / 2));
			},
			rightItems() {
				return this.items.slice(Math.floor(this.items.length / 2));
			}
		},
		onMounted() {
			console.log(this.$route.path, 'IIIIIIIIII')
		},
		onLoad() {},
		methods: {
			getCurrentPageRoute() {
				const pages = getCurrentPages(); // 获取当前页面栈
				const currentPage = pages[pages.length - 1]; // 获取当前页面实例
				// 非微信小程序
				// #ifndef MP-WEIXIN
				const {
					route,
					options
				} = currentPage.$page; // 获取当前页面的路由和参数
				// #endif

				// 微信小程序
				// #ifdef MP-WEIXIN
				const {
					route,
					options
				} = currentPage
				// #endif
				console.log('Current Page Route:', route);
				console.log('Page Options:', options);
				return {
					route,
					options
				}
			},
			switchTab(path) {

				uni.redirectTo({
					url: path
				})
			},
			handleMidButtonClick() {
				// 处理中间按钮点击事件
				uni.navigateTo({
					url: '/pages/addBill/index'
				})
			}
		}
	};
</script>

<style scoped>
	.custom-tab-bar {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #313446;
		padding: 20rpx 0;
		box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
	}

	.tab-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tab-item image {
		width: 48rpx;
		height: 48rpx;
	}

	.tab-item text {
		font-size: 22rpx;
		color: #7A7E83;
	}

	.tab-item .active {
		color: #98C713;
	}

	.mid-button {
		position: absolute;
		bottom: 16rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.mid-button image {
		width: 120rpx;
		height: 120rpx;
	}
</style>