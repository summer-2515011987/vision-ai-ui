<template>
  <div class="operationRecord">
    <el-table :data="operateData" style="width: 100%">
      <el-table-column prop="runID" label="运行记录ID"> </el-table-column>
      <el-table-column prop="runState" label="运行状态">
        <template slot-scope="scope">
          <!-- 0 运行中; 1 已完成; 2 启动失败 -->
          <span v-if="scope.row.runState == 0" class=" circleBlue"></span>
          <span v-if="scope.row.runState == 0">运行中</span>
          <span v-if="scope.row.runState == 1" class="circleGreen"></span>
          <span v-if="scope.row.runState == 1">已完成</span>
          <span v-if="scope.row.runState == 2" class="circleRed"></span>
          <span v-if="scope.row.runState == 2">启动失败</span>
        </template>
      </el-table-column>
      <el-table-column prop="RunNode" label="运行节点"> </el-table-column>
      <el-table-column prop="createTime" label="开始时间"> </el-table-column>
      <el-table-column prop="endTime" label="结束时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "operationRecord",
  components: {},
  props: {},
  data() {
    return {
      operateData: [
        {
          runID: 1,
          runState: "0",
          RunNode: "EdgeNodeA",
          createTime: "2017-10-01 12:00",
          endTime: "--"
        },
        {
          runID: 2,
          runState: "1",
          RunNode: "EdgeNodeB"
        },
        {
          runID: 3,
          runState: "2",
          RunNode: "EdgeNodeC"
        }
      ]
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
.circleRed {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #ff0000;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 6px;
}
.circleGreen {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #52c41a;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 6px;
}
.circleBlue {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #1890ff;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 6px;
}
</style>
