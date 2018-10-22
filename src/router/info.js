export default [
  {
    path: '/unit/list',
    name: 'unitList',
    component: (resolve) => {
      require(['@/pages/info/unit/list'], resolve)
    },
    meta: {
      title: '单位管理',
      keepAlive: true
    }
  },
  {
    path: '/brand/list',
    name: 'brandList',
    component: (resolve) => {
      require(['@/pages/info/brand/list'], resolve)
    },
    meta: {
      title: '品牌管理',
      keepAlive: true
    }
  },
  {
    path: '/supplier/typeList',
    name: 'supplierTypeList',
    component: (resolve) => {
      require(['@/pages/info/supplier/typeList'], resolve)
    },
    meta: {
      title: '供应商类型',
      keepAlive: true
    }
  },
  {
    path: '/supplier/list',
    name: 'supplierList',
    component: (resolve) => {
      require(['@/pages/info/supplier/list'], resolve)
    },
    meta: {
      title: '供应商',
      keepAlive: true
    }
  },
  {
    path: '/supplier/add',
    name: 'supplierAdd',
    component: (resolve) => {
      require(['@/pages/info/supplier/add'], resolve)
    },
    meta: {
      title: '新增供应商',
      keepAlive: true
    }
  },
  {
    path: '/client/typeList',
    name: 'clientTypeList',
    component: (resolve) => {
      require(['@/pages/info/client/typeList'], resolve)
    },
    meta: {
      title: '客户类型',
      keepAlive: true
    }
  },
  {
    path: '/client/list',
    name: 'clientList',
    component: (resolve) => {
      require(['@/pages/info/client/List'], resolve)
    },
    meta: {
      title: '客户管理',
      keepAlive: true
    }
  },
  {
    path: '/client/add',
    name: 'clientAdd',
    component: (resolve) => {
      require(['@/pages/info/client/add'], resolve)
    },
    meta: {
      title: '新增客户',
      keepAlive: true
    }
  },
  {
    path: '/goods/typeList',
    name: 'goodsTypeList',
    component: (resolve) => {
      require(['@/pages/info/goods/typeList'], resolve)
    },
    meta: {
      title: '商品类型',
      keepAlive: true
    }
  },
  {
    path: '/goods/list',
    name: 'goodsList',
    component: (resolve) => {
      require(['@/pages/info/goods/list'], resolve)
    },
    meta: {
      title: '商品管理',
      keepAlive: true
    }
  },
  {
    path: '/goods/add',
    name: 'goodsAdd',
    component: (resolve) => {
      require(['@/pages/info/goods/add'], resolve)
    },
    meta: {
      title: '新增商品',
      keepAlive: true
    }
  }
]
