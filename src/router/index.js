import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'root',
    redirect: '/checkout/address'
}, {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    redirect: '/checkout/address',
    children: [{
        path: 'address',
        name: 'address',
        component: () =>
            import ('../components/FormStepOne.vue')
    }, {
        path: 'delivery',
        name: 'delivery',
        component: () =>
            import ('../components/FormStepTwo.vue')
    }, {
        path: 'payment',
        name: 'payment',
        component: () =>
            import ('../components/FormStepThree.vue')
    }]
}, {
    path: '*',
    name: 'not-found',
    component: NotFound
}]

const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes
})

export default router