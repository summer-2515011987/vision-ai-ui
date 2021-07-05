<template>
  <div class="node-container">
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
      <!--  -->
      <detail-tab
        :tabOption="tabOption1"
        :currentView="currentView1"
        @click="swtichTab1"
        style="background:#fff;margin:20px;"
      >
        <div :slot="currentView1">
          <template v-for="item in tabOption1">
            <component
              v-if="currentView1 == item.name"
              :is="item.name"
              :key="item.name"
              :ref="item.name"
            ></component>
          </template>
        </div>
      </detail-tab>
    </el-card>
    <!-- tab2 -->
    <!-- <el-card class="NodeStatus"> </el-card> -->
  </div>
</template>

<script>
import DetailTab from "@/components/DetailTab";
import edgeNodeDetails from "./components/edgeNodeDetails";
// import edgeNodeConfig from "./components/edgeNodeConfig";
import edgeNodeStatus from "./components/edgeNodeStatus"; //1
import edgeNodelist from "./components/edgeNodelist";
import taskList from "./components/taskList";
export default {
  name: "",
  components: {
    DetailTab,
    edgeNodeDetails,
    // edgeNodeConfig,
    edgeNodeStatus,
    edgeNodelist,
    taskList
  },
  props: {},
  data() {
    return {
      // tab1
      currentView: "edgeNodeDetails",
      tabOption: [
        {
          label: "边缘节点详情", //tab组件中的名字
          name: "edgeNodeDetails", // tab组件的对应项
          view: ""
        },
        {
          label: "边缘节点配置",
          name: "edgeNodeConfig",
          view: ""
        }
      ],
      // tab2
      currentView1: "edgeNodeStatus",
      tabOption1: [
        {
          label: "边缘节点状态", //tab组件中的名字
          name: "edgeNodeStatus", // tab组件的对应项
          view: ""
        },
        {
          label: "内置应用列表",
          name: "edgeNodelist",
          view: ""
        },
        {
          label: "任务列表",
          name: "taskList",
          view: ""
        }
      ]
    };
  },
  computed: {},
  // watch: {
  //     firstName(newName, oldName) {
  //         this.fullName = newName + ' ' + this.lastName;
  //         console.log('this.fullName', this.fullName)
  //     }
  // },
  created() {},
  mounted() {},
  methods: {
    swtichTab(tab) {
      this.currentView = tab.name;
      if (this.currentView == "edgeNodeConfig") {
        this.$router.push("/home/edgeNodeConfig");
      }
    },
    swtichTab1(tab) {
      this.currentView1 = tab.name;
    }
  }
};
</script>

<style scoped lang="less">
.NodeStatus {
  margin-top: 20px;
}
.box-card {
  height: 580px;
  overflow: auto;
}
</style>
