<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>客户销售明细</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">流水日期：</label>
              <el-input class="search-input" size="small" placeholder="如：2018-11-12～11-31" v-model="input1"></el-input> 
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
      <div class="ky-table-warp">
        <table class="ky-table">
          <caption>余杭消防中队销售明细2018-11-01～2018-11-31</caption>
          <thead>
            <tr>
              <th>序号</th>
              <th>客户名称</th>
              <th>商品名称</th>
              <th>默认单位</th>
              <th>数量</th>
              <th>销售额</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 20" :key="index">
              <td>{{item}}</td>
              <td>余杭消防中队销售明细</td>
              <td>大白菜</td>
              <td>斤</td>
              <td>100</td>
              <td>250</td>
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
      input4:null,
      input5:null,
      input6:null,
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


