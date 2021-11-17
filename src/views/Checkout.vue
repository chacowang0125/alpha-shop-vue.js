<template>
	<div id="checkout">
		<div class="container d-flex">
			<div class="web-left w-50 mr-5">
				<StepperPanel />
				<Address />
			</div>
			<div class="web-right w-50">
				<CartPanel />
			</div>
		</div>
	</div>
</template>

<script>
import StepperPanel from '../components/StepperPanel.vue'
import Address from '../components/FormStepOne.vue'
import CartPanel from '../components/CartPanel.vue'

export default ({
	name: 'Checkout',
	components:{
		StepperPanel,
		Address,
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