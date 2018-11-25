<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>加工单->按商品加工</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">加工日期：</label>
              <el-input class="search-input" size="small" placeholder="如：2018-11-12" v-model="input1"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">商品类别：</label>
              <el-input class="search-input" size="small" v-model="input2"></el-input> 
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
          <caption>加工单2018-11-12</caption>
          <thead>
            <tr>
              <th>序号</th>
              <th>商品名称</th>
              <th>客户量</th>
              <th>合计数</th>
              <th>出库数</th>
              <th>入库数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 20" :key="index">
              <td>{{item}}</td>
              <td>山药</td>
              <td style="text-align:left;padding-left:20px;">临平：30斤（切片）；绿康：20斤（去皮）；</td>
              <td>50.00斤</td>
              <td></td>
              <td></td>
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


