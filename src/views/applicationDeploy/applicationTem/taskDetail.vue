<template>
  <div class="taskDetail">
    <el-card>
      <div slot="header" class="clearfix">
        <el-page-header
          @back="$router.back()"
          content="任务管理详情"
        ></el-page-header>
      </div>
      <el-form
        ref="form"
        label-position="left"
        :model="detailsForm"
        label-width="80px"
        style="margin-left:32px"
      >
        <h2 style="font-size: 20px;">
          {{ detailsForm.taskName }}
        </h2>

        <el-col :span="8"
          ><el-form-item label="ID：">
            <span>{{ detailsForm.id }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><el-form-item label="创建时间：" label-width="90px">
            <span>{{ detailsForm.createTime }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><el-form-item label="更新时间：" label-width="90px">
            <span>{{ detailsForm.updateTime }}</span>
          </el-form-item>
        </el-col>

        <!-- <el-form-item label="状态：">
          <span>{{ detailsForm.status }}</span>
        </el-form-item> -->
        <!-- 状态、标签 -->
        <el-row>
          <el-col :span="8"
            ><el-form-item label="状态：" label-width="90px">
              <span>{{ detailsForm.status }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8"
            ><el-form-item label="标签：" label-width="90px">
              <span>{{ detailsForm.updateTime }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8"> <span></span></el-col>
        </el-row>

        <el-form-item label="描述：">
          <span>{{ detailsForm.dec }}</span>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "taskDetail",
  components: {},
  props: {},
  data() {
    return {
      detailsForm: {
        ID: "285",
        taskName: "",
        createTime: "2021-01-19 14:40:34",
        updateTime: "2021-01-19 14:40:34",
        instancesNum: "0/1",
        dec: "-"
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    this.detailsForm = this.$route.query;
    console.log("详情666", this.detailsForm);
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.baseNews /deep/.el-form-item__label {
  width: 120px;
  font-weight: bold;
  font-size: 16px;
}
</style>
