<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>角色管理</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">角色名称：</label>
              <el-input class="search-input" size="small" placeholder="请输入角色名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
            <el-button @click="showDialog = true" class="search-btn" type="primary" size="mini">新增</el-button>
          </li>
        </ul>
      </div>
      <!-- 列表盒子 --> 
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>角色名称</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td>制单员</td>
              <td>
                <a class="ky-table-handle" @click="gosetPower(1)" href="javascript:;">设置权限</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="ky-table-handle" href="javascript:;">编辑</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="ky-table-handle" href="javascript:;">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
        <el-pagination class="mt15" layout="prev, pager, next" :total="60"></el-pagination>
      </div>
      <!-- 新增 -->
      <el-dialog title="新增角色" width="350px" :visible.sync="showDialog">
        <div class="form-wrap">
          <div class="form-group">
            <label>角色名称：</label>
            <el-input class="form-input" size="small" v-model="branchName" placeholder="请输入角色名称"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="showDialog = false">取 消</el-button>
          <el-button type="success" size="mini" @click="showDialog = false">确 定</el-button>
        </div>
      </el-dialog> 
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      input2: null,
      branchName: null,
      showDialog: false
    };
  },
  mounted() {
    this.getBranchInfo();
  },
  methods: {
    /**
     * 设置权限
     */
    gosetPower(id) {
      this.$router.push({ path: "/system/setPower", query: { id: id } });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
.ky-table-warp {
  width: 50%;
}
</style>


