<template>
  <div class="ky-autocomplete">
    <input type="text" :value="currentValue" @keydown="handleKeydown" @input="handleInput"/>
    <ul 
        :style="{maxHeight:max+'px'}" 
        class="ky-autocomplete-list" 
        v-if="isShowList">
      <li 
        class="ky-autocomplete-item" 
        :class="[index==currentItem?'current':'']" 
        v-for="(item,index) in list" 
        @click="selectGoods(index)"
        :key="index" >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    },
    max: {
      //选择框的最大高度 单位 默认px
      type: Number,
      default: 190
    }
  },
  data() {
    return {
      list: [
        "【干红葡萄酒-王朝-箱】",
        "【干红葡萄酒--张裕-瓶】",
        "【土豆-无-斤】",
        "【豆芽-无-斤】",
        "【土豆-无-公斤】",
        "【豆芽-无-公斤】",
        "【鸡蛋-无-斤】"
      ],
      showList: [],
      currentItem: 0,
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
     * input 键盘按下事件
     */
    handleKeydown(evt) {
      switch (evt.keyCode) {
        case 40: //下箭头
          this.currentItem =
            this.currentItem == this.list.length - 1 ? 0 : this.currentItem + 1;
          this.setListScrollTop(evt.target);
          break;
        case 39: //右
          this.hidePopup();
          break;
        case 37: //左
          // this.hidePopup();
          break;
        case 38: //上箭头
          this.currentItem =
            this.currentItem == 0 ? this.list.length - 1 : this.currentItem - 1;
          this.setListScrollTop(evt.target);
          break;
        case 13: //回车键
          this.selectGoods(this.currentItem);
          break;
      }
    },
    /**
     * 键盘箭头移动滚动条跟着滚动
     */
    setListScrollTop(obj) {
      //当前选中的item 元素的滚动条位置 元素的最大高度
      let ul = $(obj).siblings("ul");
      let result = (this.currentItem + 1) * 38 - this.max;
      if (result > 0) {
        ul.scrollTop(result);
      } else {
        if (Math.abs(result) == this.max - 38) {
          ul.scrollTop(0);
        }
      }
    },
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
    },
    /**
     * 隐藏商品选择框
     */
    hidePopup() {
      this.isShowList = false;
    },
    /**
     * 选择商品
     */
    selectGoods(index) {
      this.$emit("input", this.list[index]); //触发 input 事件，并传入新值
      this.hidePopup();
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
    z-index: 10;
    border: 1px solid $bgzColor;
    overflow-y: scroll;
    li {
      list-style: none;
      padding: 10px;
      color: $szColor;
      border-bottom: 1px solid $wbkColor;
      cursor: pointer;
    }
    li.current,
    li:hover {
      background-color: $bgzColor;
      color: #fff;
    }
  }
  ul::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ul::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: $wbkColor;
  }
  ul::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: $bjhColor;
  }
}
</style>

