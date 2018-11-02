<template> 
  <div class="container">
    <!-- 标题部分 -->
    <div class="ky-title">
      <h1>商品类型</h1>
    </div>
    <div class="content">
      <div class="search-warp">
        <!-- 搜索盒子 -->
        <ul class="search-list">
          <li class="search-item">
              <label class="search-label">类型名称：</label>
              <el-input class="search-input" size="small" placeholder="请输入单位名称" v-model="input2"></el-input> 
          </li>
          <li class="search-item">
            <el-button type="success" size="mini">搜索</el-button>
          </li>
          <li class="search-item">
            <el-button type="primary" size="mini">新增</el-button>
          </li>
        </ul>
      </div>
      <!-- 列表盒子 -->
      <div class="list-warp">
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
                  <td class="text-left"><a :class="[item.list.length>0?'main-color':'']"  @click="setTwoShow(index)" href="javascript:;">{{item.name}}</a></td>
                  <td><a class="main-color" href="javascript:;">编辑</a>&nbsp;|&nbsp;<a  class="main-color" href="javascript:;">删除</a></td>
                </tr>
                <template v-for="(vo,key) in item.list">
                  <tr v-if="item.show">
                    <td></td>
                    <td class="text-left" style="padding-left:60px;"><a :class="[vo.list.length>0?'main-color':'']"  @click="setThreeShow(index,key)" href="javascript:;">{{vo.name}}</a></td>
                    <td><a class="main-color" href="javascript:;">编辑</a>&nbsp;|&nbsp;<a  class="main-color" href="javascript:;">删除</a></td>
                  </tr>
                  <template v-for="(v,k) in vo.list">
                    <tr v-if="vo.show">
                      <td></td>
                      <td class="text-left"  style="padding-left:120px;"><a href="javascript:;">{{v.name}}</a></td>
                      <td><a class="main-color" href="javascript:;">编辑</a>&nbsp;|&nbsp;<a  class="main-color" href="javascript:;">删除</a></td>
                    </tr>
                  </template>
                </template>
              </template>
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
      input2: null,
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
                },
              ]
            },{
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                },
              ]
            },{
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                },
              ]
            },{
              name: "常用类",
              show: false,
              list: [
                {
                  name: "毛毛菜"
                },
                {
                  name: "毛毛菜"
                },
              ]
            },
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
     * 显示二级类
     */
    setTwoShow(index){
      if(this.list[index].list.length>0){
        this.list[index].list.map((item,index)=>{
          item.show = false;
        })
      }
      this.list[index].show = !this.list[index].show;

    },
    /**
     * 显示三级类
     */
    setThreeShow(index,key){
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
.list-warp {
  width: 50%;
}
</style>


