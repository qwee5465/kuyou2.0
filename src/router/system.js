export default [{
  path: '/system/roleManage',
  name: 'roleManage',
  component: (resolve) => {
    require(['@/pages/system/roleManage'], resolve)
  },
  meta: {
    title: '角色管理',
    keepAlive: true
  }
}, {
  path: '/system/userManage',
  name: 'userManage',
  component: (resolve) => {
    require(['@/pages/system/userManage'], resolve)
  },
  meta: {
    title: '用户管理',
    keepAlive: true
  }
}, {
  path: '/system/queryLog',
  name: 'queryLog',
  component: (resolve) => {
    require(['@/pages/system/queryLog'], resolve)
  },
  meta: {
    title: '日志查询',
    keepAlive: true
  }
}, {
  path: '/system/dataBackups',
  name: 'dataBackups',
  component: (resolve) => {
    require(['@/pages/system/dataBackups'], resolve)
  },
  meta: {
    title: '数据备份',
    keepAlive: true
  }
}, {
  path: '/system/setPower',
  name: 'setPower',
  component: (resolve) => {
    require(['@/pages/system/setPower'], resolve)
  },
  meta: {
    title: '设置权限',
    keepAlive: true
  }
}]
