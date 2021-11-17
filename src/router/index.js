import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'root',
        redirect: '/checkout'
    }, {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    }, {
        path: '/checkout/address',
        name: 'checkout-address',
        component: Checkout
    }, {
        path: '/checkout/delivery',
        name: 'checkout-delivery',
        component: Checkout
    }, {
        path: '/checkout/payment',
        name: 'checkout-delivery',
        component: Checkout
    },
    {
        path: '*',
        name: 'not-found',
        component: NotFound
    }
]

const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes
})

export default router