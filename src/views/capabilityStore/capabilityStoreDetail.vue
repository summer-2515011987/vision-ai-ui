<template>
  <div class="marketDetail">
    <el-card class="marketDetailContainer">
      <div slot="header">
        <!-- <span class="el-icon-caret-right"></span>能力商店详情 -->
        <el-page-header
          @back="$router.back()"
          content="能力商店详情"
        ></el-page-header>
      </div>
      <div class="marketDetailTop">
        <div class="connet">
          <!-- <img src="../../assets/images/home/headerLeftNew.png" alt="" /> -->
          <div class="connetTwo">
            <div class="connetThree">
              <span>{{ deviceData.name }}</span>
              <!-- <span>
                <i class="el-icon-view"></i>111
                <i class="el-icon-star-off"></i>222
              </span> -->
            </div>
            <!-- 版本 -->
            <el-row class="cpuArchi">
              <el-col :span="24"
                ><div>
                  <span style="margin-right:16px">版本</span
                  >{{ deviceData.version }}
                </div></el-col
              >
            </el-row>
            <!--cpu架构  -->
            <el-row :gutter="20" class="cpuArchi">
              <el-col :span="12"
                ><div>
                  cpu架构<span style="margin-left:16px">{{
                    deviceData.cpu
                  }}</span>
                </div></el-col
              >
              <el-col :span="12"
                ><div>
                  <span style="margin-right:16px;">类型</span
                  >{{ deviceData.imageType }}
                </div></el-col
              >
            </el-row>
            <!-- 行业 -->
            <el-row :gutter="20" class="cpuArchi">
              <el-col :span="12"
                ><div>
                  行业<span style="margin-left:20px;font-weight:500">{{
                    deviceData.trade
                  }}</span>
                </div></el-col
              >
              <el-col :span="12"
                ><div class="grid-content bg-purple">
                  <span style="margin-right:20px">更新时间</span
                  ><strong>{{ deviceData.updateTime }}</strong>
                </div></el-col
              >
            </el-row>
            <!-- 该应用 -->
            <el-row class="cpuArchi">
              <el-col :span="24"
                ><div class="grid-content bg-purple-dark">
                  {{ deviceData.brief }}
                </div></el-col
              >
            </el-row>
            <!-- 按钮 -->
            <el-row class="cpuArchi">
              <el-col :span="24"
                ><div class="one">
                  <!-- <i class="el-icon-star-off"></i> -->
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
      deviceData: {},
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
  created() {
    this.deviceData = this.$route.query;
  },
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
.marketDetailTop {
  margin-left: 32px;
}
</style>
