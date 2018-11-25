<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>权限管理</h1>
    </div>
    <div class="content">
      <div class="con-group">
          <div class="one-power">
            <el-radio v-model="radio" label="1">概括<i class="el-icon-arrow-down"></i></el-radio>
            <div class="two-power">
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
      </div>
      <div class="con-group">
          <div class="one-power">
            <el-radio v-model="radio" label="1">信息<i class="el-icon-arrow-down"></i></el-radio>
            <div class="two-power">
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
      </div>
      <div class="con-group">
          <div class="one-power">
            <el-radio v-model="radio" label="1">入库<i class="el-icon-arrow-down"></i></el-radio>
            <div class="two-power">
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
      </div>
      <div class="con-group">
          <div class="one-power">
            <el-radio v-model="radio" label="1">订单<i class="el-icon-arrow-down"></i></el-radio>
            <div class="two-power">
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
      </div>
      <div class="ky-form-group text-center">
        <el-button type="success" size="mini">保存</el-button>
        <el-button size="mini" @click="goBack()">返回</el-button>
      </div>
      <!-- 温馨提示 -->
      <ky-reminder></ky-reminder>
    </div>
  </div>
  
</template>
<script>
import kyReminder from "@/components/ky-reminder";

export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["公告", "日志"],
      cities: ['公告', '日志', '提醒', '系统概括','走势图'],
      isIndeterminate: true
    };
  },
  components:{
    kyReminder
  },
  methods: {
    /**
     * 返回
     */
    goBack(){
      this.$router.go(-1);
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
  .con-group{
    width: calc(100% - 250px);
    padding:50px 50px 0;
    box-sizing: border-box;
    .one-power{ 
      .el-icon-arrow-down{
        margin-left:10px;
      }
      .el-checkbox{
        margin-left:50px
      }
      .two-power{
        margin:10px 0;

        .el-checkbox{
          margin-top:10px;
          margin-bottom:10px;
        }
      }
    }
  }
  
}
</style>


