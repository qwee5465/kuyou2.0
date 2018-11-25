<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>毛利分析</h1>
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
              <label class="search-label">客户类型：</label>
              <el-input class="search-input" size="small"  v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <label class="search-label">客户名称：</label>
            <el-input class="search-input" size="small" v-model="input3"></el-input> 
          </li>
          <li class="search-item search-item-btn">
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
              <th>客户类型</th>
              <th>客户</th>
              <th>销售金额</th>
              <th>成本金额</th>
              <th>毛利</th>
              <th>毛利率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td>拱墅区消防大队</td>
              <td>大关消防中队</td>
              <td>10000.00</td>
              <td>25000.00</td>
              <td>15000.00</td>
              <td>60%</td>
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


