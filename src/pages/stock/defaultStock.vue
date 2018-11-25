<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>默认仓库</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">商品类别：</label>
              <el-input class="search-input" size="small" placeholder="如：2018-11-12" v-model="input1"></el-input> 
          </li>
          <li class="search-item">
            <label class="search-label">库存状态：</label>
            <el-input class="search-input" size="small" v-model="input3"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">商品名称：</label> 
              <el-input class="search-input" size="small" v-model="input4"></el-input> 
          </li>
          <li class="search-item search-item-btn">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
            <el-button class="search-btn" type="primary" size="mini">打印</el-button>
            <el-button class="search-btn" type="warning" size="mini">批量导出</el-button>
          </li> 
        </ul>
      </div>
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>商品名称</th>
              <th>品牌</th>
              <th>单位</th>
              <th>剩余数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 20" :key="index">
              <td>{{item}}</td>
              <td>兔肉</td>
              <td>无</td>
              <td>
                <select>
                  <option value="1">斤</option>
                  <option value="2">公斤</option>
                </select>
              </td>
              <td>10</td>
              <td>
                <a class="ky-table-handle" href="javascript:;">库存详情</a>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  </div>
  
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
  
}
</style>


