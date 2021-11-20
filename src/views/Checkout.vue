<template>
	<div id="checkout">
		<div class="container d-flex">
			<div class="web-left w-50 mr-5">
				<StepperPanel :current-route-name="$route.name"/>
				<router-view :initial-user-input="userInput"
				/>
			</div>
			<div class="web-right w-50 ml-5">
				<CartPanel :delivery-method="userInput.deliveryMethod" />
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

const STORAGE_KEY = 'alphashop_key'

export default ({
	name: 'Checkout',
	components:{
		StepperPanel,
		CartPanel
	},
	data() {
		return {
			userInput: {
				id: 0,
				name: '',
				title: '',
				tel: '',
				email: '',
				region: '',
				address: '',
				deliveryMethod: 'original',
				cardholderName: '',
				cardNumber: '',
				expiration: '',
				securityCode: '',
			}
		}
	},
	methods: {
		saveStorage() {
			localStorage.setItem(STORAGE_KEY , JSON.stringify(this.userInput))
		},
		getStorageData() {
			this.userInput = {
				...this.userInput,
				...JSON.parse(localStorage.getItem( STORAGE_KEY ))
			}
		}
	},
	watch: {
		userInput: {
    handler: function () {
      console.log('saveStorage') //測試用
      this.saveStorage()
    },
    deep: true,
		}
	},
	created() {
		this.getStorageData()
	}
})
</script>

