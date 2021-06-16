<template>
  <div class="taskList">
    <el-card class="deployCard">
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="nodeName" label="视频流名称"> </el-table-column>
        <el-table-column prop="nodeModel" label="边缘节点名称">
        </el-table-column>
        <el-table-column prop="cpuArchitecture" label="应用能力">
        </el-table-column>
        <el-table-column prop="frame" label="抽帧频率"> </el-table-column>
        <el-table-column prop="taskStatus" label="任务状态"> </el-table-column>
      </el-table>
    </el-card>
    <el-pagination
      class="footer-pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, sizes,prev, pager, next,jumper"
      :current-page.sync="listQuery.pageNum"
      :page-size="10"
      :page-sizes="[10, 15, 20]"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "taskList",
  components: {},
  props: {},
  data() {
    return {
      listQuery: {},
      tableData: [
        {
          nodeName: "20210616",
          nodeModel: "模块2",
          cpuArchitecture: "1",
          deviceid: "deviceid",
          nodeStatus: "kkk"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getList() {},
    handleSizeChange(val) {
      console.log("handleSizeChange");
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      console.log("handleCurrentChange");
      this.listQuery.pageNum = val;
      this.getList();
    }
  }
};
</script>

<style scoped lang="less">
.deployCard {
  margin-top: 20px;
}
</style>
