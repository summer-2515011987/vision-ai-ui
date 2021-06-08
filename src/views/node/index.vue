<template>
  <div class="edgeNode">
    <el-card class="edge-container">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>边缘节点列表
        <el-button
          type="primary"
          size="medium"
          style="float: right; "
          icon="el-icon-refresh-right"
          >刷新</el-button
        >
      </div>
      <!-- 边缘节点数量部分 -->
      <div class="textItem">
        <div class="numberNode">
          <span class="el-icon-help"></span>
          <span>
            <p>边缘节点数量</p>
            <h3>3</h3>
          </span>
        </div>
        <div class="elButton">
          <el-button style="float:right" type="primary">新增</el-button>
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
          <el-form-item label="资源分类：">
            <el-select
              v-model="listQuery.categoryId"
              placeholder="全部"
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
          <el-form-item label="资源分类：">
            <el-select
              v-model="listQuery.categoryId"
              placeholder="全部"
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
              @click="handleSearchList()"
              class="searchBtn"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table :data="tableData" height="250" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
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
  name: "edgeNode",
  components: {},
  props: {},
  data() {
    return {
      listQuery: {},
      categoryOptions: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSearchList() {
      console.log("搜索全部内容");
    }
  }
};
</script>

<style scoped lang="less">
.main_contain span {
  transform: rotate(45deg);
  color: #ce4f15;
  font-size: 20px;
}

.numberNode {
  width: 176px;
  display: flex;
  justify-content: space-between;
}
.el-icon-help {
  font-size: 74px;
  color: #409eff;
}
.numberNode span:nth-child(2) p {
  margin-top: 6px;
}
.textItem {
  display: flex;
  justify-content: space-between;
}
.searchColumn {
  margin-top: 20px;
}
</style>
