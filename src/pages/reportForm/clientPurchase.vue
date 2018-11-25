<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>采购单->按客户采购</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">采购日期：</label>
              <el-input class="search-input" size="small" placeholder="如：2018-11-12" v-model="input1"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">客户类型：</label>
              <el-input class="search-input" size="small"  v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <label class="search-label">客户名称：</label>
            <el-input class="search-input" size="small" v-model="input3"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">供应商类：</label> 
              <el-input class="search-input" size="small" v-model="input4"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">&nbsp;供&nbsp;应&nbsp;商：</label> 
              <el-input class="search-input" size="small" v-model="input5"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">商品类别：</label>
              <el-input class="search-input" size="small" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">商品名称：</label>
              <el-input class="search-input" size="small" placeholder="请输入商品名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">采购模式：</label>
              <el-input class="search-input" size="small" placeholder="数量＋单位 单位备注" v-model="input2"></el-input>
              <el-input class="search-input" size="small" placeholder="显示库存足的商品？" v-model="input2"></el-input> 
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
          <caption>采购单2018-11-12</caption>
          <thead>
            <tr>
              <th>序号</th>
              <th>客户类型</th>
              <th>客户名称</th>
              <th>商品名称</th>
              <th>数量＋单位</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 20" :key="index">
              <td>{{item}}</td>
              <td>临平学校</td>
              <td>临平中学</td>
              <td>大白菜</td>
              <td>10斤</td>
              <td>要新鲜的</td>
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


