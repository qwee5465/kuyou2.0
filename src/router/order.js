export default [{
  path: '/order/orderBill',
  name: 'orderBill',
  component: (resolve) => {
    require(['@/pages/order/orderBill'], resolve)
  },
  meta: {
    title: '订单',
    keepAlive: true
  }
}, {
  path: '/order/orderRecord',
  name: 'orderRecord',
  component: (resolve) => {
    require(['@/pages/order/orderRecord'], resolve)
  },
  meta: {
    title: '订单记录',
    keepAlive: true
  }
}, {
  path: '/order/outRecord',
  name: 'outRecord',
  component: (resolve) => {
    require(['@/pages/order/outRecord'], resolve)
  },
  meta: {
    title: '出库记录',
    keepAlive: true
  }
}, {
  path: '/order/returnGoodsBill',
  name: 'returnGoodsBill',
  component: (resolve) => {
    require(['@/pages/order/returnGoodsBill'], resolve)
  },
  meta: {
    title: '退货单',
    keepAlive: true
  }
}, {
  path: '/order/returnGoodsRecord',
  name: 'returnGoodsRecord',
  component: (resolve) => {
    require(['@/pages/order/returnGoodsRecord'], resolve)
  },
  meta: {
    title: '退货记录',
    keepAlive: true
  }
}, {
  path: '/order/memoryPrice',
  name: 'memoryPrice',
  component: (resolve) => {
    require(['@/pages/order/memoryPrice'], resolve)
  },
  meta: {
    title: '记忆价查询',
    keepAlive: true
  }
}, {
  path: '/order/queryLog',
  name: 'queryLog',
  component: (resolve) => {
    require(['@/pages/order/queryLog'], resolve)
  },
  meta: {
    title: '日志查询',
    keepAlive: true
  }
}]
