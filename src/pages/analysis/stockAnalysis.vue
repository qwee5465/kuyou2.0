<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>库存分析</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">销售日期：</label>
              <el-input class="search-input" size="small" placeholder="如：2018-11-01~11-31" v-model="input1"></el-input> 
          </li>
          <li class="search-item">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
            <el-button class="search-btn" type="primary" size="mini">打印</el-button>
            <el-button class="search-btn" type="warning" size="mini">导出</el-button>
          </li> 
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>商品名称</th>
              <th>默认单位</th>
              <th>入库数</th>
              <th>入库成本</th>
              <th>出库数</th>
              <th>销售金额</th>
              <th>库存数</th>
              <th>库存成本</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td>小青菜</td>
              <td>斤</td>
              <td>10000.00</td>
              <td>25000.00</td>
              <td>9000.00</td>
              <td>35000.00</td>
              <td>1000.00</td>
              <td>2500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data(){
    return{
      input1:null,
      input2:null,
      input3:null,
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


