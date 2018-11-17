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
        <el-table 
          class="table-form-wrap"
          size="small"
          :data="formList"
          stripe
          :height=tableHeight
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="gname"
            label="商品名称"
            width="200">
            <template slot-scope="scope">
              <el-autocomplete
                class="table-form-input"
                size="small"
                v-model="scope.row.gname" 
                :fetch-suggestions="querySearch"
                :trigger-on-focus="false"
                @select="handleSelect"
              >
            </el-autocomplete>
            </template>
          </el-table-column>
          <el-table-column
            prop="uname"
            label="默认单位"
            width="80">
            <template slot-scope="scope">
              <el-autocomplete
                class="table-form-input"
                size="small"
                v-model="scope.row.uname"
                :fetch-suggestions="querySearch"
                @select="handleSelect"
              ></el-autocomplete>
            </template>
          </el-table-column>
          <el-table-column
            prop="num"
            label="数量"
            width="80">
            <template slot-scope="scope">
              <el-input class="table-form-input" size="small" v-model="scope.row.num"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="price"
            label="单位进价"
            width="80">
            <template slot-scope="scope">
              <el-input class="table-form-input" size="small" v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注">
            <template slot-scope="scope">
              <el-input class="table-form-input" size="small" v-model="scope.row.remark"></el-input>
            </template>
          </el-table-column>
          <el-table-column 
            label="操作"
            width="100">
            <template slot-scope="scope">
              <div class="table-form-handle">
                <!-- 箭头 -->
                <span class="table-form-arrow">
                  <i class="table-form-arrow-up el-icon-caret-top"></i>
                  <i class="table-form-arrow-down el-icon-caret-bottom"></i>
                </span>
                <!-- 加号 -->
                <span @click="pulsRow()"  class="table-form-plus"></span>
                <!-- 删除 -->
                <span class="table-form-delete"></span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  
</template>
<script>
import tableInput from "@/common/script/tableInput";

export default {
  data() {
    return {
      restaurants: [],
      state2: "",
      value2: "",
      formList: [],
      tableHeight: document.body.clientHeight - 260,
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
  mounted() { 
    this.$nextTick(_=>{
      tableInput.init('.table-form-wrap');
    });
    this.getDataInfo();
    this.restaurants = this.loadAll();
  },
  methods: {
    /**
     * 加一行
     */
    pulsRow(){
      var inputs = document.querySelectorAll('.table-form-input input');
      inputs[2].focus();
      inputs[2].select();
    },
    /**
     * 清除商品
     */
    clearGoodsName(index){
      console.log(index);
    },
    /**
     * 获取数据
     */
    getDataInfo() {
      for (var i = 0; i < 30; i++) {
        this.formList.push({
          gname: "东北大白菜",
          uname: "公斤",
          num: "11.00",
          price: "3.5",
          remark: "要好的"
        });
      }
    },
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
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.container {
  height: 100%;
}
.content {
  box-shadow: none;
  // height: calc(100% - 50px);
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>


