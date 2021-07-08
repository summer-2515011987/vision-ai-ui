<template>
  <div class="applicationManage">
    <el-card class="application-container">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>应用管理
      </div>
      <!-- 应用数量部分 -->
      <div class="textItem">
        <div class="numberNode">
          <span class="el-icon-help"></span>
          <span>
            <p>
              应用数量
            </p>
            <h3>2</h3>
          </span>
        </div>
        <div class="elButton">
          <el-button style="float:right" type="primary" @click="addContainer"
            >创建容器应用</el-button
          >
        </div>
      </div>
      <!-- 搜索部分 -->
      <div class="searchColumn">
        <el-form
          :inline="true"
          :model="listQuery"
          class="demo-form-inline"
          style="text-align:left;"
        >
          <el-form-item label="">
            <el-input
              v-model="listQuery.applyName"
              class="input-width"
              placeholder="请输入应用名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleSearchList(listQuery.applyName)"
              class="searchBtn"
              >搜 索</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="applyName" label="应用名称" width="350px">
        </el-table-column>
        <el-table-column
          prop="instancesNum"
          label="实例数(正常/总数)"
          width="350px"
        >
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="250px">
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link @click="initialization(scope.row)" type="primary"
              >详情</el-link
            >
            <el-divider direction="vertical"></el-divider>
            <el-link @click="changeConfig(scope.row)" type="primary"
              >更改配置</el-link
            >
            <el-divider direction="vertical"></el-divider>
            <el-link type="danger" @click="deleteItem(scope.row)">删除</el-link>
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
  name: "applicationManage",
  components: {},
  now: "",
  props: {},
  data() {
    return {
      listQuery: {},
      tableData: [
        {
          applyName: "smoke-detect",
          instancesNum: "3/3",
          createTime: "2021-01-19 14:40:34"
        }
      ]
    };
  },
  // 计算属性
  computed: {
    // fullName: {
    // // getter
    // get() {
    //   return this.firstName + "" + this.lastName;
    // },
    // // setter
    // set(newValue) {
    //   console.log("setnewValue", newValue);
    //   var names = newValue.split("");
    //   this.firstName = names[0];
    //   this.lastName = names[names.length - 1];
    // }
    // }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 更改配置
    changeConfig() {
      this.$router.push("/home/editConfig");
    },
    // 创建容器应用
    addContainer() {
      console.log("创建容器应用");
      this.$router.push("/home/createApp");
    },
    handleSearchList(data) {
      console.log("搜索应用名称", data);
    },
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
    }
    // 分页结束---
  }
};
</script>

<style scoped lang="less">
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
.searchColumn {
  margin-top: 20px;
}
</style>
