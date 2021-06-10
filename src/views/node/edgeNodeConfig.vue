<template>
  <div class="edgeNodeConfig">
    <createBtn titleText="边缘节点配置" buttonText="刷新" @create="addHost" />
    <el-card class="box-card">
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
import createBtn from "@/components/createBtn";
import DetailTab from "@/components/DetailTab";
import operationLog from "./components/operationLog";
import deploymentLog from "./components/deploymentLog";
export default {
  name: "edgeNodeConfig",
  components: {
    createBtn,
    DetailTab,
    operationLog,
    deploymentLog
  },
  props: {},
  data() {
    return {
      currentView: "operationLog",
      tabOption: [
        {
          label: "运行日志", //tab组件中的名字
          name: "operationLog", // tab组件的对应项
          view: ""
        },
        {
          label: "部署日志",
          name: "deploymentLog",
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
    addHost() {
      console.log("刷新");
    },
    swtichTab(tab) {
      this.currentView = tab.name;
    }
  }
};
</script>

<style scoped lang="less">
.edgeNodeConfig {
  .box-card {
    margin-top: 20px;
  }
}
</style>
