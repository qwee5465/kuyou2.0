export default [{
  path: '/joinStock/joinBill',
  name: 'joinBill',
  component: (resolve) => {
    require(['@/pages/joinStock/joinBill'], resolve)
  },
  meta: {
    title: '入库单',
    keepAlive: true
  }
}, {
  path: '/joinStock/joinRecord',
  name: 'joinRecord',
  component: (resolve) => {
    require(['@/pages/joinStock/joinRecord'], resolve)
  },
  meta: {
    title: '入库记录',
    keepAlive: true
  }
}, {
  path: '/joinStock/returnGoodsBill',
  name: 'returnGoodsBill',
  component: (resolve) => {
    require(['@/pages/joinStock/returnGoodsBill'], resolve)
  },
  meta: {
    title: '退货单',
    keepAlive: true
  }
}, {
  path: '/joinStock/returnGoodsRecord',
  name: 'returnGoodsRecord',
  component: (resolve) => {
    require(['@/pages/joinStock/returnGoodsRecord'], resolve)
  },
  meta: {
    title: '退货记录',
    keepAlive: true
  }
}, {
  path: '/joinStock/memoryPrice',
  name: 'memoryPrice',
  component: (resolve) => {
    require(['@/pages/joinStock/memoryPrice'], resolve)
  },
  meta: {
    title: '记忆价查询',
    keepAlive: true
  }
}, {
  path: '/joinStock/queryLog',
  name: 'queryLog',
  component: (resolve) => {
    require(['@/pages/joinStock/queryLog'], resolve)
  },
  meta: {
    title: '日志查询',
    keepAlive: true
  }
}]
