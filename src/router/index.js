import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import index from 'components/index'
import product from 'views/product'
import order from 'views/order'
import news from 'views/news'
import my from 'views/user/my'
import customer from 'views/user/customer'

Vue.use(Router)

export default new Router({
  routes: [
  	{
        path: '/index',
        name: '萝卜初行',
        component: index,
        children: [{
                path: 'product',
                name: '萝卜初行-首页',
                component: product,
            },
            {
                path: 'order',
                name: '萝卜初行-订单',
                component: order,
            },
            {
                path: 'news',
                name: '萝卜初行-消息',
                component: news,
            },
            {
                path: 'user/my',
                name: '萝卜初行-我的',
                component: my,
            },
        ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/customer',
      name: 'customer',
      component: customer
    }

  ],
  //mode:"history"
})
