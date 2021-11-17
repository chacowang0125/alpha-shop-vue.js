<template>
<div class="form-payment">
  <h2 class="form-payment-title">
		付款資訊
	</h2>
	<form action="submit">
		<div class="form-content">
			<div class="form-part card-holder-form">
				<label for="card-holder" class="form-title">持卡人姓名</label>
				<input type="text" id="card-holder" placeholder="John Doe">
			</div>
			<div class="form-part card-number-form">
				<label for="card-number" class="form-title">卡號</label>
				<input type="card" id="card-number" maxlength="16" placeholder="1111 2222 3333 4444">
			</div>
			<div class="form-part expiration-form">
				<label for="expiration" class="form-title">有效期限</label>
				<input type="text" id="expiration" placeholder="MM/YY" maxlength="5">
			</div>
			<div class="form-part security-code-form">
				<label for="security-code" class="form-title">CVC/CCV</label>
				<input type="tel" id="security-code" placeholder="123">
			</div>
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
</style>