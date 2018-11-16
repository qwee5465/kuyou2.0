<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>供应商类型</h1>
    </div>
    <div class="content">
      <div class="search-wrap">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">类型名称：</label>
              <el-input class="search-input" size="small" placeholder="请输入单位名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button class="search-btn" type="success" size="mini">搜索</el-button>
            <el-button @click="addTypeInfo(1)" class="search-btn" type="primary" size="mini">新增</el-button>
          </li>
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="ky-table-warp">
        <table class="ky-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>类型名称</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
              <template v-for="(item,index) in list">
                <tr>
                  <td>{{index+1}}</td>
                  <td class="text-left">
                    <a @click="setTwoShow(index)" href="javascript:;">
                      {{item.name}}&nbsp;&nbsp;<i v-if="item.list.length>0" class="el-icon-caret-bottom"></i></a>
                  </td>
                  <td><a class="ky-table-handle" @click="addTypeInfo(2,item.name)" href="javascript:;">+子类</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="ky-table-handle" href="javascript:;">编辑</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a  class="ky-table-handle" href="javascript:;">删除</a></td>
                </tr>
                <template v-for="(vo,key) in item.list">
                  <tr v-show="item.show">
                    <td></td>
                    <td class="text-left" style="padding-left:60px;">
                      <a @click="setThreeShow(index,key)" href="javascript:;">
                        ├──{{vo.name}}&nbsp;&nbsp;<i v-if="vo.list.length>0" class="el-icon-caret-bottom"></i></a>
                    </td>
                    <td><a class="ky-table-handle" @click="addTypeInfo(3,item.name,vo.name)" href="javascript:;">+子类</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="ky-table-handle" href="javascript:;">编辑</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a  class="ky-table-handle" href="javascript:;">删除</a></td>
                  </tr>
                  <template v-for="(v,k) in vo.list">
                    <tr v-show="vo.show">
                      <td></td>
                      <td class="text-left"  style="padding-left:120px;"><a href="javascript:;">├──{{v.name}}</a></td>
                      <td><a class="ky-table-handle" href="javascript:;">编辑</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a  class="ky-table-handle" href="javascript:;">删除</a></td>
                    </tr>
                  </template>
                </template>
              </template>
          </tbody>
        </table>
      </div> 
      <!-- 新增一级 -->
      <el-dialog title="新增类型" width="350px" :visible.sync="showDialog">
        <div class="form-wrap">
          <div class="form-group" v-if="typeLevel>1">
            <label>一级类型：</label>
            <span class="form-text">{{oneName}}</span>
          </div>
          <div class="form-group" v-if="typeLevel>2">
            <label>二级类型：</label>
            <span class="form-text">{{twoName}}</span>
          </div>
          <div class="form-group">
            <label>类型名称：</label>
            <el-input class="form-input" size="small" v-model="typeName" placeholder="请输入类型名称"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="showDialog = false">取 消</el-button>
          <el-button type="success" size="mini" @click="showDialog = false">确 定</el-button>
        </div>
      </el-dialog> 
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      typeName: null,
      input2: null,
      showDialog: false, //一级分类dialog
      twoName: null,
      oneName: null,
      typeLevel: 1, // 类型级别
      list: [
        {
          name: "蔬菜类",
          show: false,
          list: []
        },
        {
          name: "蔬菜类",
          show: true,
          list: [
            {
              name: "常用类",
              show: false,
              list: []
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                }
              ]
            },
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                }
              ]
            },
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                }
              ]
            },
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        },
        {
          name: "蔬菜类",
          show: false,
          list: [
            {
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    /**
     * 新增
     */
    addTypeInfo: function(index, oneName, twoName) {
      this.showDialog = true;
      this.typeLevel = index;
      if (oneName) this.oneName = oneName;
      if (twoName) this.twoName = twoName;
    },
    /**
     * 显示二级类
     */
    setTwoShow(index) {
      if (this.list[index].list.length > 0) {
        this.list[index].list.map((item, index) => {
          item.show = false;
        });
      }
      this.list[index].show = !this.list[index].show;
    },
    /**
     * 显示三级类
     */
    setThreeShow(index, key) {
      this.list[index].list[key].show = !this.list[index].list[key].show;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/css/color.scss";
.content {
  box-shadow: none;
}
.ky-table-warp {
  width: 50%;
}
</style>


