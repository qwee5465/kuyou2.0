<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>出库记录</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 表头盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">单据日期：</label>
              <el-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                size="small"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
          </li>
          <li class="search-item">
            <label class="search-label">单据号：</label>
            <el-input class="search-input" size="small" placeholder="如：PR2_20181101055522" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
              <label class="search-label">客户：</label>
              <el-select class="search-select" size="small" clearable  v-model="value" placeholder="全部">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
          </li>
          <li class="search-item">
              <label class="search-label">商品名称：</label>
              <el-input class="search-input" size="small" placeholder="请输入商品名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item search-item-btn">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
          </li> 
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>单据号</th>
              <th>客户</th>
              <th>单据金额</th>
              <th>录入时间</th>
              <th>审核时间</th>
              <th>审核状态</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of 10" :key="index">
              <td>{{item}}</td>
              <td class="ky-table-handle" @click="showDetail(1)">rg2_201811299123232</td>
              <td>临平中学</td>
              <td>5000</td>
              <td>2018－11－24 23:00:11</td>
              <td>2018－11－24 23:00:11</td>
              <td>未审核</td>
              <td>8点前送到</td>
              <td>
                <a class="ky-table-handle" href="javascript:;">查看</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;<a class="ky-table-handle" href="javascript:;">改价</a>
              </td>
            </tr>
          </tbody>
        </table>
        <el-dialog title="出库单据纪录明细单" width="90%" custom-class="ky-detail-dialog" :visible.sync="dialogTableVisible">
          <div class="ky-detail-dialog-wrap">
            <div class="ky-detail-dialog-btn">
              <el-button size="small" type="success">导出</el-button>
              <el-button size="small" type="success">打印</el-button> 
            </div>
            <div class="ky-detail-dialog-title">
              <ul class="detail-list">
                <li class="detail-item-block">
                  <el-input size="small" v-model="billName"></el-input> 
                </li>
                <li class="detail-item">
                    <label>单据号：</label>
                    <span>pr2_201801029929328</span>
                </li>
                <li class="detail-item">
                    <label>客户：</label>
                    <span>临平中学</span>
                </li>
                <li class="detail-item">
                  <label>客户电话：</label>
                  <span>15151512552</span>
                </li>
                <li class="detail-item">
                  <label>客户地址：</label>
                  <span>杭州市余杭区临平中学</span>
                </li>
                <li class="detail-item">
                    <label>入库日期：</label>
                    <span>2018-11-21</span>
                </li>
                <li class="detail-item">
                    <label>备注：</label>
                    <span>8点前送达，记得带红酒</span>
                </li>
                <li class="detail-item">
                    <label>审核人：</label>
                    <span>老王</span>
                </li>
                <li class="detail-item">
                    <label>验收人：</label>
                    <span>老李</span>
                </li>
                <li class="detail-item">
                    <label>送货人：</label>
                    <span>李笑笑</span>
                </li>
                <li class="detail-item">
                    <label>单据金额：</label>
                    <span>2000.00</span>
                </li>
              </ul>
            </div>
            <div class="ky-detail-dialog-content">
              <table class="ky-table">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>商品名称</th>
                    <th>别名</th>
                    <th>品牌</th>
                    <th>是否加工</th>
                    <th>单位</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>总金额</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) of 51" :key="index">
                    <td>{{item}}</td>
                    <td>鸡蛋</td>
                    <td>土鸡蛋</td>
                    <td>无</td>
                    <td>不加工</td>
                    <td>框</td>
                    <td>3</td>
                    <td>53.0</td>
                    <td>159</td>
                    <td>要土鸡蛋</td>
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
  data() {
    return {
      billName:'杭州田旺',
      dialogTableVisible: false,
      input2: null,
      states: [
        {
          label: "全部",
          value: 0
        },
        {
          label: "已审核",
          value: 1
        },
        {
          label: "未审核",
          value: 2
        }
      ],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value6: "",
      value7: "",
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      options1: [
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
  methods: {
    /**
     * 显示入库单信息
     */
    showDetail(index) {
      this.dialogTableVisible = true;
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


