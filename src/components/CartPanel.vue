<template>
	<div class="cart-panel">
    <div class="cart-content">
      <h4 class="cart-title font-weight-bold">購物籃</h4>
      <div class="product-list">
        <div class="product-card mb-4 d-flex" v-for="item in items" :key="item.id">
          <div class="product-img">
            <img :src="item.image" alt="">
          </div>
          <div class="product-content ml-3">
            <div class="product-name mb-3">{{item.name}}</div>
            <div class="product-quantity d-flex justify-content-between">
              <div class="product-quantity-circle" @click.stop.prevent="minusQuantity(item.id)">-</div>
              <div class="product-quantity-num">{{item.quantity}}</div>
              <div class="product-quantity-circle" @click.stop.prevent="addQuantity(item.id)">+</div>
            </div>
            <div class="product-price product-price-1 font-weight-bold">${{item.price | priceWithComma}}</div>
          </div>
        </div>
      </div>
      <div class="cart-delivery-info d-flex justify-content-between align-items-end mb-4">
        <div class="delivery-fee">運費</div>
        <div class="delivery-fee-price font-weight-bold">{{ deliveryMethod === 'original'? '免費':'$500'}}</div>
      </div>
      <div class="cart-total-info d-flex justify-content-between align-items-end">
        <div class="total-title">小計</div>
        <div class="total-price font-weight-bold">${{ Number(totalAmount + deliveryFee) | priceWithComma}}</div>
      </div>
    </div>
</div>
</template>

<style scoped>
.cart-panel {
	margin: 70px 0;
}

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

<script>
const productData = {
	products:[
    {
      id: 1,
      name: "破壞補丁修身牛仔褲",
      quantity: 1,
      price: 3999,
      image: "https://i.ibb.co/ctPtV2y/Block.png",
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      quantity: 1,
      price: 1299,
      image: "https://i.ibb.co/n0FL23t/Photo.png", //bug: 使用public圖片，相對路徑
    }]
  }

export default({
	name: 'CartPanel',
	props: {
		deliveryMethod: {
			tyep: String,
		}
	},
	data() {
		return {
			items: [],
			deliveryFee: 0,
			totalAmount: 5298
		}
	},
	methods: {
		fetchData() {
			this.items = productData.products
		},
		minusQuantity(id) {
			this.items = this.items.map( item => {
				if( item.id === id && item.quantity > 0){
					this.totalAmount = this.totalAmount - item.price
					return {
						...item,
						quantity: item.quantity - 1,
					}
				} else {
					return { ...item }
				}
			})
		},
		addQuantity(id) {
			this.items = this.items.map( item => {
				if( item.id === id ){
					this.totalAmount = this.totalAmount + item.price
					return {
						...item,
						quantity: item.quantity + 1
					}
				} else {
					return { ...item }
				}
			})
		}
	},
	created() {
		this.fetchData()
	},
	filters: {
		priceWithComma(price) {
			return new Intl.NumberFormat().format(price)
		}
	},
	watch: {
		deliveryMethod: {
			handler: function () {
				if(this.deliveryMethod === 'original'){
					return this.deliveryFee = 0
				} else {
					return this.deliveryFee = 500
				}
			}
		}
	}
})
</script>

