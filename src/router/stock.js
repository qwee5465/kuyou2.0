export default [{
  path: '/stock/defaultStock',
  name: 'defaultStock',
  component: (resolve) => {
    require(['@/pages/stock/defaultStock'], resolve)
  },
  meta: {
    title: '默认仓库',
    keepAlive: true
  }
}, {
  path: '/stock/inventory',
  name: 'inventory',
  component: (resolve) => {
    require(['@/pages/stock/inventory'], resolve)
  },
  meta: {
    title: '库存盘点',
    keepAlive: true
  }
}, {
  path: '/stock/stockDetail',
  name: 'stockDetail',
  component: (resolve) => {
    require(['@/pages/stock/stockDetail'], resolve)
  },
  meta: {
    title: '库存详情',
    keepAlive: true
  }
},{
  path: '/stock/queryLog',
  name: 'queryLog',
  component: (resolve) => {
    require(['@/pages/stock/queryLog'], resolve)
  },
  meta: {
    title: '日志查询',
    keepAlive: true
  }
}]
