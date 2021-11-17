<template>
	<div class="cart-panel">
    <div class="cart-content">
      <h4 class="cart-title font-weight-bold">購物籃</h4>
      <div class="product-list">
        <div class="product-card mb-4 d-flex">
          <div class="product-img">
            <img src="../../public/img/product-img-1.png" alt="">
          </div>
          <div class="product-content ml-3">
            <div class="product-name mb-3">破壞補丁修身牛仔褲</div>
            <div class="product-quantity d-flex justify-content-between">
              <div class="product-quantity-circle product-quantity__minus">-</div>
              <div class="product-quantity-num">1</div>
              <div class="product-quantity-circle product-quantity__plus">+</div>
            </div>
            <div class="product-price product-price-1 font-weight-bold">$3999</div>
          </div>
        </div>
        <div class="product-card d-flex">
          <div class="product-img">
            <img src="../../public/img/product-img-2.png" alt="">
          </div>
          <div class="product-content ml-3">
            <div class="product-name mb-3">刷色直筒牛仔褲</div>
            <div class="product-quantity d-flex justify-content-between">
              <div class="product-quantity-circle product-quantity__minus">-</div>
              <div class="product-quantity-num">1</div>
              <div class="product-quantity-circle product-quantity__plus">+</div>
            </div>
            <div class="product-price product-price-2 font-weight-bold">$1299</div>
          </div>
        </div>
      </div>
      <div class="cart-delivery-info d-flex justify-content-between align-items-end mb-4">
        <div class="delivery-fee">運費</div>
        <div class="delivery-fee-price font-weight-bold">免費</div>
      </div>
      <div class="cart-total-info d-flex justify-content-between align-items-end">
        <div class="total-title">小計</div>
        <div class="total-price font-weight-bold">$5298</div>
      </div>
    </div>
</div>
</template>

<style scoped>
	.cart-content{
		width: 100%;
    padding: 2rem 1.5rem;
    margin: 1.5rem auto;
    border: 1px solid #f0f0f5;
    border-radius: 0.5rem;
	}

	.product-list {
		margin: 2rem 0;
	}

	.product-card {
		position: relative
	}

	.product-img {
		width: 100px;
		height: 100px
	}

	.product-quantity {
		width: 110px
	}
	.product-quantity-circle {
		position: relative;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #f0f0f5;
    text-align: center;
    cursor: pointer;
	}
	.product-price {
		position: absolute;
		top: 0;
		right: 1rem;
	}

	.cart-delivery-info , .cart-total-info{
		height: 40px;
		border-top: 1px solid #f0f0f5;
	}
</style>