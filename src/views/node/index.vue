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
            <p>
              边缘节点数量
              <el-tooltip
                class="item"
                effect="light"
                content="兼容历史版本"
                placement="right-start"
              >
                <i class="el-icon-question" />
              </el-tooltip>
            </p>
            <h3>3</h3>
          </span>
        </div>
        <div class="elButton">
          <el-button style="float:right" type="primary" @click="editItem({})"
            >新增</el-button
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
        <el-table
          :data="tableData"
          height="250"
          border
          style="width: 100%"
          align="center"
        >
          <el-table-column
            prop="nodeName"
            label="节点名称"
            align="center"
            width="150px"
          >
          </el-table-column>
          <el-table-column
            prop="nodeModel"
            label="节点型号"
            align="center"
            width="150px"
          >
          </el-table-column>
          <el-table-column
            prop="cpuArchitecture"
            label="cpu架构"
            align="center"
            width="150px"
          >
          </el-table-column>
          <el-table-column
            prop="deviceid"
            label="deviceid"
            align="center"
            width="150px"
          >
          </el-table-column>
          <el-table-column
            prop="nodeStatus"
            label="节点状态"
            align="center"
            width="150px"
          >
          </el-table-column>
          <el-table-column
            prop="enableStatus"
            label="启用状态"
            align="center"
            width="150px"
          >
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-link @click="initialization(scope.row)" type="primary"
                >初始化</el-link
              >
              <el-divider direction="vertical"></el-divider>
              <el-link @click="toDetail(scope.row)" type="primary"
                >详情</el-link
              >
              <el-divider direction="vertical"></el-divider>
              <el-link type="danger" @click="deleteItem(scope.row)"
                >删除</el-link
              >
            </template>
</el-table-column>
</el-table>
<!-- 分页 -->
<el-pagination class="footer-pagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="total, sizes,prev, pager, next,jumper" :current-page.sync="listQuery.pageNum" :page-size="10" :page-sizes="[10, 15, 20]"
    :total="1000">
</el-pagination>
<!-- 新增边缘节点 -->
<addEdgeNode :visible="detailState" :detail="detail" @cancel="detailState = false"></addEdgeNode>
</div>
</el-card>
</div>
</template>

<script>
    import addEdgeNode from "./components/addEdgeNode";
    export default {
        name: "edgeNode",
        components: {
            addEdgeNode
        },
        props: {},
        data() {
            return {
                detailState: false,
                detail: {},
                listQuery: {},
                categoryOptions: [],
                tableData: [{
                    id: 1,
                    nodeName: "node1",
                    nodeModel: "Linux",
                    cpuArchitecture: "arm",
                    deviceid: "11111",
                    nodeStatus: "离线",
                    enableStatus: "启用"
                }]
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {
            handleSearchList() {
                console.log("搜索全部内容");
            },
            handleSizeChange() {
                console.log("handleSizeChange");
            },
            handleCurrentChange() {
                console.log("handleCurrentChange");
            },
            // 初始化
            initialization() {
                console.log("初始化");
            },
            // 新增
            editItem(data) {
                console.log("新增");
                this.detail = JSON.parse(JSON.stringify(data));
                this.detailState = true;
            },
            // 根据路由跳转详情
            toDetail(data) {
                console.log("当情id", data.id);
                this.$router.push(`/home/nodeDetail/${data.id}`);
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
        width: 196px;
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