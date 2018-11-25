<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>库存盘点</h1>
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
            <label class="search-label">盘点状态：</label>
            <el-select class="search-select" size="small"  v-model="value" placeholder="全部">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select> 
          </li>
          <li class="search-item">
              <label class="search-label">盘点人员：</label>
              <el-input class="search-input" size="small" placeholder="老王" v-model="input1"></el-input> 
          </li>
          <li class="search-item search-item-btn">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
            <el-button class="search-btn" type="warning" size="mini">批量导入</el-button>
            <span class="color-gray ml10 fs12">(注：请在默认仓库中批量导出后盘点好对应的数量再执行批量导入操作)</span>
          </li> 
        </ul>
      </div>
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>盘点状态</th>
              <th>盘点日期</th>
              <th>盘点人员</th>
              <th>单据号</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) of 10" :key="index">
            <tr>
              <td>{{item}}</td>
              <td>盘盈</td>
              <td>2018-11-12</td>
              <td>老王</td>
              <td><a class="ky-table-handle" href="javascript:;">pr2_201801029929328</a></td>
            </tr>
            <tr>
              <td>{{item}}</td>
              <td>盘亏</td>
              <td>2018-11-12</td>
              <td>隔壁</td>
              <td><a class="ky-table-handle" href="javascript:;">pr2_201801029929328</a></td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      value1: new Date(),
      options1: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: "1",
          label: "盘盈"
        },
        {
          value: "2",
          label: "盘亏"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
</style>


