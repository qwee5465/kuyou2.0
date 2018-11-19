<template>
  <div class="ky-autocomplete">
    <input type="text" :value="currentValue" @input="handleInput"/>
    <ul class="ky-autocomplete-list" v-show="isShowList">
      <li class="ky-autocomplete-item" v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      list: [
        "【干红葡萄酒-王朝-箱】",
        "【干红葡萄酒--张裕-瓶】",
        "【土豆-无-斤】",
        "【豆芽-无-斤】",
        "【鸡蛋-无-斤】"
      ],
      showList: [],
      isShowList: false
    };
  },
  computed: {
    currentValue() {
      return this.value;
    }
  },
  mounted() {},
  methods: {
    /**
     * input 输入事件
     */
    handleInput(event) {
      var value = event.target.value;
      this.showPopup();
      this.$emit("input", value); //触发 input 事件，并传入新值
    },
    /**
     * 显示商品选择框
     */
    showPopup() {
      this.isShowList = true;
      console.log(this.isShowList);
    },
    /**
     * 隐藏商品选择框
     */
    hidePopup() {
      this.isShowList = false;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/common/css/color.scss";

.ky-autocomplete {
  position: relative;
  input {
    outline: none;
    height: 33px;
    background-color: transparent;
    border: none;
    color: $szColor;
  }
  ul {
    position: absolute;
    top: 33px;
    left: 0;
    width: 100%;
    background-color: #fff;
    li {
      list-style: none;
      padding: 10px;
      color: $szColor;
    }
  }
}
</style>

