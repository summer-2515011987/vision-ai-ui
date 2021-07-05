<template>
  <div class="marketDetail">
    <el-card class="marketDetailContainer">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>能力商店详情
      </div>
      <div class="marketDetailTop">
        <img src="" alt="" />
        <div class="connet">
          <img src="../../assets/images/home/headerLeftNew.png" alt="" />
          <div class="connetTwo">
            <div class="connetThree">
              <span>BACnet设备连接器-AMD64</span>
              <span>
                <i class="el-icon-view"></i>111
                <i class="el-icon-star-off"></i>222
              </span>
            </div>
            <!-- 版本 -->
            <el-row class="cpuArchi">
              <el-col :span="24"
                ><div>
                  <span style="margin-right:16px">版本</span>5.2.3
                </div></el-col
              >
            </el-row>
            <!--cpu架构  -->
            <el-row :gutter="20" class="cpuArchi">
              <el-col :span="12"
                ><div>
                  cpu架构<span style="margin-left:16px">AMD64</span>
                </div></el-col
              >
              <el-col :span="12"
                ><div>
                  <span style="margin-right:16px;">类型</span>物联网
                </div></el-col
              >
            </el-row>
            <!-- 行业 -->
            <el-row :gutter="20" class="cpuArchi">
              <el-col :span="12"
                ><div>
                  行业<span style="margin-left:20px;font-weight:500"
                    >工业制造</span
                  >
                </div></el-col
              >
              <el-col :span="12"
                ><div class="grid-content bg-purple">
                  <span style="margin-right:20px">更新时间</span
                  ><strong>2020-12-14 16:00:10</strong>
                </div></el-col
              >
            </el-row>
            <!-- 该应用 -->
            <el-row class="cpuArchi">
              <el-col :span="24"
                ><div class="grid-content bg-purple-dark">
                  该应用为楼宇润发太过分了减肥发ijrggdf绝地反击
                  该应用为楼宇润发太过分了减肥发ijrggdf绝地反击
                  该应用为楼宇润发太过分了减肥发ijrggdf该应用为
                  楼宇润发太过分了减肥发ijrggdf绝地反击
                  该应用为楼宇润发太过分了减肥发ijrggdf绝地反击
                  该应用为楼宇润发太过分了减肥发ijrggdf
                </div></el-col
              >
            </el-row>
            <!-- 按钮 -->
            <el-row class="cpuArchi">
              <el-col :span="24"
                ><div class="one">
                  <i class="el-icon-star-off"></i>
                  <el-button type="primary">部署应用</el-button>
                </div></el-col
              >
            </el-row>
          </div>
        </div>
      </div>
      <!-- 第二部分 -->
      <!-- <el-card class="box-card"> -->
      <detail-tab
        :tabOption="tabOption"
        :currentView="currentView"
        @click="swtichTab"
        style="background:#fff;margin:20px;"
      >
        <div :slot="currentView">
          <template v-for="item in tabOption">
            <component
              v-if="currentView == item.name"
              :is="item.name"
              :key="item.name"
              :ref="item.name"
            ></component>
          </template>
        </div>
      </detail-tab>
      <!-- </el-card> -->
    </el-card>
  </div>
</template>

<script>
import DetailTab from "@/components/DetailTab";
import applicationDetails from "./components/applicationDetails";
import instructions from "./components/instructions";
import updateLog from "./components/updateLog";
export default {
  name: "marketApplicationDetail",
  components: {
    DetailTab,
    applicationDetails,
    instructions,
    updateLog
  },
  props: {},
  data() {
    return {
      currentView: "applicationDetails",
      tabOption: [
        {
          label: "应用详情", //tab组件中的名字
          name: "applicationDetails", // tab组件的对应项
          view: ""
        },
        {
          label: "使用说明",
          name: "instructions",
          view: ""
        },
        {
          label: "更新日志",
          name: "updateLog",
          view: ""
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    swtichTab(tab) {
      this.currentView = tab.name;
    }
  }
};
</script>

<style scoped lang="less">
.marketDetailContainer {
  height: 580px;
  overflow: auto;
}
.connet {
  display: flex;

  img {
    width: 100%;
    flex: 1;
    margin-right: 40px;
  }
  .connetTwo {
    flex: 6;
  }
  .connetThree {
    flex: 6;
    span:nth-child(1) {
      font-weight: 500;
      font-size: 22px;
    }
    span:nth-child(2) {
      float: right;
      margin-right: 20px;
    }
  }
  .connetThree .el-icon-view,
  .el-icon-star-off {
    margin-right: 4px;
  }
}
.cpuArchi {
  margin-top: 20px;
}
.one .el-icon-star-off {
  font-size: 30px;
  vertical-align: middle;
  margin-right: 20px;
}
</style>
