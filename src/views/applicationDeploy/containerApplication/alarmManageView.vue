<template>
  <div class="alarmManageView">
    <el-card class="alarmContainer">
      <div slot="header" class="clearfix">
        <el-page-header
          @back="$router.back()"
          content="告警管理查看"
        ></el-page-header>
      </div>
      <el-form
        ref="form"
        label-position="left"
        :model="viewForm"
        label-width="140px"
        style="margin-left:32px"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="告警ID：">
              <span>{{ viewForm.alarmId }}</span>
            </el-form-item>
            <el-form-item label="任务名称：">
              <span>{{ viewForm.taskName }}</span>
            </el-form-item>
            <el-form-item label="任务logo：">
              <span>{{ viewForm.logo }}</span>
            </el-form-item>
            <el-form-item label="任务id：">
              <span>{{ viewForm.taskId }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12"
            ><el-form-item label="告警类型：">
              <span>{{ viewForm.alarmType }}</span>
            </el-form-item>
            <el-form-item label="告警来源：">
              <span>{{ viewForm.alarmSource }}</span>
            </el-form-item>
            <el-form-item label="上报时间：">
              <span>{{ viewForm.reportTime }}</span>
            </el-form-item>
            <el-form-item label="告警时间：">
              <span>{{ viewForm.alarmTime }}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "alarmManageView",
  components: {},
  props: {},
  data() {
    return {
      viewForm: {
        // alarmId: "1",
        // taskName: "zs",
        // taskId: "444",
        // alarmType: "eee",
        // alarmSource: "ddd",
        // reportTime: "12:00",
        // alarmTime: "14:00"
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    this.viewForm = this.$route.query;
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.alarmContainer {
  height: 580px;
  overflow: auto;
}
</style>
