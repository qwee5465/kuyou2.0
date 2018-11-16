<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>客户记录</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">客户类型：</label>
              <el-select class="search-select" size="small" clearable  v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </li>
          <li class="search-item">
              <label class="search-label">客户名称：</label>
              <el-input class="search-input"  size="small" placeholder="请输入客户名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
            <el-button class="search-btn" type="primary" @click="goAdd()" size="mini">新增</el-button>
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
              <th>客户名称</th>
              <th>联系电话</th>
              <th>地址</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 20" :key="index">
              <td>{{item}}</td>
              <td>蔬菜类</td>
              <td>啊戴农产品</td>
              <td>13858866688</td>
              <td>浙江省杭州市余杭区阿戴毛用</td>
              <td>这家蔬菜是自种的</td>
              <td>
                <a class="ky-table-handle" href="javascript:;">编辑</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="ky-table-handle" href="javascript:;">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
        <el-pagination class="mt15" layout="prev, pager, next" :total="60"></el-pagination>
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
    };
  },
  methods: {
    /**
     * 新增客户
     */
    goAdd() {
      this.$router.push("/client/add");
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


