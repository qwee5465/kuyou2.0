<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>供应商记录</h1>
    </div>
    <div class="content">
      <div class="search-warp">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label"></label>
              <el-select size="small" clearable  v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </li>
          <li class="search-item">
              <label class="search-label"></label>
              <el-input class="search-input" style="width: 200px;" size="small" placeholder="请输入供应商名称或电话" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button type="success" size="mini">搜索</el-button>
          </li>
          <li class="search-item">
            <el-button type="primary" @click="goAdd()" size="mini">新增</el-button>
          </li>
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="list-warp">
        <el-table :data="tableData" border highlight-current-row size="mini" style="width:100%;">
          <el-table-column type="index" label="序号" width="90"></el-table-column>
          <el-table-column prop="typename" label="供应商类型"></el-table-column>
          <el-table-column prop="name" label="供应商名称"></el-table-column>
          <el-table-column prop="phone" label="联系电话"></el-table-column>
          <el-table-column prop="address" label="地址" min-width="250"></el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
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
      options: [
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      tableData: [
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "办公室",
          name: "余高肉报单",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        }
      ]
    };
  },
  methods:{
    /**
     * 新增供应商
     */
    goAdd(){
      this.$router.push('/supplier/add');
    },
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  background-color: $bgbColor;
  box-shadow: none;
}
</style>


