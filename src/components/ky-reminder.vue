<!-- 
** 温馨提示组件
** @author txw 546578965@qq.com
** @date 2018/10/26
** @example <ky-reminder></ky-reminder>
-->
<template>
  <div class="ky-reminder">
    <h1 class="ky-reminder-title">温 馨 提 示</h1>
    <div class="ky-reminder-content">
      <p>
        <strong>● </strong>
      为了提供更好的服务，请认真填写资料
      </p>
      <p>
        <strong>● </strong>
     另：凡是带有“谨慎操作”提示的选项，非管理员授权的情况下，一律不允许添加。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ky-reminder",
  props: {}
};
</script>

<style lang="scss" scoped>
.ky-reminder {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  background: #feb235;
  padding-bottom: 2px;
}
.ky-reminder-title {
  color: #fff;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.ky-reminder-content {
  background: #fff;
  margin: 0 2px;
  word-wrap: break-word;
  p {
    padding: 10px;
    box-sizing: border-box;
    strong {
      color: #feb235;
    }
  }
}
</style>

