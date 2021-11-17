<template>
	<div id="stepper-panel" class="stepper-panel">
		<h1 class="stepper-title">結帳</h1>
		<div class="step-control d-flex justify-content-between align-items-center">
			<div class="step step__one d-flex align-items-center checked">
				<div class="circle-container"></div>
				<div class="label-container">寄送地址</div>
				<span class="connect-line"></span>
			</div>
			<div class="step step__two d-flex align-items-center active">
				<div class="circle-container"></div>
				<div class="label-container">運送方式</div>
				<span class="connect-line"></span>
			</div>
			<div class="step step__three d-flex align-items-center">
				<div class="circle-container"></div>
				<div class="label-container">付款資訊</div>
			</div>
		</div>
  </div>
</template>

<style scoped>

	.step-control{
		margin: 48px 0;
	}
	.step{
		position: relative;
	}
	.circle-container {
		display: inline-block;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 1px solid #AFB1BD;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.label-container {
		display: inline;
		margin-left: 0.5rem;
		color: #afb1bd
	}
	.connect-line{
		height: 2px;
		background-color: #afb1bd;
		position:absolute;
		left: 120%;
		right: -100%
	}
	.circle-container::after {
		color: #afb1bd
	}
	.step:nth-child(1) .circle-container::after {
		content: "1";
	}
	.step:nth-child(2) .circle-container::after {
		content: "2";
	}
	.step:nth-child(3) .circle-container::after {
		content: "3";
	}
	.step.active .circle-container , .step.checked .circle-container {
  border: 1px solid #2a2a2a;
	}
	.step.active .label-container , .step.checked .label-container{
		color: #2a2a2a
	}
	.step.active .circle-container::after {
		color: #2a2a2a
	}
	.step.checked .circle-container , .step.checked .connect-line{
		background-color: #2a2a2a;
		/* color: white; */
	}
	.step.checked .circle-container::after{
		content: "✔";
		/* color: white */
	}
</style>