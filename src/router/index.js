import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/pages/Index.vue'
import Detail from '@/components/pages/Detail.vue'
import OrderList from '@/components/pages/orderList.vue'
import Product1 from '@/components/detailComponents/product1.vue'
import Product2 from '@/components/detailComponents/product2.vue'
import Product3 from '@/components/detailComponents/product3.vue'
import Product4 from '@/components/detailComponents/product4.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Index},
  {path: '/orderList', component: OrderList},
  {
    path: '/detail',
    component: Detail,
    redirect: '/detail/pro1',
    children: [
      {
        path: 'pro1',
        component: Product1
      },
      {
        path: 'pro2',
        component: Product2
      },
      {
        path: 'pro3',
        component: Product3
      },
      {
        path: 'pro4',
        component: Product4
      }
    ]
  }
]

const router = new VueRouter({
  routes: routes
})

export default router
