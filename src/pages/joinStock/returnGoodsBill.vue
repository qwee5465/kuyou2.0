<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>退货单－>新建</h1>
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
            <span class="ky-tips">
              搜索入库单据号，商品退货数<=入库数 并 <= 库存数。若该商品部分商品已出库或全部出库，则退回该商品的其他批次数量。按照先进先出的规则。
                （注意：退货将影响该商品的成本分析，请谨慎操作）
            </span>
          </li>
        </ul>
        <!-- 底部区域 -->
        <div class="search-other">
          <span class="bill-money">退货金额：{{form.billMoney}}</span>
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
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="uname"
            label="默认单位"
            width="80"> 
          </el-table-column> 
          <el-table-column
            prop="rough_weight"
            label="入库数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="rough_weight"
            label="库存数 "
            width="80">
          </el-table-column>
          <el-table-column
            prop="num"
            label="退货数"
            width="80">
            <template slot-scope="scope">
              <el-input class="table-form-input" size="small" v-model="scope.row.num"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="rough_weight"
            label="单价"
            width="80">
          </el-table-column>
          <el-table-column
            prop="rough_weight"
            label="退货金额"
            width="80">
          </el-table-column>
          <el-table-column 
            label="备注">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  
</template>
<script>
import tableInput from "@/common/script/tableInput";
import kyAutocomplete from "@/components/ky-autocomplete.vue";

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
  components: {
    kyAutocomplete
  },
  mounted() {
    this.$nextTick(_ => {
      tableInput.init(".table-form-wrap tbody tr");
    });
    this.getDataInfo();
    this.restaurants = this.loadAll();
  },
  methods: {
    /**
     * 加一行
     */
    pulsRow() {
      var inputs = document.querySelectorAll(".table-form-input input");
      inputs[2].focus();
      inputs[2].select();
    },
    /**
     * 清除商品
     */
    clearGoodsName(index) {
      console.log(index);
    },
    /**
     * 获取数据
     */
    getDataInfo() {
      for (var i = 0; i < 30; i++) {
        this.formList.push({
          gname: "东北大白菜"+i,
          alias: "A0001"+i,
          brand: "无",
          is_machining: 1,
          num: "0",
          rough_weight: '12.00',
          then:1.13,
          cost:1,
          stock:110,
          uname_remark: "1公斤",
          uname: "公斤",
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
        {
          value: "白菜",
          address: "长宁区新渔路144号"
        },
        {
          value: "土豆",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "豆芽",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        {
          value: "鸡蛋",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        {
          value: "韭菜",
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


