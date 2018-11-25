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
            <li class="two-only-line" v-if="index==6"></li>
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
          <li class="logout-item current"><img src="@/assets/images/tabbar/logout_icon.png" alt="" /></li>
          <li class="logout-item"><img src="@/assets/images/tabbar/user_icon.png" alt="" /></li>
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
            { name: "单位管理", url: "/unit/list" },
            { name: "品牌管理", url: "/brand/list" },
            { name: "供应商类型", url: "/supplier/typeList" },
            { name: "供应商", url: "/supplier/list" },
            { name: "客户类型", url: "/client/typeList" },
            { name: "客户管理", url: "/client/list" },
            { name: "商品类型", url: "/goods/typeList" },
            { name: "商品管理", url: "/goods/list" }
          ]
        },
        {
          name: "入库",
          icon: "icon-icon-storage2",
          subList: [
            { name: "入库单", url: "/joinStock/joinBill" },
            { name: "入库记录", url: "/joinStock/joinRecord" },
            { name: "退货单", url: "/joinStock/returnGoodsBill" },
            { name: "退货记录", url: "/joinStock/returnGoodsRecord" },
            { name: "记忆价查询", url: "/joinStock/memoryPrice" },
            { name: "日志查询", url: "/joinStock/queryLog" },
            { name: "", url: "" },
            { name: "数据列设置", url: "/joinStock/setDate" }
          ]
        },
        {
          name: "订单",
          icon: "icon-icon-storage2",
          subList: [
            { name: "订单", url: "/order/orderBill" },
            { name: "订单记录", url: "/order/orderRecord" },
            { name: "出库记录", url: "/order/outRecord" },
            { name: "退货单", url: "/order/returnGoodsBill" },
            { name: "退货记录", url: "/order/returnGoodsRecord" },
            { name: "记忆价查询", url: "/order/memoryPrice" },
            { name: "日志查询", url: "/order/queryLog" },
            { name: "", url: "" },
            { name: "数据列设置", url: "/order/setData" }
          ]
        },
        {
          name: "报表",
          icon: "icon-icon-storage2",
          subList: [
            { name: "按商品采购", url: "/reportForm/purchaseReport" },
            { name: "按客户采购", url: "/reportForm/clientPurchase" },
            { name: "按客户分拣", url: "/reportForm/clientSortingReport" },
            { name: "按商品分拣", url: "/reportForm/goodsSortingReport" },
            { name: "加工单", url: "/reportForm/machiningReport" }
          ]
        },
        {
          name: "库存",
          icon: "icon-icon-storage2",
          subList: [
            { name: "默认仓库", url: "/stock/defaultStock" },
            { name: "库存盘点", url: "/stock/inventory" },
            { name: "库存详情", url: "/stock/stockDetail" },
            { name: "日志查询", url: "/stock/queryLog" }
          ]
        },
        {
          name: "分析",
          icon: "icon-icon-storage2",
          subList: [
            { name: "毛利分析", url: "/analysis/maoriAnalysis" },
            { name: "库存分析", url: "/analysis/stockAnalysis" },
            { name: "商品分析", url: "/analysis/goodsAnalysis" },
            { name: "商品流水", url: "/analysis/goodsStream" },
            { name: "销售明细", url: "/analysis/saleDetail" },
            { name: "销售分析", url: "/analysis/saleAnalysis" },
            { name: "货损分析", url: "/analysis/cargoDamageAnalysis" },
            { name: "供应商分析", url: "/analysis/supplierAnalysis" },
            { name: "供应商明细", url: "/analysis/supplierDetail" }
          ]
        },
        {
          name: "系统",
          icon: "icon-baobiaofenxi",
          subList: [
            { name: "角色管理", url: "/system/roleManage" },
            { name: "用户管理", url: "/system/userManage" },
            { name: "日志查询", url: "/system/queryLog" },
            { name: "数据备份", url: "/system/dataBackups" }
          ]
        },
        {
          name: "设置",
          icon: "icon-xitongshezhipx",
          subList: [
            { name: "公司信息", url: "/user/companyInfo" },
            { name: "参数设置", url: "" }
          ]
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
        this.$router.push(
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

