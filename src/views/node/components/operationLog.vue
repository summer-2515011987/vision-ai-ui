<template>
  <div class="operationLog">
    <div class="logSave">
      <el-row :offset="6" type="flex" class="row-bg" justify="space-around">
        <el-col :span="12"
          ><div class="">
            <el-form
              :inline="true"
              :model="listQuery"
              class="demo-form-inline"
              style="text-align:left;"
            >
              <el-form-item label="日志保存时间：">
                <span>1日</span>
              </el-form-item>
              <el-form-item label="日志级别：">
                <span>1日</span>
              </el-form-item>
              <el-form-item label="启用状态：">
                <el-switch
                  @change="handleStatusChange()"
                  :active-value="1"
                  :inactive-value="0"
                  v-model="listQuery.status"
                >
                </el-switch>
              </el-form-item>
            </el-form></div
        ></el-col>
        <el-col :span="12" :offset="6">
          <div style="text-align:right">
            <el-link @click="initialization(scope.row)" type="primary"
              >刷新</el-link
            >
            <el-divider direction="vertical"></el-divider>
            <el-link
              @click="toDetail(scope.row)"
              type="primary"
              style="margin-right:10px"
              >自动刷新</el-link
            >
            <el-switch
              @change="handleStatusChange()"
              :active-value="1"
              :inactive-value="0"
              v-model="listQuery.status"
              style="margin-right:20px"
            >
            </el-switch>
            <el-button type="primary" size="small" @click="logStorage"
              >日志存储策略</el-button
            >
          </div>
        </el-col>
      </el-row>
      <!-- 搜索栏目部分 -->
      <div class="searchColumn">
        <el-form
          :inline="true"
          :model="formLog"
          class="demo-form-inline"
          style="text-align:left;"
        >
          <el-form-item label="">
            <el-select
              v-model="listQuery.formLog"
              placeholder="日志级别(全部)"
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
              v-model="listQuery.logModule"
              placeholder="日志模块(全部）"
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
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
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
        <el-card>
          <el-table :data="tableData" height="250" style="width: 100%">
            <el-table-column prop="nodeName" label="触发时间" align="center">
            </el-table-column>
            <el-table-column prop="nodeModel" label="日志模块" align="center">
            </el-table-column>
            <el-table-column prop="cpuArchitecture" label="级别" align="center">
            </el-table-column>
            <el-table-column prop="deviceid" label="deviceid" align="center">
            </el-table-column>
            <el-table-column prop="nodeStatus" label="内容" align="center">
            </el-table-column>
          </el-table>
        </el-card>
        <!-- 分页 -->
        <storageStrategy
          :visible="detailState"
          @cancel="detailState = false"
        ></storageStrategy>
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
    </div>
  </div>
</template>

<script>
import storageStrategy from "./storageStrategy.vue";
export default {
  name: "operationLog",
  components: {
    storageStrategy
  },
  props: {},
  data() {
    return {
      detailState: false,
      listQuery: {
        status: true
      },
      value1: "",
      formLog: {},
      categoryOptions: [],
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
    handleSearchList() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    handleStatusChange() {
      console.log("是否启用");
    },
    logStorage() {
      this.detailState = true;
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
    }
  }
};
</script>

<style scoped lang="less"></style>
