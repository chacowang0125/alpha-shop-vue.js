<template>
<div class="form-payment">
  <h2 class="form-payment-title">
		付款資訊
	</h2>
	<form >
		<div class="form-content">
			<div class="form-part card-holder-form">
				<label for="card-holder" class="form-title">持卡人姓名</label>
				<input type="text" id="card-holder" placeholder="John Doe" v-model="userInput.cardholderName">
			</div>
			<div class="form-part card-number-form">
				<label for="card-number" class="form-title">卡號</label>
				<input type="card" id="card-number" maxlength="16" placeholder="1111 2222 3333 4444" v-model="userInput.cardNumber">
			</div>
			<div class="form-part expiration-form">
				<label for="expiration" class="form-title">有效期限</label>
				<input type="text" id="expiration" placeholder="MM/YY" maxlength="5" v-model="userInput.expiration">
			</div>
			<div class="form-part security-code-form">
				<label for="security-code" class="form-title">CVC/CCV</label>
				<input type="tel" id="security-code" placeholder="123" v-model="userInput.securityCode">
			</div>
		</div>
		<div class="btn-panel">
			<router-link :to="{path: '/checkout/delivery'}">
				<button class="btn previous-btn">
				← 上一步
				</button>
			</router-link>
			<button class="btn next-btn" @click.stop.prevent="finishForm()">
			確認下單
			</button>

		</div>
	</form>

</div>
</template>

<style scoped>
/*  */
input {
	width: 100%;
	height: 40px;
	padding: 0.5rem 0.8rem;
	border: 1px solid #4a4a4a;
	border-radius: 4px;
	font-weight: 400;
}

.form-payment-title {
		margin: 24px 0;
}

.form-title{
	font-size: 12px;
	font-weight: 700;
	color: #808080;
}

.form-content{
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1.5rem;
  grid-template-areas:
    "card-holder card-holder card-holder card-holder . ."
    "card-number card-number card-number card-number . ."
    "expiration expiration expiration  security-code security-code security-code";
}
.card-holder-form{
  grid-area: card-holder;
}
.card-number-form{
  grid-area: card-number;
}
.expiration-form{
  grid-area: expiration;
}
.security-code-form{
  grid-area: security-code;
}

/* btn  */
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
import Vue from 'vue'
import VModal from 'vue-js-modal'

export default({
	props: {
		initialUserInput: {
      type: Object,
    },
	},
	data() {
		return {
			userInput: this.initialUserInput,
		}
	},
	methods: {
		finishForm() {
			console.log(this.userInput)
			Vue.use(VModal)
		}
	}
})
</script>
