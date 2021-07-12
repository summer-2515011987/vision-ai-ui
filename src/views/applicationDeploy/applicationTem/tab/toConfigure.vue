<template>
  <div class="toConfigure">
    <!-- form表单 -->
    <el-form
      label-position="left"
      label-width="100px"
      :model="configForm"
      ref="ruleForm"
      v-loading="listLoading"
    >
      <el-form-item label="基本信息" class="baseNews"></el-form-item>
      <el-form-item label="视频接入类型:">
        <span>{{ configForm.videoType }}</span>
      </el-form-item>
      <el-form-item label="摄像头ID:">
        <span>{{ configForm.cameraId }}</span>
      </el-form-item>
      <el-form-item label="摄像头名称:">
        <span>{{ configForm.cameraName }}</span>
      </el-form-item>
      <el-form-item label="抽帧间隔:">
        <span>{{ configForm.frame }}</span>
      </el-form-item>
    </el-form>
    <!-- table表格 -->
    <div class="tableBtn">
      <span>可用节点</span
      ><el-button type="primary" size="small" style="margin-left:20px"
        >刷新</el-button
      >
    </div>
    <el-table :data="configData" style="width: 100%" border>
      <el-table-column prop="nodeName" label="节点名称"> </el-table-column>
      <el-table-column prop="nodeDec" label="节点描述"> </el-table-column>
      <el-table-column prop="nodeLabel" label="节点标签">
        <template slot-scope="scope">
          <el-tag
            size="medium"
            class="tagLabel"
            v-for="(item, index) in scope.row.nodeLabel"
            :key="index"
            >{{ item.label }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "toConfigure",
  components: {},
  props: {},
  data() {
    return {
      configForm: {
        videoType: "视频流",
        cameraId: "xxx",
        cameraName: "yyyy",
        frame: "30"
      },
      configData: [
        {
          nodeName: "aa",
          nodeDec: "ffff",
          nodeLabel: [{ label: "111" }, { label: "222" }, { label: "333" }]
        }
      ],
      listLoading: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.baseNews /deep/.el-form-item__label {
  width: 120px;
  font-weight: bold;
  font-size: 16px;
}
.tagLabel {
  margin-right: 10px;
}
.tableBtn {
  span {
    font-weight: bold;
  }
  margin-bottom: 20px;
}
</style>
