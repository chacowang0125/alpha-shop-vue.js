<template>
<div class="form-delivery">
  <h2 class="form-delivery-title">
		運送方式
	</h2>
	<form action="submit">
		<div class="form-content">
			<div class="form-wrapper form-wrapper__shipping">
        <div class="shipping-selection original mb-4 checked">
          <div class="option"></div>
          <div class="shipping-method shipping-method__standard font-weight-bold">標準運送</div>
          <div class="shipping-price">免費</div>
        </div>
        <div class="shipping-selection express">
          <div class="option"></div>
          <div class="shipping-method shipping-method__express font-weight-bold">DHL 貨運</div>
          <div class="shipping-price shipping-price__express">$500</div>
        </div>
      </div>
		</div>
	</form>
</div>
</template>

<style scoped>
/*  */
.form-delivery-title {
		margin: 24px 0;
}
.shipping-selection {
	position: relative;
	width: 80%;
	height: 60px;
	padding: 1.2rem;
	border: 1px solid #f0f0f5;
	border-radius: 4px;
	display: flex
}
.shipping-selection.checked {
	border: 1px solid #2a2a2a
}

.shipping-selection.checked .option{
	box-shadow: inset 0 0 0 5px #2a2a2a;
}
.option {
  width: 20px;
  height: 20px;
  border: 1px solid #2a2a2a;
  border-radius: 50%;
}

.shipping-method {
  position: absolute;
  top: 0.7rem;
  left: 60px;
  font-size: 14px;
}

.shipping-method::after {
	position: absolute;
  top: 100%;
  left: 0;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
}
.shipping-method__standard::after {
	content: "約3~7個工作天"
}

.shipping-method__express::after {
	content: "48小時內送達"
}

.shipping-price {
	position: absolute;
	top: 0.8rem;
  right: 0.8rem;
  font-size: 12px;
}
</style>
