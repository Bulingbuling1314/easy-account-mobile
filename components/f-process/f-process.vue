<template>
	<view class="process-box">

		<view class="process-bar" :style="{'background':color,'width':num+'%'}"></view>
	</view>
</template>

<script>
	export default {
		name: 'f-process',
		props: {
			color: {
				type: String,
				default: '#98C713'
			},
			num: {
				type: String,
				default: '10'
			},
		},
	}
</script>

<style scoped>
	.process-box {
		width: 100%;
		height: 8rpx;
		background: #F1F1F1;
		border-radius: 4rpx;
		position: relative;


	}

	.process-bar {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 20px;
		border-radius: 4rpx;
		background: red;
	}
</style>