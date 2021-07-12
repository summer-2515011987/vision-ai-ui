<template>
  <div class="taskDetail">
    <el-card class="taskDetailContainer">
      <div slot="header" class="clearfix">
        <el-page-header
          @back="$router.back()"
          content="任务管理详情aaa"
        ></el-page-header>
      </div>
      <el-form
        ref="form"
        label-position="left"
        :model="detailsForm"
        label-width="80px"
        style="margin-left:32px"
      >
        <h2 style="font-size: 20px;">
          {{ detailsForm.taskName }}
        </h2>

        <el-col :span="8"
          ><el-form-item label="ID：">
            <span>{{ detailsForm.id }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><el-form-item label="创建时间：" label-width="90px">
            <span>{{ detailsForm.createTime }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><el-form-item label="更新时间：" label-width="90px">
            <span>{{ detailsForm.updateTime }}</span>
          </el-form-item>
        </el-col>

        <!-- <el-form-item label="状态：">
          <span>{{ detailsForm.status }}</span>
        </el-form-item> -->
        <!-- 状态、标签 -->
        <el-row>
          <el-col :span="8"
            ><el-form-item label="状态：" label-width="90px">
              <span>{{ detailsForm.status }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8"
            ><el-form-item label="标签：" label-width="90px">
              <span>{{ detailsForm.updateTime }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8"> <span></span></el-col>
        </el-row>

        <el-form-item label="描述：">
          <span>{{ detailsForm.dec }}</span>
        </el-form-item>
      </el-form>
      <!-- 下半部分 -->
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
    </el-card>
  </div>
</template>

<script>
import DetailTab from "@/components/DetailTab";
import toConfigure from "./tab/toConfigure";
import operationRecord from "./tab/operationRecord";
export default {
  name: "taskDetail",
  components: {
    DetailTab,
    toConfigure,
    operationRecord
  },
  props: {},
  data() {
    return {
      detailsForm: {
        ID: "285",
        taskName: "",
        createTime: "2021-01-19 14:40:34",
        updateTime: "2021-01-19 14:40:34",
        instancesNum: "0/1",
        dec: "-"
      },
      currentView: "toConfigure",
      tabOption: [
        {
          label: "配置", //tab组件中的名字
          name: "toConfigure", // tab组件的对应项
          view: ""
        },
        {
          label: "运行记录",
          name: "operationRecord",
          view: ""
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.detailsForm = this.$route.query;
    console.log("详情666", this.detailsForm);
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
.baseNews /deep/.el-form-item__label {
  width: 120px;
  font-weight: bold;
  font-size: 16px;
}
.taskDetailContainer {
  height: 580px;
  overflow: auto;
}
</style>
