<template>
  <div class="detailsManage">
    <el-card>
      <div slot="header" class="clearfix">
        <el-page-header @back="$router.back()" content="详情"></el-page-header>
      </div>
      <!-- 上部分表单写 -->
      <h2 style="font-size: 20px;margin-left:32px">BACnet设备连接器-AMD64</h2>
      <el-form
        ref="form"
        label-position="left"
        :model="detailsForm"
        label-width="160px"
        style="margin-left:32px"
      >
        <el-col :span="8"
          ><el-form-item label="应用ID：">
            <span>{{ detailsForm.ID }}</span>
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
        <!-- </el-form-item> -->
        <el-form-item label="实例数（正常/全部）：">
          <span>{{ detailsForm.instancesNum }}</span>
        </el-form-item>
        <el-form-item label="描述：">
          <span>{{ detailsForm.dec }}</span>
        </el-form-item>
      </el-form>
      <!-- 下半部分tab栏写 -->
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
import instanceList from "../tab/instanceList";
import parameterConfig from "../tab/parameterConfig";
import DetailTab from "@/components/DetailTab";
export default {
  name: "detailsManage",
  components: {
    DetailTab,
    instanceList,
    parameterConfig
  },
  props: {},
  data() {
    return {
      currentView: "instanceList",
      tabOption: [
        {
          label: "实例列表", //tab组件中的名字
          name: "instanceList", // tab组件的对应项
          view: ""
        },
        {
          label: "参数配置",
          name: "parameterConfig",
          view: ""
        }
      ],
      detailsForm: {
        ID: "285",
        createTime: "2021-01-19 14:40:34",
        updateTime: "2021-01-19 14:40:34",
        instancesNum: "0/1",
        dec: "-"
      }
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
.detailsManage {
  height: 580px;
  overflow: auto;
}
/deep/.demo-table-expand {
  font-size: 0;
}
/deep/.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
/deep/.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
