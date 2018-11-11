<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>系统概括</h1>
    </div>
    <div class="content">
      <ul class="survey-list">
        <!-- 经营概括 -->
        <li class="survey-item">
          <div class="suryey-title">
            <label>经营概括</label>
            <span>更新时间：2018-10-18 16:09:57</span>
          </div>
          <ul class="operate-list">
            <li class="operate-item">
              <h1 class="operate-title">客户总数</h1>
              <a class="operate-num" href="javascript:;">150</a>
              <p class="operate-other"><label>今日新增:</label><span>15</span></p>
            </li>
            <li class="operate-item">
              <h1 class="operate-title">本月销售额</h1>
              <a class="operate-num" href="javascript:;">￥15000</a>
              <p class="operate-other"><label>同比上期:</label><span>15%</span></p>
            </li>
            <li class="operate-item">
              <h1 class="operate-title">订单数</h1>
              <a class="operate-num" href="javascript:;">1000</a>
              <p class="operate-other"><label>昨日:</label><span>90</span></p>
            </li>
            <li class="operate-item">
              <h1 class="operate-title">待审核订单</h1>
              <a class="operate-num" href="javascript:;">70</a> 
            </li>
          </ul>
        </li>
        <!-- 重要消息 -->
        <li class="survey-item">
          <div class="suryey-title">
            <label>重要消息</label>
          </div>
          <p class="notice-box">这里是一条重要信息，这里是一条重要信息，这里是一条重要信息...</p>
          <p class="notice-box">这里是一条重要信息，这里是一条重要信息，这里是一条重要信息...</p>
          <p class="notice-box">这里是一条重要信息，这里是一条重要信息，这里是一条重要信息...</p>
          <p class="notice-box">这里是一条重要信息，这里是一条重要信息，这里是一条重要信息...</p>
          <p class="notice-box">这里是一条重要信息，这里是一条重要信息，这里是一条重要信息...</p>
        </li>
        <!-- 公告 -->
        <li class="survey-item">
          <div class="suryey-title">
            <label>公告</label>
            <span>更多</span>
          </div>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
        </li>
        <!-- 操作日志 -->
        <li class="survey-item">
          <div class="suryey-title">
            <label>操作日志</label>
          </div>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
          <p class="notice-box">这里是一条公告，这里是一条公告，这里是一条公告...</p>
        </li>
      </ul>
    </div>
  </div>
  
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  background-color: $bjhColor;
  box-shadow: none;
}
.survey-list {
  display: flex;
  flex-wrap: wrap;
}
.survey-item {
  width: calc(50% - 10px);
  background-color: #fff;
  padding: 15px 20px;
  margin: 0 5px 10px;
  box-sizing: border-box;
}
.suryey-title {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.suryey-title label {
  flex: 1;
  font-size: 16px;
  font-weight: 900;
  color: #333;
}
.suryey-title span {
  flex: 1;
  text-align: right;
  font-size: 12px;
  color: #999;
}
.operate-list {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.operate-item {
  width: 25%;
  text-align: left;
}
.operate-title {
  margin-bottom: 5px;
}
.operate-num {
  margin-bottom: 5px;
  font-size: 22px;
  color: $acColor;
  text-align: center;
}
.operate-other label,
.operate-other span {
  font-size: 11px;
  color: $cColor;
}
.notice-box {
  font-size: 12px;
  line-height: 22px;
  color: $cColor;
}
</style>


