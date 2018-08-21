import Vue from 'vue'
import Router from 'vue-router'
const goodsList = () => import('@/views/goodsList');
const address = () => import('@/views/address');
const cart = () => import('@/views/cart');
const orderConfirm = () => import('@/views/orderConfirm');
const OrderSuccess = () => import('@/views/OrderSuccess');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    },{
      path: '/cart',
      name: 'cart',
      component: cart
    },{
      path: '/address',
      name: 'address',
      component: address
    },{
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: orderConfirm
    },{
      path: '/OrderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    }
  ]
})
