<template>
  <div class="marketApplication">
    <el-card class="marketContainer">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>能力商店221
      </div>
      <!-- 表单项 -->
      <div v-loading="listLoading">
        <el-form
          :inline="true"
          :model="listQuery"
          class="demo-form-inline"
          style="text-align:left;"
        >
          <el-form-item label="">
            <el-input
              v-model="listQuery.name"
              class="input-width"
              placeholder="请输入应用商店"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="handleSearchList"
              class="searchBtn"
              icon="el-icon-search"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <el-row :gutter="20">
          <el-col
            :span="8"
            v-for="(item, index) in storeData"
            :key="index"
            class="marketCard"
          >
            <el-card class="marketDetail">
              <div @click="marketDetail(item)">
                <div class="equipmentOne">
                  <!-- <img src="../../assets/logo.png" alt="" /> -->
                  <div>
                    <h2>{{ item.name }}</h2>
                    <p>
                      <span style="margin-right:4px"
                        >版本 <span>{{ item.version }}</span></span
                      >
                      <span class="cpuStore">CPU架构&nbsp; {{ item.cpu }}</span>
                    </p>
                  </div>
                </div>
                <div class="equipmentTwo">
                  <span
                    >类型<strong>{{ item.imageType }}</strong></span
                  >
                  <span
                    >行业<strong>{{ item.trade }}</strong></span
                  >
                </div>
                <p class="explanation">
                  {{ item.brief }}
                </p>

                <!-- <div class="equipmentFour">
                <span><i class="el-icon-view"></i>111</span>
                <span><i class="el-icon-star-off"></i>222</span>
              </div> -->
                <el-divider></el-divider>
              </div>

              <div class="equipmentFive">
                <!-- <img src="../../assets/images/home/user.jpg" alt="" /> -->
                <!-- <span>中国移动研究院</span> -->
                <!-- <i class="el-icon-star-off"></i> -->
                <el-button
                  type="primary"
                  size="medium"
                  @click="deployApplication"
                  >部署应用</el-button
                >
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination
          class="footer-pagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total, sizes,prev, pager, next,jumper"
          :current-page.sync="listQuery.pageIndex"
          :page-size="listQuery.pageSize"
          :page-sizes="[10, 15, 20]"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { searchStore } from "@/api/capabilityStore.js";
const defaultListQuery = {
  pageIndex: 1,
  pageSize: 6,
  name: "",
  type: "1"
};
export default {
  name: "marketApplication",
  components: {},
  props: {},
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      storeData: [],
      listLoading: false,
      total: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    getList() {
      this.listLoading = true;
      searchStore(this.listQuery)
        .then(res => {
          this.listLoading = false;
          if (res.code == 200) {
            this.storeData = res.data.content;
            this.total = res.data.totalElements;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 部署应用
    deployApplication() {
      this.$router.push({
        path: "/home/createApp",
        query: { fromDevlop: "" }
      });
    },
    // 查询搜索
    // 查询搜索
    handleSearchList(data) {
      this.listQuery.pageIndex = 1;
      this.getList();
    },
    //分页开始----
    handleSizeChange(val) {
      this.listQuery.pageIndex = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.getList();
    },
    // 分页结束---
    // 跳转至详情页
    marketDetail(data) {
      sessionStorage.setItem("currentData", JSON.stringify(data));
      this.$router.push({
        path: "/home/capabilityStoreDetail",
        query: data
      });
    }
  }
};
</script>

<style scoped lang="less">
.equipmentOne {
  display: flex;

  img {
    flex: 1;
    width: 50px;
    margin-right: 20px;
  }
  div {
    flex: 4;
  }
  h2 {
    font-weight: bold;
    font-size: 18px;
  }
}
.marketContainer {
  max-height: 580px;
  overflow: auto;
}
.marketCard {
  margin-bottom: 20px;
}
.explanation {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.equipmentTwo {
  margin-top: 20px;
}
.equipmentTwo span:nth-child(2) {
  float: right;
}

.equipmentTwo strong {
  font-weight: bold;
  margin-left: 10px;
}
.equipmentFour {
  text-align: right;
  span:nth-child(1) {
    margin-right: 10px;
  }
  i {
    margin-right: 4px;
  }
  .el-icon-view .el-icon-star-off {
    font-size: 26px;
  }
}

.equipmentFive {
  text-align: right;
  img {
    width: 38px;
    vertical-align: middle;
    margin-right: 30px;
  }
  .el-icon-star-off {
    margin: 0 24px;
    font-size: 24px;
    vertical-align: middle;
  }
}
.marketDetail {
  cursor: pointer;
}
.cpuStore {
  display: inline-block;
  float: right;
}
</style>
