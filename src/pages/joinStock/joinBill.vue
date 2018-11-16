<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>入库单</h1>
    </div>
    <div class="content">
      <!-- 按钮区域 -->
      <div class="btn-wrap">
        <el-button class="search-btn" type="success" size="mini">保存</el-button>
      </div>
      <div class="search-wrap">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">单&nbsp;据&nbsp;号：</label>
              <el-input class="search-input" size="small" v-model="form.jsid"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">入库名称：</label>
              <el-input class="search-input" size="small" v-model="form.billName"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">备注：</label>
              <el-input class="search-input" size="small" v-model="form.remark"></el-input> 
          </li>
          <li style="width:100%;"></li>
          <li class="search-item">
            <label class="search-label">供&nbsp;应&nbsp;商：</label>
            <el-autocomplete
              class="search-input"
              size="small"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="请输入供应商"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </li>
          <li class="search-item">
              <label class="search-label">入库日期：</label>
              <el-date-picker
                size="small"
                class="search-input"
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
              </el-date-picker>
          </li> 
        </ul>
        <!-- 底部区域 -->
        <div class="search-other">
          <span class="bill-money">单据金额：{{form.billMoney}}</span>
        </div>
      </div>
      <!-- 表格内容区域 -->
      <div class="ky-table-wrap">
        <table class="ky-table table-form-wrap">
          <thead>
            <tr>
              <th style="width:50px;">序号</th>
              <th>商品名称</th> 
              <th>默认单位</th>
              <th>数量</th>
              <th>单位进价</th>
              <th>备注</th>
              <th style="width:100px;">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 100" :key="index">
              <td>{{item}}</td>
              <td>
                <el-autocomplete
                  class="table-form-input"
                  size="small"
                  v-model="state2"
                  :fetch-suggestions="querySearch"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                ></el-autocomplete>
              </td>
              <td>
                <el-autocomplete
                  class="table-form-input"
                  size="small"
                  v-model="state2"
                  :fetch-suggestions="querySearch"
                  @select="handleSelect"
                ></el-autocomplete>
              </td> 
              <td><el-input class="table-form-input" size="small"></el-input></td>
              <td><el-input class="table-form-input" size="small"></el-input></td>
              <td><el-input class="table-form-input" size="small"></el-input></td>
              <td>
                <div class="table-form-handle">
                  <!-- 箭头 -->
                  <span class="table-form-arrow">
                    <i class="table-form-arrow-up el-icon-caret-top"></i>
                    <i class="table-form-arrow-down el-icon-caret-bottom"></i>
                  </span>
                  <!-- 加号 -->
                  <span class="table-form-plus"></span>
                  <!-- 删除 -->
                  <span class="table-form-delete"></span>
                </div>
              </td>
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
      restaurants: [],
      state2: "",
      value2: "",
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "明天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      form: {
        jsid: "RR_20181116154611",
        billName: "杭州田旺农副批发有限公司",
        remark: "",
        billMoney: "7,812.00"
      }
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
</style>


