<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>入库单－>单据详情</h1>
    </div>
    <div class="content">
         <!-- 按钮区域 -->
        <div class="btn-wrap">
            <el-button class="search-btn" @click="goBack()" type="" size="mini">返回</el-button>
        </div>
        <div class="ky-detail-dialog-wrap">
             <div class="ky-detail-dialog-title">
                <ul class="detail-list">
                <li class="detail-item-block">
                    <el-input size="small"  v-model="billName"></el-input> 
                </li>
                <li class="detail-item">
                    <label>单据号：</label>
                    <span>pr2_201801029929328</span>
                </li>
                <li class="detail-item">
                    <label>供应商：</label>
                    <span>阿呆工业</span>
                </li>
                <li class="detail-item">
                    <label>供应商电话：</label>
                    <span>15151512552</span>
                </li>
                <li class="detail-item">
                    <label>入库日期：</label>
                    <span>2018-11-21</span>
                </li>
                <li class="detail-item">
                    <label>创建时间：</label>
                    <span>2018-11-21 11:30:20</span>
                </li>
                <li class="detail-item">
                    <label>创建人员：</label>
                    <span>老王</span>
                </li>
                <li class="detail-item">
                    <label>审核时间：</label>
                    <span>2018-11-21 11:33:20</span>
                </li>
                <li class="detail-item">
                    <label>审核人员：</label>
                    <span>劳李</span>
                </li>
                <li class="detail-item">
                    <label>退货时间：</label>
                    <span>2018-11-21 11:33:20</span>
                </li>
                <li class="detail-item">
                    <label>退货人员：</label>
                    <span>老李</span>
                </li>
                <li class="detail-item">
                    <label>备注：</label>
                    <span>这是单据备注</span>
                </li>
                <li class="detail-item">
                    <label>单据金额：</label>
                    <span>2000.00</span>
                </li>
                </ul>
            </div>
        </div>
        <!-- 列表盒子 -->
        <div class="ky-table-warp">
            <table class="ky-table">
                <caption>单据日志</caption>  
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>日志内容</th>
                        <th>日志创建时间</th>
                        <th>创建人</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>操作人：xx在xxxx时间创建了单据。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>操作人：xx在xxxx时间修改了单据。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间审核了单据。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行单据改价操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>操作人：xx在xxxx时间进行了单据退货操作。</td>
                        <td>2018-11-12 11:30:00</td>
                        <td>老王</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
        billName:'杭州田旺农副产品批发'
    };
  },
  methods: {
      /**
       * 返回
       */
      goBack(){
          this.$router.go(-1);
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


