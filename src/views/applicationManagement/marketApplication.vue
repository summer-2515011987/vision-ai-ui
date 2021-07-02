<template>
  <div class="marketApplication">
    <el-card class="marketContainer">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>能力商店
      </div>
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
            placeholder="请输入应用商店"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSearchList(listQuery.keyword)"
            class="searchBtn"
            icon="el-icon-search"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in 6" :key="item.id" class="marketCard">
          <el-card>
            <div class="equipmentOne">
              <img src="../../assets/logo.png" alt="" />
              <div>
                <h2>BACnet设备连接器-AMD64</h2>
                <p><span>版本 5.2.3</span> <span>CPU架构&nbsp; AMD64</span></p>
              </div>
            </div>
            <div class="equipmentTwo">
              <span>类型<strong>物联网</strong></span>
              <span>行业<strong>工业制造</strong></span>
            </div>
            <p class="explanation">
              该应用为楼宇润发太过分了减肥发ijrggdf绝地反击
              该应用为楼宇润发太过分了减肥发ijrggdf绝地反击
              该应用为楼宇润发太过分了减肥发ijrggdf该应用为
              楼宇润发太过分了减肥发ijrggdf绝地反击
              该应用为楼宇润发太过分了减肥发ijrggdf绝地反击
              该应用为楼宇润发太过分了减肥发ijrggdf
            </p>
            <div class="equipmentFour">
              <span><i class="el-icon-view"></i>111</span>
              <span><i class="el-icon-star-off"></i>222</span>
            </div>
            <el-divider></el-divider>
            <div class="equipmentFive">
              <img src="../../assets/images/home/user.jpg" alt="" />
              <span>中国移动研究院</span><i class="el-icon-star-off"></i>
              <el-button type="primary" size="medium">部署应用</el-button>
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
  name: "marketApplication",
  components: {},
  props: {},
  data() {
    return {
      listQuery: {}
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 查询搜索
    handleSearchList(data) {
      console.log("data", data);
    },
    //分页开始----
    handleSizeChange(val) {
      console.log("handleSizeChange");
      // this.listQuery.pageNum = 1;
      // this.listQuery.pageSize = val;
      // this.getList();
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
.main_contain span {
  transform: rotate(45deg);
  color: #ce4f15;
  font-size: 20px;
}
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
  .el-button {
    float: right;
    vertical-align: middle;
  }
}
</style>
