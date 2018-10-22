export default [{
  path: '/outStock/orderBill',
  name: 'orderBill',
  component: (resolve) => {
    require(['@/pages/outStock/orderBill'], resolve)
  },
  meta: {
    title: '订单',
    keepAlive: true
  }
}, {
  path: '/outStock/orderRecord',
  name: 'orderRecord',
  component: (resolve) => {
    require(['@/pages/outStock/orderRecord'], resolve)
  },
  meta: {
    title: '订单记录',
    keepAlive: true
  }
}, {
  path: '/outStock/outRecord',
  name: 'outRecord',
  component: (resolve) => {
    require(['@/pages/outStock/outRecord'], resolve)
  },
  meta: {
    title: '出库记录',
    keepAlive: true
  }
}, {
  path: '/outStock/returnGoodsBill',
  name: 'returnGoodsBill',
  component: (resolve) => {
    require(['@/pages/outStock/returnGoodsBill'], resolve)
  },
  meta: {
    title: '退货单',
    keepAlive: true
  }
}, {
  path: '/outStock/returnGoodsRecord',
  name: 'returnGoodsRecord',
  component: (resolve) => {
    require(['@/pages/outStock/returnGoodsRecord'], resolve)
  },
  meta: {
    title: '退货记录',
    keepAlive: true
  }
}, {
  path: '/outStock/memoryPrice',
  name: 'memoryPrice',
  component: (resolve) => {
    require(['@/pages/outStock/memoryPrice'], resolve)
  },
  meta: {
    title: '记忆价查询',
    keepAlive: true
  }
}, {
  path: '/outStock/queryLog',
  name: 'queryLog',
  component: (resolve) => {
    require(['@/pages/outStock/queryLog'], resolve)
  },
  meta: {
    title: '日志查询',
    keepAlive: true
  }
}]
