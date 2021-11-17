<template>
	<div id="checkout">
		<div class="container d-flex">
			<div class="web-left w-50 mr-5">
				<StepperPanel />
				<!-- <Address /> -->
				<!-- <Delivery /> -->
				<Paymant />
				<ButtonPanel />
			</div>
			<div class="web-right w-50">
				<CartPanel />
			</div>
		</div>
	</div>
</template>

<script>
import StepperPanel from '../components/StepperPanel.vue'
// import Address from '../components/FormStepOne.vue'
// import Delivery from '../components/FormStepTwo.vue'
import Paymant from '../components/FormStepThree.vue'
import CartPanel from '../components/CartPanel.vue'
import ButtonPanel from '../components/ButtonPanel.vue'

export default ({
	name: 'Checkout',
	components:{
		StepperPanel,
		// Address,
		// Delivery,
		Paymant ,
		ButtonPanel,
		CartPanel
	}
})
</script>

<style scoped>
#checkout{
	margin-top: 80px
}
.container{
	width: 90%;
	height: 100%;
	margin: 0 auto;
}
</style>