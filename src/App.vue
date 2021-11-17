<template>
  <div id="alpha-shop">
		<Header />
		<main>
			<router-view/>
		</main>
		<Footer v-if="showFooter"/>
  </div>
</template>

<script>
import 'bootstrap'  //js在node_module已經指定預設路徑
import 'bootstrap/dist/css/bootstrap.min.css' //css
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
	components: {
		Header,
		Footer
	},
	data(){
		return{
			showFooter: false
		}
	}
}
</script>
