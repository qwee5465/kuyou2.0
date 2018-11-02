export default [{
  path: '/analysis/maoriAnalysis',
  name: 'maoriAnalysis',
  component: (resolve) => {
    require(['@/pages/analysis/maoriAnalysis'], resolve)
  },
  meta: {
    title: '毛利分析',
    keepAlive: true
  }
}, {
  path: '/analysis/stockAnalysis',
  name: 'stockAnalysis',
  component: (resolve) => {
    require(['@/pages/analysis/stockAnalysis'], resolve)
  },
  meta: {
    title: '库存分析',
    keepAlive: true
  }
}, {
  path: '/analysis/goodsAnalysis',
  name: 'goodsAnalysis',
  component: (resolve) => {
    require(['@/pages/analysis/goodsAnalysis'], resolve)
  },
  meta: {
    title: '商品分析',
    keepAlive: true
  }
}, {
  path: '/analysis/supplierAnalysis',
  name: 'supplierAnalysis',
  component: (resolve) => {
    require(['@/pages/analysis/supplierAnalysis'], resolve)
  },
  meta: {
    title: '供应商分析',
    keepAlive: true
  }
}, {
  path: '/analysis/goodsStream',
  name: 'goodsStream',
  component: (resolve) => {
    require(['@/pages/analysis/goodsStream'], resolve)
  },
  meta: {
    title: '商品流水',
    keepAlive: true
  }
}, {
  path: '/analysis/saleDetail',
  name: 'saleDetail',
  component: (resolve) => {
    require(['@/pages/analysis/saleDetail'], resolve)
  },
  meta: {
    title: '销售明细',
    keepAlive: true
  }
}, {
  path: '/analysis/saleAnalysis',
  name: 'saleAnalysis',
  component: (resolve) => {
    require(['@/pages/analysis/saleAnalysis'], resolve)
  },
  meta: {
    title: '销售分析',
    keepAlive: true
  }
}, {
  path: '/analysis/cargoDamageAnalysis',
  name: 'cargoDamageAnalysis',
  component: (resolve) => {
    require(['@/pages/analysis/cargoDamageAnalysis'], resolve)
  },
  meta: {
    title: '货损分析',
    keepAlive: true
  }
}, {
  path: '/analysis/supplierDetail',
  name: 'supplierDetail',
  component: (resolve) => {
    require(['@/pages/analysis/supplierDetail'], resolve)
  },
  meta: {
    title: '供应商明细',
    keepAlive: true
  }
}]
