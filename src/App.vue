<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>


<style lang="scss" >
@import "common/css/color.scss";
@import "common/css/base.css";
@import "common/font/iconfont.css";
@import "common/css/main.css";
#app {
  height: 100%;
}
</style>
