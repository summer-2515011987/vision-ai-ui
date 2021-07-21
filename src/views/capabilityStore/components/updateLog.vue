<template>
  <div class="updateLog">
    <el-table :data="tableData" style="width: 100%" v-loading="listLoading">
      <el-table-column prop="version" label="发布版本" width="200">
      </el-table-column>
      <el-table-column prop="createTime" label="发布时间" width="260">
      </el-table-column>
      <el-table-column prop="versionNote" label="版本更新说明">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { searchInfoLog } from "@/api/capabilityStore.js";
export default {
  name: "updateLog",
  components: {},
  props: {},
  data() {
    return {
      storeData: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      listLoading: false
    };
  },
  computed: {},
  watch: {},
  created() {
    this.storeData = JSON.parse(sessionStorage.getItem("currentData"));
    this.getList();
  },
  mounted() {},
  methods: {
    getList() {
      this.listLoading = true;
      searchInfoLog(this.storeData.id)
        .then(res => {
          if (res.code == 200) {
            this.listLoading = false;
            this.tableData = res.data;
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped lang="less"></style>
