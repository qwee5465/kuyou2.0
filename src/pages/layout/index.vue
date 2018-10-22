<template>
  <div class="panel">
    <!-- 左边主导航 -->
    <div class="ky-sidebar" :class="[isShowSidebar?'':'left200']">
      <!-- 一级导航 -->
      <div class="one-sidebar">
        <!-- logo -->
        <div class="logo-wrap">
          <img src="@/assets/images/logo.png" alt="logo" />
        </div>
        <!-- 常用 -->
        <div class="only-wrap">
          <ul class="only-list">
            <li class="only-item" v-for="(item,index) in sidebarList" :key="index" :class="[sidebarIndex==index?'current':'',index==6?'mt50':'']" @click="setSidebarIndex(index)"><i class="iconfont" :class=" item.icon"></i>{{item.name}}</li>
            <!-- <li class="only-item"><i class="iconfont icon-icon-storage2"></i>店铺</li>
            <li class="only-item"><i class="iconfont icon-icon-storage2"></i>商品</li>
            <li class="only-item"><i class="iconfont icon-icon-storage2"></i>订单</li>
            <li class="only-item"><i class="iconfont icon-icon-storage2"></i>客户</li>
            <li class="only-item"><i class="iconfont icon-icon-storage2"></i>客户</li>
            <li class="only-item"><i class="iconfont icon-icon-storage2"></i>客户</li>
            <li class="only-item mt50"><i class="iconfont icon-baobiaofenxi"></i>营销</li>
            <li class="only-item"><i class="iconfont icon-xitongshezhipx"></i>设置</li> -->
          </ul>
        </div>
      </div>
      <!-- 二级导航 -->
      <div class="two-sidebar">
        <!-- 标题 -->
        <div class="two-only-title">{{sidebarList[sidebarIndex].name}}</div>
        <!-- 常用 -->
        <ul class="two-only-list">
          <div v-for="(item,index) in sidebarList[sidebarIndex].subList" :key="index">
            <li class="two-only-item" :class="[subbarIndex==index?'current':'']"><a href="javascript:;" @click="setSubbarIndex(index)">{{item.name}}</a></li>
            <!-- 分割线 -->
            <li class="two-only-line" v-if="index==7"></li>
          </div>
          
          <!-- <li class="two-only-item"><a href="javascript:;">所有订单</a></li>
          <li class="two-only-item"><a href="javascript:;">加薪订单</a></li>
          <li class="two-only-item"><a href="javascript:;">退款维权</a></li>
          <li class="two-only-item"><a href="javascript:;">评价管理</a></li>
          <li class="two-only-item"><a href="javascript:;">分销采购</a></li>
          <li class="two-only-item"><a href="javascript:;">批量退款</a></li> -->
          <!-- 分割线 -->
          <!-- <li class="two-only-line"></li>
          <li class="two-only-item"><a href="javascript:;">订单设置</a></li>
          <li class="two-only-item"><a href="javascript:;">快递订单</a></li> -->
        </ul>
      </div>
      <!-- 注销和个人信息 -->
      <div class="logout-wrap">
        <ul class="logout-list">
          <li class="logout-item current"><img src="static/images/tabbar/logout_icon.png" alt="" /></li>
          <li class="logout-item"><img src="static/images/tabbar/user_icon.png" alt="" /></li>
          <li class="logout-line"></li>
        </ul>
      </div>
      <!-- 隐藏显示导航按钮 -->
      <div class="ky-is-sidebar" @click="setShowSidebar">
        <i class="icon-arrow" :class="[isShowSidebar?'left-icon-arrow':'right-icon-arrow']"></i>
      </div>
    </div>

    <!-- 右框部分 -->
    <div class="right-frame" :class="[isShowSidebar?'':'left200']">
      <!-- 内容部分 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {
      isShowSidebar: true,
      sidebarList: [
        {
          name: "概括",
          icon: "icon-icon-storage2",
          subList: [{ name: "系统概括", url: "/home" }]
        },
        {
          name: "信息",
          icon: "icon-icon-storage2",
          subList: [ 
            { name: "单位管理", url: "/home" },
            { name: "品牌管理", url: "/home" },
            { name: "供应商类型", url: "/home" },
            { name: "供应商", url: "/home" },
            { name: "商品类型", url: "/home" },
            { name: "商品管理", url: "/home" },
            { name: "客户类型", url: "/home" },
            { name: "客户管理", url: "/home" }
          ]
        },
        {
          name: "入库",
          icon: "icon-icon-storage2",
          subList: [
            { name: "入库单", url: "/home" },
            { name: "入库记录", url: "/home" },
            { name: "退货单", url: "/home" },
            { name: "退货记录", url: "/home" },
            { name: "记忆价查询", url: "/home" },
            { name: "日志查询", url: "/home" }
          ]
        },
        {
          name: "订单",
          icon: "icon-icon-storage2",
          subList: [
            { name: "订单", url: "/home" },
            { name: "订单记录", url: "/home" },
            { name: "出库记录", url: "/home" },
            { name: "退货单", url: "/home" },
            { name: "退货记录", url: "/home" },
            { name: "记忆价查询", url: "/home" },
            { name: "日志查询", url: "/home" }
          ]
        },
        {
          name: "报表",
          icon: "icon-icon-storage2",
          subList: [
            { name: "采购单", url: "/home" },
            { name: "客户分拣", url: "/home" },
            { name: "商品分拣", url: "/home" },
            { name: "加工单", url: "/home" }
          ]
        },
        {
          name: "库存",
          icon: "icon-icon-storage2",
          subList: [
            { name: "默认出库", url: "/home" },
            { name: "货损记录", url: "/home" },
            { name: "库存详情", url: "/home" }
          ]
        },
        {
          name: "分析",
          icon: "icon-icon-storage2",
          subList: [
            { name: "毛利分析", url: "/home" },
            { name: "毛利分析库存", url: "/home" },
            { name: "毛利分析商品", url: "/home" },
            { name: "毛利分析供应商", url: "/home" },
            { name: "库存商品流水", url: "/home" },
            { name: "客户销售明细", url: "/home" },
            { name: "客户销售分析", url: "/home" },
            { name: "自然货损分析", url: "/home" },
            { name: "供应商明细", url: "/home" }
          ]
        },
        {
          name: "系统",
          icon: "icon-baobiaofenxi",
          subList: [
            { name: "角色管理", url: "/home" },
            { name: "用户管理", url: "/home" },
            { name: "日志查询", url: "/home" },
            { name: "数据备份", url: "/home" }
          ]
        },
        {
          name: "设置",
          icon: "icon-xitongshezhipx",
          subList: [{ name: "角色管理", url: "/home" }]
        }
      ],
      sidebarIndex: 0,
      subbarIndex: 0
    };
  }, 
  mounted() {
    console.log(this.sidebarList);
  },
  methods: {
    /**
     * 设置一级导航栏选中
     */
    setSidebarIndex(index) {
      if (index != this.sidebarIndex) {
        this.sidebarIndex = index;
        this.subbarIndex = -1;
      }
    },
    /**
     * 设置二级导航栏选中
     */
    setSubbarIndex(index) { 
      if (index != this.subbarIndex) {
        this.subbarIndex = index;
        this.$route.push(
          this.sidebarList[this.sidebarIndex].subList[this.subbarIndex].url
        );
      }
    },
    /**
     * 显示隐藏Sidebar
     */
    setShowSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

