<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>记忆价查询</h1>
    </div>
    <div class="content">
       <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">单据日期：</label>
              <el-date-picker
                size="small"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
          </li>
          <li class="search-item-btn"></li>
          <li class="search-item">
              <label class="search-label">&nbsp;供&nbsp;应&nbsp;商：</label>
              <el-select class="search-select" size="small" clearable  v-model="value2" placeholder="全部">
                <el-option v-for="item in states" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
          </li>
          <li class="search-item">
              <label class="search-label">商品名称：</label>
              <el-input class="search-input" size="small" placeholder="如：大白菜" v-model="gname"></el-input> 
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
              <th>供应商名称</th>
              <th>商品名称</th>
              <th>默认单位</th>
              <th>价格</th>
              <th>单据号</th>
              <th>单据时间</th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td>啊带批发</td>
              <td>大白菜</td>
              <td>公斤</td>
              <td>10.00</td>
              <td>rg2_20181102050133</td>
              <td>2018-11-02 05:01:01</td> 
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
      gname:'',
      value6: "",
      value2: null,
      states: [
        {
          label: "阿呆批发",
          value: 0
        },
        {
          label: "鹿晗批发",
          value: 1
        },
        {
          label: "流量批发",
          value: 2
        }
      ],
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


