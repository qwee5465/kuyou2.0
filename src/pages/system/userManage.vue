<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>用户管理</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">账号：</label>
              <el-input class="search-input" size="small" placeholder="请输入账号" v-model="input2"></el-input> 
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
              <th>账号</th>
              <th>联系人</th>
              <th>角色</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td>15158549355</td>
              <td>李文娜</td>
              <td>制单员</td>
              <td>正常</td>
              <td>
                <a class="ky-table-handle" href="javascript:;">停用</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a class="ky-table-handle" href="javascript:;">编辑</a>
              </td>
            </tr>
          </tbody>
        </table>
        <el-pagination class="mt15" layout="prev, pager, next" :total="11"></el-pagination>
      </div>
      <!-- 新增 -->
      <el-dialog title="新增品牌" width="350px" :visible.sync="showDialog">
        <div class="form-wrap">
          <div class="form-group">
            <label>账号：</label>
            <el-input class="form-input" size="small" v-model="branchName" placeholder="如：138588868888"></el-input>
          </div>
          <div class="form-group">
            <label>密码：</label>
            <el-input class="form-input" type="password" size="small" v-model="branchName" placeholder="如：138588868888"></el-input>
          </div>
          <div class="form-group">
            <label>确认密码：</label>
            <el-input class="form-input" type="password" size="small" v-model="branchName" placeholder="如：138588868888"></el-input>
          </div>
          <div class="form-group">
            <label>联系人：</label>
            <el-input class="form-input" size="small" v-model="branchName" placeholder="如：138588868888"></el-input>
          </div>
          <div class="form-group">
            <label>角色</label>
            <el-input class="form-input" size="small" v-model="branchName" placeholder=""></el-input>
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
     * 获取品牌信息
     */
    getBranchInfo() {},
    /**
     * 新增品牌
     */
    addUnit() {},
    /**
     * 编辑品牌
     */
    editUnit() {}
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
</style>


