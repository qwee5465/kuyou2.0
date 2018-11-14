<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
import base from "@/common/script/base.js";

export default {
  name: "App",
  mounted(){
    base.init();
  },
};
</script>


<style lang="scss" >
@import "common/css/color.scss";
@import "common/css/base.scss";
@import "common/font/iconfont.css";
@import "common/css/resetElement.scss";
@import "common/css/main.scss";
#app {
  height: 100%;
}
</style>
