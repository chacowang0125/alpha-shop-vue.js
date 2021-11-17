<template>
	<div class="btn-panel d-flex justify-content-between align-items-center ">
    <button class="btn previous-btn" disabled>
      上一步
    </button>
    <button class="btn next-btn">
			下一步
		</button>
</div>
</template>

<style scoped>
.btn-panel {
	width: 100%;
	margin: 48px 0;
	padding: 24px 0;
	border-top: 2px solid #e6e6eb;
}
.previous-btn::before{
	content: "\2190";
}

.next-btn {
	width: 174px;
	height: 46px;
	color: #fff;
	border-radius: 8px;
	background-color: #f67599;
}
.next-btn::after {
	content: "\2192"
}
</style>