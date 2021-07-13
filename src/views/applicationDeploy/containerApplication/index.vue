<template>
  <div class="alarmManage">
    <el-card class="alarm-container">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>告警管理
      </div>
      <!-- form -->
      <el-form
        :inline="true"
        :model="listQuery"
        ref="listQuery"
        class="demo-form-inline"
        style="text-align:left;"
      >
        <el-row :gutter="20">
          <el-col :span="9"
            ><el-form-item label="请选择告警开始时间：" prop="startTime">
              <div class="block">
                <!-- <span class="demonstration">默认</span> -->
                <el-date-picker
                  v-model="listQuery.startTime"
                  type="datetime"
                  placeholder="请选择开始时间"
                >
                </el-date-picker>
              </div> </el-form-item
          ></el-col>
          <el-col :span="9"
            ><el-form-item label="请选择告警结束时间：" prop="endTime">
              <div class="block">
                <!-- <span class="demonstration">默认</span> -->
                <el-date-picker
                  v-model="listQuery.endTime"
                  type="datetime"
                  placeholder="请选择结束时间"
                >
                </el-date-picker>
              </div> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-button
              type="primary"
              @click="handleSearchList(listQuery)"
              class="searchBtn"
              size="small"
              >查询</el-button
            >
            <el-button size="small" @click="resetForm('listQuery')"
              >重置</el-button
            >
            <el-button type="text" @click="expand">{{
              isExpand ? "收起" : "展开"
            }}</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20" v-if="isExpand">
          <el-col :span="8"
            ><el-form-item label="任务名称：" prop="taskName">
              <el-input v-model="listQuery.taskName"></el-input> </el-form-item
          ></el-col>
          <el-col :span="8"
            ><el-form-item label="任务ID：" prop="taskId">
              <el-input v-model="listQuery.taskId"></el-input> </el-form-item
          ></el-col>
          <el-col :span="8"
            ><el-form-item label="告警类型：" prop="categoryOptions">
              <el-select
                v-model="listQuery.categoryOptions"
                placeholder="告警类型"
                clearable
              >
                <el-option
                  v-for="item in categoryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        height="250"
        style="width: 100%;margin-top:10px"
        class="tastTable"
      >
        <el-table-column prop="alarmId" label="告警ID"> </el-table-column>
        <el-table-column prop="taskName" label="任务名称"> </el-table-column>
        <el-table-column prop="taskId" label="任务id"> </el-table-column>
        <el-table-column prop="alarmType" label="告警类型"> </el-table-column>
        <el-table-column prop="alarmSource" label="告警来源"> </el-table-column>
        <el-table-column prop="reportTime" label="上报时间"> </el-table-column>
        <el-table-column prop="alarmTime" label="告警时间"> </el-table-column>
        <el-table-column label="操作" align="center" width="160px">
          <template slot-scope="scope">
            <el-link @click="toView(scope.row)" type="primary">查看</el-link>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
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
    </el-card>
  </div>
</template>

<script>
export default {
  name: "alarmManage",
  components: {},
  props: {},
  data() {
    return {
      isExpand: false,
      listQuery: {},
      categoryOptions: [{ value: "111", label: "测试1" }],
      tableData: [
        {
          alarmId: "1",
          taskName: "zs",
          taskId: "444",
          alarmType: "eee",
          alarmSource: "ddd",
          reportTime: "12:00",
          alarmTime: "14:00"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 分页开始---
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
    },
    getList() {},
    // 分页结束---
    // 查看
    toView(data) {
      this.$router.push({
        path: "/home/alarmManageView",
        query: data
      });
    },
    handleSearchList(data) {
      console.log("搜索全部告警内容", data);
    },
    expand() {
      this.isExpand = !this.isExpand;
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.alarm-container {
  height: 580px;
  overflow: auto;
}
</style>
