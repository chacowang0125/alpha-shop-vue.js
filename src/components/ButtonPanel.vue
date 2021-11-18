<template>
	<div class="btn-panel">
    <button class="btn previous-btn" v-show="step !== 1">
      ← 上一步
    </button>
    <button class="btn next-btn">
			{{ nextButtonContent }}
		</button>
</div>
</template>

<style scoped>
.btn-panel {
	position: relative;
	width: 100%;
	height: 100px;
	margin: 48px 0;
	border-top: 2px solid #e6e6eb;
}

.previous-btn{
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}

.next-btn {
	position: absolute;
	width: 174px;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	color: #fff;
	border-radius: 8px;
	background-color: #f67599;
}

</style>

<script>

export default({
	name: 'ButtonPanel',
	props: {
		step:{
			type: Number,
			required: true
		}
	},
	data() {
		return {
			nextButtonContent: this.step === 3? '確認下單' : '下一步 ➝'
		}
	},

})
</script>
