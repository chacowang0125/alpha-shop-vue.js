<template>
	<div id="checkout">
		<div class="container d-flex">
			<div class="web-left w-50 mr-5">
				<StepperPanel :step = "step"/>
				<router-view />
				<ButtonPanel :step = "step"/>
			</div>
			<div class="web-right w-50 ml-5">
				<CartPanel />
			</div>
		</div>
	</div>
</template>

<style scoped>
#checkout{
	margin-top: 60px
}
.container{
	width: 90%;
	height: 100%;
	margin: 0 auto;
}
</style>

<script>
import StepperPanel from '../components/StepperPanel.vue'
import CartPanel from '../components/CartPanel.vue'
import ButtonPanel from '../components/ButtonPanel.vue'

export default ({
	name: 'Checkout',
	components:{
		StepperPanel,
		ButtonPanel,
		CartPanel
	},
	data() {
		return {
			step : 3,
			userInput: {
				id: 0,
				name: '',
				gender: '',
				tel: '',
				email: '',
				region: '',
				address: '',
				deliveryMethod: '',
				cardholderName: '',
				cardNumber: '',
				expiration: '',
				securityCode: '',
			}
			}
	}
})
</script>

