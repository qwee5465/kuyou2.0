<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>商品管理</h1>
    </div>
    <div class="content">
      <div class="search-warp">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label"></label>
              <el-cascader size="small" clearable :options="options" change-on-select placeholder="全部商品类型"></el-cascader>
          </li>
          <li class="search-item">
              <label class="search-label"></label>
              <el-cascader size="small" clearable :options="options" change-on-select placeholder="全部供应商类型"></el-cascader>
          </li>
          <li class="search-item">
            <el-select size="small" clearable  v-model="value" placeholder="请选择供应商">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </li>
          <li class="search-item">
              <label class="search-label"></label>
              <el-input class="search-input" style="width: 250px;" size="small" placeholder="请输入客户名称、电话、简码" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button type="success" size="mini">搜索</el-button>
          </li>
          <li class="search-item">
            <el-button type="primary" @click="goAdd()" size="mini">新增</el-button>
          </li>
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="list-warp">
        <el-table :data="tableData" border highlight-current-row size="mini" style="width:100%;">
          <el-table-column type="index" width="70" label="序号"></el-table-column>
          <el-table-column prop="typename" label="商品类型"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
          <el-table-column prop="clienjm" label="客户简码"></el-table-column>
          <el-table-column prop="than" label="单价比"></el-table-column>
          <el-table-column prop="phone" label="联系电话"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a href="javascript:;">查看</a>&nbsp;|&nbsp;
              <a href="javascript:;">编辑</a>&nbsp;|&nbsp;
              <a href="javascript:;">删除</a>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="mt10" layout="prev, pager, next" :total="60"></el-pagination>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      input2: null,
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
      value: "",
      tableData: [
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        },
        {
          typename: "余杭南苑中心小学",
          name: "余杭南苑中心小学（教师）",
          clienjm: "南苑教师",
          than: "1.30",
          phone: "13295711583",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "加工品"
        }
      ]
    };
  },
  methods:{
    /**
     * 新增商品
     */
    goAdd(){
      this.$router.push("/goods/add");
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


