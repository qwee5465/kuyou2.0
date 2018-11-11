<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>新增供应商</h1>
    </div>
    <div class="content">
      <!-- 温馨提示 -->
      <ky-reminder></ky-reminder>
      <!-- 表单 -->
      <div class="ky-from-group">
        <label class="ky-from-label"><strong class="ky-star">* </strong>供应商名称：</label>
        <span class="ky-from-elem">
          <el-input class="ky-from-input" size="small" placeholder="请输入供应商名称" v-model="input2"></el-input>
        </span>
      </div>
      <div class="ky-from-group">
        <label class="ky-from-label"><strong class="ky-star">* </strong>电话：</label>
        <span class="ky-from-elem"><el-input class="ky-from-input" size="small" placeholder="请输入电话号码" v-model="input2"></el-input></span>
      </div>
      <div class="ky-from-group">
        <label class="ky-from-label"><strong class="ky-star">* </strong>供应商类型：</label>
        <span class="ky-from-elem">
          <el-select size="small" clearable  v-model="value" placeholder="请选择供应商类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span>
      </div>
      <div class="ky-from-group">
        <label class="ky-from-label"><strong class="ky-star">* </strong>地址：</label>
        <span class="ky-from-elem">
          <el-cascader
            size="small"
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
          ></el-cascader>
        </span>
      </div>
      <div class="ky-from-group">
        <label class="ky-from-label"><strong class="ky-star">* </strong>街道信息：</label>
        <span class="ky-from-elem"><el-input class="ky-from-input w400" size="small" placeholder="街道信息" v-model="input2"></el-input></span>
      </div>
      <div class="ky-from-group">
        <label class="ky-from-label"><strong class="ky-star">* </strong>备注：</label>
        <span class="ky-from-elem"><el-input class="ky-from-textarea" type="textarea" :rows="2" size="small" placeholder="街道信息" v-model="input2"></el-input></span>
      </div>
      <div class="ky-from-group text-center">
        <el-button type="success" size="mini">保存</el-button>
        <el-button size="mini" @click="goBack()">返回</el-button>
      </div>
    </div>
  </div>
  
</template>
<script>
import kyReminder from "@/components/ky-reminder";

export default {
  data() {
    return {
      input2: null,
      options2: [
        {
          label: "江苏",
          cities: []
        },
        {
          label: "浙江",
          cities: []
        }
      ],
      props: {
        value: "label",
        children: "cities"
      },
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
      value: ""
    };
  },
  components: {
    kyReminder
  },
  methods: {
    /**
     * 返回
     */
    goBack(){
      this.$router.go(-1);
    },
    handleItemChange(val) {
      console.log("active item:", val);
      setTimeout(_ => {
        if (val.indexOf("江苏") > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [
            {
              label: "南京"
            }
          ];
        } else if (
          val.indexOf("浙江") > -1 &&
          !this.options2[1].cities.length
        ) {
          this.options2[1].cities = [
            {
              label: "杭州"
            }
          ];
        }
      }, 300);
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


