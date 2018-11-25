<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>数据列设置</h1>
    </div>
    <div class="content">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="表头设置" name="first">
            <div class="tabs-title">此功能可以选择在窗口中显示列及自定义标题</div>
            <table class="ky-table">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>标题名称</th>
                        <th>显示名称</th>
                        <th>可显示</th>
                        <th>可打印</th>
                        <th>显示排序</th>
                        <th>打印排序</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in 20" :key="index">
                        <td>{{index+1}}</td>
                        <td>单据号</td>
                        <td>单据号</td>
                        <td><el-checkbox v-model="checked"></el-checkbox></td>
                        <td><el-checkbox v-model="checked"></el-checkbox></td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <div class="tabs-group">
                <el-button type="success" size="mini">保存</el-button>
            </div>
            <!-- 温馨提示 -->
            <ky-reminder></ky-reminder>
        </el-tab-pane>
        <el-tab-pane label="明细设置" name="second">
            <div class="tabs-title">此功能可以选择在窗口中显示列及自定义标题</div>
            <table class="ky-table">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>标题名称</th>
                        <th>显示名称</th>
                        <th>可显示</th>
                        <th>可打印</th>
                        <th>显示排序</th>
                        <th>打印排序</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in 20" :key="index">
                        <td>{{index+1}}</td>
                        <td>单据号</td>
                        <td>单据号</td>
                        <td><el-checkbox v-model="checked"></el-checkbox></td>
                        <td><el-checkbox v-model="checked"></el-checkbox></td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <div class="tabs-group">
                <el-button type="success" size="mini">保存</el-button>
            </div>
            <!-- 温馨提示 -->
            <ky-reminder></ky-reminder>
        </el-tab-pane>
        <el-tab-pane label="自定义列管理" name="third">
            <div class="con-wrap">
                <div class="con-wrap-box">
                    <label>列名：</label>
                    <el-input class="search-input" size="small" placeholder="如：毛利" v-model="input1"></el-input> 
                </div>
                <div class="con-wrap-box">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="可显示"></el-checkbox>
                        <el-checkbox label="可打印"></el-checkbox>
                        <el-checkbox label="可编辑"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="con1-wrap">
                <el-radio-group v-model="radio2">
                    <el-radio :label="3">空列</el-radio>
                    <el-radio :label="6">数据列</el-radio>
                    <el-radio :label="9">计算列</el-radio>
                </el-radio-group>
            </div>
            
            <div class="con1-wrap">
                <p>自定义表达式：</p>
                <el-input class="bds-input" size="small" placeholder="毛利=销售金额－成本金额" v-model="input2"></el-input> 
            </div>
            <div class="con1-wrap">
                <p>自定义计算器：</p>
                <div class="con1-calculator">
                    <div>
                        <el-select  class="con1-select" size="small" clearable  v-model="selValue" placeholder="请选择列">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div>
                        <el-input class="con1-input" size="small" placeholder="如：毛利" v-model="input3"></el-input> 
                    </div>
                    <div class="con1-box">
                        <el-button size="mini">+</el-button>
                        <el-button size="mini">-</el-button>
                        <el-button size="mini">*</el-button>
                        <el-button size="mini">/</el-button>
                        <el-button size="mini">%</el-button>
                        <el-button size="mini">(</el-button>
                        <el-button size="mini">)</el-button>
                    </div>
                    <div class="con1-box">
                        <el-button class="btn" size="mini">确定</el-button>
                        <el-button class="btn" size="mini">返回</el-button>
                        <el-button class="btn" size="mini">清空</el-button>
                    </div>
                </div>
            </div>
            <div class="tabs-group">
                <el-button type="success" size="mini">保存</el-button>
            </div>
            <!-- 温馨提示 -->
            <ky-reminder></ky-reminder>
        </el-tab-pane>
    </el-tabs>
    </div>
  </div>
  
</template>
<script>
import kyReminder from "@/components/ky-reminder";
export default {
  data() {
    return {
      selValue: null,
      input1: null,
      input2: null,
      input3: null,
      radio2: 2,
      activeName2: "first",
      checked: true,
      checkList: ["可显示", "可打印", "可编辑"],
      options1: [
        {
          value: "选项2",
          label: "商品名称"
        },
        {
          value: "选项3",
          label: "单位"
        },
        {
          value: "选项4",
          label: "单价"
        },
        {
          value: "选项5",
          label: "库存数"
        }
      ]
    };
  },
  components: {
    kyReminder
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
.tabs-title {
  margin: 20px 0;
  font-size: 14px;
  color: $cColor;
}
.tabs-group {
  padding: 20px 0 0;
  text-align: center;
}
.ky-table {
  width: 700px;
}
.con-wrap{
    background-color: $bjhColor;
    width: 310px;
}
.con-wrap-box{
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.con1-wrap{
    margin:20px 0;
    p{
        color: $zColor;
        margin-bottom:13px;
        font-size:14px;
    }
    .bds-input{
        width: 500px;
    }
    .con1-calculator{
        width: 310px;
        background-color: $bjhColor;
        padding:10px 20px;
        box-sizing: border-box;
    }
    .con1-select,.con1-input{
        width: 220px;
        margin:5px 0;
    }
    .con1-box{
        display: flex;
        flex-wrap: wrap;
        margin:5px 0;
         button{
            width: 30px;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            padding:0;
            border:1px solid $wbkColor;
            border-radius:3px;
            color: $tcColor;
        }
        .btn{
            width: auto;
            padding:0 20px;
        }
    }
}
</style>


