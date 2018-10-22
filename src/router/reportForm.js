export default [{
  path: '/reportForm/purchaseReport',
  name: 'purchaseReport',
  component: (resolve) => {
    require(['@/pages/reportForm/purchaseReport'], resolve)
  },
  meta: {
    title: '采购单',
    keepAlive: true
  }
}, {
  path: '/reportForm/clientSortingReport',
  name: 'clientSortingReport',
  component: (resolve) => {
    require(['@/pages/reportForm/clientSortingReport'], resolve)
  },
  meta: {
    title: '客户分拣',
    keepAlive: true
  }
}, {
  path: '/reportForm/goodsSortingReport',
  name: 'goodsSortingReport',
  component: (resolve) => {
    require(['@/pages/reportForm/goodsSortingReport'], resolve)
  },
  meta: {
    title: '商品分拣',
    keepAlive: true
  }
}, {
  path: '/reportForm/machiningReport',
  name: 'machiningReport',
  component: (resolve) => {
    require(['@/pages/reportForm/machiningReport'], resolve)
  },
  meta: {
    title: '加工单',
    keepAlive: true
  }
}]
