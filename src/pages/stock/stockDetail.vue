<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>库存详情</h1>
    </div>
    <div class="content">
       <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">商品名称：</label>
              <el-input class="search-input" size="small" placeholder="如：兔肉" v-model="value"></el-input> 
          </li>
          <li class="search-item">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
          </li> 
        </ul>
      </div>
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>商品编码</th>
              <th>商品名称</th>
              <th>默认单位</th>
              <th>入库总数</th>
              <th>出库总数</th>
              <th>实际库存</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A0002</td>
              <td>兔肉</td>
              <td>斤</td>
              <td>100</td>
              <td>100</td>
              <td>0</td>
            </tr>
          </tbody>
        </table> 
        <table class="ky-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>入库数</th>
              <th>出库数</th>
              <th>默认单位</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>2018-10-28</td>
              <td>100</td>
              <td>100</td>
              <td>斤</td>
              <td><a class="ky-table-handle" @click='dialogTableVisible=true' href="javascript:;">查看明细</a></td>
            </tr>
          </tbody>
        </table> 
        <el-dialog title="库存明细" width="90%" custom-class="ky-detail-dialog" :visible.sync="dialogTableVisible">
          <div class="ky-detail-dialog-wrap">
            <div class="ky-detail-dialog-content">
              <table class="ky-table">
                <thead>
                  <tr>
                    <th>入库单</th>
                    <th>数量</th>
                    <th>出库单</th>
                    <th>数量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) of 4" :key="index">
                    <td>PR2_2018111212120003</td>
                    <td>25</td>
                    <td>PC2_2018111212120003</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data(){
    return{
      value:null,
      dialogTableVisible:false,
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


