<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>品牌管理</h1>
    </div>
    <div class="content">
      <div class="search-warp">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">品牌名称：</label>
              <el-input class="search-input" size="small" placeholder="请输入单位名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button type="success" size="mini">搜索</el-button>
          </li>
          <li class="search-item">
            <el-button type="primary" size="mini">新增</el-button>
          </li>
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="list-warp">
        <el-table :data="tableData" border highlight-current-row size="mini" style="width:100%;">
          <el-table-column type="index" label="序号" width="90"></el-table-column>
          <el-table-column prop="name" label="商品名称" width="200"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a href="javascript:;">编辑</a>&nbsp;|&nbsp;<a href="javascript:;">删除</a>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="mt10" layout="prev, pager, next" :total="60"></el-pagination>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      input2: null,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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
.list-warp{
  width: 50%;
}
</style>


