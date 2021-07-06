<template>
  <el-dialog
    title="模板配置"
    :visible="visible"
    width="50%"
    @close="$emit('cancel')"
  >
    <!-- <el-form
      label-position="left"
      label-width="96px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-if="visible"
      v-loading="listLoading"
    > -->
    <!-- 表单项 -->
    <el-form
      :inline="true"
      :model="listQuery"
      class="demo-form-inline"
      style="text-align:left;"
    >
      <el-form-item label="">
        <el-input
          v-model="listQuery.keyword"
          class="input-width"
          placeholder="请输入模板名称"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSearchList(listQuery.keyword)"
          icon="el-icon-search"
          >搜 索</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 列表项 -->
    <el-table
      ref="roleTable"
      header-row-class-name="light_grey_table"
      :data="tableList"
      v-loading="listLoading"
      height="200px"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="应用模板名称" prop="applicationName" width="110">
      </el-table-column>
      <el-table-column label="镜像名称" prop="mirrorName"> </el-table-column>
      <el-table-column label="镜像版本" prop="mirrorEdition" width="80">
        <template slot-scope="scope">{{ scope.row.mirrorEdition }}</template>
      </el-table-column>
      <el-table-column label="镜像url" prop="mirrorUrl" width="320">
      </el-table-column>
      <el-table-column label="创建时间" prop="createTime">
        <template slot-scope="scope">{{ scope.row.createTime }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="footer-pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, sizes,prev, pager, next,jumper"
      :current-page.sync="listQuery.pageNum"
      :page-size="listQuery.pageSize"
      :page-sizes="[10, 15, 20]"
      :total="total"
    >
    </el-pagination>
    <div class="btnBot">
      <el-button @click="$emit('cancel')">取消</el-button>
      <el-button type="primary" @click="submit" :loading="btnLoading"
        >确认</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
const defaultListQuery = {
  keyword: "",
  pageNum: 1,
  pageSize: 10
};
export default {
  name: "testEdit",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      btnLoading: false,
      multipleSelection: [],
      total: 10,
      listLoading: false,
      listQuery: {},
      tableList: [
        {
          applicationName: "template0",
          mirrorName: "smoke-detect",
          mirrorEdition: "1.0.0",
          mirrorUrl: "swr-cn.heclouds.com/108956/busybox:1.0.0",
          createTime: "2021-01-19 14:40:34"
        }
      ],
      listQuery: Object.assign({}, defaultListQuery) //传到列表里的参数
    };
  },
  watch: {},
  created() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log("选中项", this.multipleSelection);
    },
    getList() {},
    //查询搜索
    handleSearchList(row) {
      console.log("查询搜索", row);
    },
    // 分页开始---
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      // this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      // this.getList();
    },
    // 分页结束---
    submit() {
      this.$refs.ruleForm.validate(vaild => {
        if (!vaild) return false;
      });
    }
  }
};
</script>

<style scoped lang="less">
.btnBot {
  margin-top: 20px;
  text-align: center;
}
</style>
