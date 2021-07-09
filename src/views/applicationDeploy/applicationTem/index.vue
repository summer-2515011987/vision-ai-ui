<template>
  <div class="taskManage">
    <el-card class="task-container">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>任务管理
      </div>
      <!-- 边缘节点数量部分 -->
      <div class="textItem">
        <div class="numberNode">
          <span class="el-icon-help"></span>
          <span>
            <p>
              任务数量
            </p>
            <h3>5</h3>
          </span>
        </div>
        <div class="elButton">
          <el-button style="float:right" type="primary" @click="createTask"
            >创建任务</el-button
          >
        </div>
      </div>
      <!-- 搜索栏目部分 -->
      <div class="searchColumn">
        <el-form
          :inline="true"
          :model="listQuery"
          class="demo-form-inline"
          style="text-align:left;"
        >
          <el-form-item label="">
            <el-select
              v-model="listQuery.categoryId"
              placeholder="标签"
              clearable
              class="input-width"
            >
              <el-option
                v-for="item in categoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select
              v-model="listQuery.categoryId"
              placeholder="任务名称"
              clearable
              class="input-width"
            >
              <el-option
                v-for="item in categoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="listQuery.nameKeyword"
              class="input-width"
              placeholder="请输入搜索内容"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleSearchList(listQuery.nameKeyword)"
              class="searchBtn"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table
          :data="tableData"
          height="250"
          style="width: 100%"
          class="tastTable"
        >
          <el-table-column prop="taskName" label="任务名称" width="130px">
          </el-table-column>
          <el-table-column prop="taskId" label="任务ID" width="130px">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="130px">
          </el-table-column>
          <el-table-column prop="labelStatus" label="标签" width="150px">
            <template slot-scope="scope">
              <el-tag>{{ scope.row.labelStatus }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="160px">
          </el-table-column>
          <el-table-column prop="updateTime" label="更新时间" width="160px">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-link @click="toDetail(scope.row)" type="primary"
                >详情</el-link
              >
              <el-divider direction="vertical"></el-divider>
              <el-link @click="editItem(scope.row)" type="primary"
                >编辑</el-link
              >
              <el-divider direction="vertical"></el-divider>
              <el-link @click="stop(scope.row)" type="primary">停止</el-link>
              <el-divider direction="vertical"></el-divider>
              <el-link type="danger" @click="deleteItem(scope.row)"
                >删除</el-link
              >
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
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "taskManage",
  components: {},
  props: {},
  data() {
    return {
      listQuery: {},
      tableData: [
        {
          id: 1,
          taskName: "龙泉11111",
          taskId: "task-00005",
          status: "运行中",
          labelStatus: "fire-detect",
          createTime: "2017-10-01 12:00:00",
          updateTime: "2017-10-01 12:00:00"
        }
      ],
      categoryOptions: []
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    toDetail(data) {
      console.log("详情", data);
      this.$router.push({
        path: "/home/taskDetail",
        query: data
      });
    },
    // 停止
    stop(data) {
      console.log("停止", data);
    },
    // 创建任务
    createTask() {
      this.$router.push("/home/editTask");
    },
    // 编辑任务
    editItem(data) {
      this.$router.push({
        path: "/home/editTask",
        query: data
      });
    },
    getList() {
      console.log("获取列表数据");
    },
    deleteItem(data) {
      // let params = {
      //   id: data.id
      // };
      this.$confirm(
        `确定要删除模块【${data.taskName}】吗？`,
        "删除系统应用模块",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        // deleteUser(data.id, data)
        //   .then(res => {
        //     console.log("删除当前信息", res);
        //     if (res.code === 200) {
        //       this.$message.success("删除成功");
        //       this.getList();
        //     } else {
        //       this.$message.error(`删除失败`);
        //     }
        //   })
        //   .catch(err => {
        //     this.$message.error(err.response.data.msg);
        //   });
      });
    },
    handleSearchList(data) {
      console.log("搜索全部内容", data);
    },
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
    // 初始化
    initialization() {
      console.log("初始化");
    }
  }
};
</script>

<style scoped lang="less">
.tastTable {
  border: 1px solid #ebeef5;
}
.textItem {
  display: flex;
  justify-content: space-between;
}
.numberNode {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.numberNode span:nth-child(2) p {
  margin-top: 6px;
}
.el-icon-help {
  margin-top: 14px;
  font-size: 30px;
  color: #409eff;
}
</style>
