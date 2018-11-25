<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>日志查询</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">盘点日期：</label>
              <el-date-picker
                size="small"
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
          <li class="search-item">
              <label class="search-label">操作人：</label>
              <el-select class="search-select" size="small" clearable  v-model="value" placeholder="请选择操作人">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
          </li>
          <li class="search-item search-item-btn">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
          </li> 
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>日志内容</th>
              <th>操作人</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td>xx在xxxx时间进行了盘点操作.单据号为(RG2_20181102030102111,RG2_20181102030102111,RG2_20181102030102111)</td>
              <td>老王</td>
            </tr>
          </tbody>
        </table>
        <el-pagination class="mt15" layout="prev, pager, next" :total="60"></el-pagination>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      input2: null,
      value1: new Date()
    };
  },
  methods: {
    /**
     * 新增商品
     */
    goAdd() {
      this.$router.push("/goods/add");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
</style>


