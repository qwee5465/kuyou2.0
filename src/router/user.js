export default [{
  path: '/user/companyInfo',
  name: 'companyInfo',
  component: (resolve) => {
    require(['@/pages/user/companyInfo'], resolve)
  },
  meta: {
    title: '公司信息',
    keepAlive: true
  }
}, {
  path: '/user/userInfo',
  name: 'userInfo',
  component: (resolve) => {
    require(['@/pages/user/userInfo'], resolve)
  },
  meta: {
    title: '用户信息',
    keepAlive: true
  }
}]
