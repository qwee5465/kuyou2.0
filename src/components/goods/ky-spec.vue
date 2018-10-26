<!-- 
** 温馨提示组件
** @author txw 546578965@qq.com
** @date 2018/10/26
** @params list [Array] 规格数据
** @params defaultText [String] 默认单位名称 默认值斤
** @example <ky-spec></ky-spec>
-->
<template>
  <div class="ky-spec">
    <div class="ky-spec-title">
        <p>内装数,必需大于0.001(如：1箱=10斤 )</p>
        <el-button type="primary" @click="addSpec()" size="mini">+</el-button>
    </div>
    <table class="ky-table">
      <thead>
          <tr>
            <th>单位</th>
            <th style="width:80px;">操作</th>
            <th>内装数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>
              1<el-autocomplete
                clearable
                size="small"
                class="inline-input ky-spce-autocomplete"
                v-model="item.value"
                :fetch-suggestions="querySearch" 
                placeholder="单位"
                @select="handleSelect"
              ></el-autocomplete>
            </td>
            <td>=</td>
            <td><el-input class="ky-spce-input" size="small"  v-model="item.uname"></el-input>{{defaultText}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "ky-spec",
  props: {
    list: {
      type: Array
    },
    defaultText: {
      type: String,
      default: "斤"
    }
  },
  data() {
    return {
      restaurants: [],
      state1: "",
      input2: null
    };
  },
  methods: {
    /**
     * 添加内装单位
     */
    addSpec() {
      this.list.push({ value: "", uname: "" });
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
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 1, value: "斤" },
        { id: 2, value: "公斤" },
        { id: 3, value: "箱" },
        { id: 4, value: "袋" }
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
.ky-spec {
  min-height: 190px;
  margin-left: 30px;
  background-color: #eeeeee;
}
.ky-spec-title {
  padding-left: 10px;
  display: flex;
  align-items: center;
  p {
    margin-right: 150px;
    color: #333;
  }
}
.ky-spce-autocomplete {
  width: 80px;
  margin-left: 10px;
  text-align: center;
}
.ky-spce-input {
  width: 80px;
  text-align: center;
  margin-right: 10px;
}
</style>

