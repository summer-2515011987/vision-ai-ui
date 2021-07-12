<template>
  <div class="editTask">
    <el-card class="createEdit">
      <div slot="header" class="clearfix">
        <el-page-header
          @back="$router.back()"
          :content="title"
        ></el-page-header>
      </div>
      <el-form
        label-position="right"
        label-width="140px"
        :model="taskList"
        ref="ruleForm"
        :rules="rules"
        v-loading="listLoading"
      >
        <el-form-item label="基本信息" class="baseNews"></el-form-item>
        <el-form-item
          label="任务名称"
          prop="taskName"
          :rules="[
            {
              required: false,
              message: '请输入',
              trigger: 'change'
            }
          ]"
          ><el-input
            class="name"
            v-model="taskList.taskName"
            placeholder="请输入"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item label="标签" prop="labelStatus">
          <el-select
            v-model="labelValue"
            placeholder="请选择标签"
            clearable
            multiple
          >
            <el-option
              v-for="item in labelData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float:left">{{ item.label }}</span>
              <!-- <span style="float:right;color:#8492a6;font-size:14px">{{
                item.value
              }}</span> -->
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input type="textarea" v-model="taskList.desc"></el-input>
        </el-form-item>
        <el-form-item label="高级配置" class="baseNews"></el-form-item>
        <el-form-item label="视频接入类型">
          <el-select
            v-model="value"
            placeholder="视频流"
            clearable
            @change="currentSel"
          >
            <el-option
              v-for="item in videoType"
              :key="item.value"
              :label="item.label"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="摄像头ID">
          <el-input v-model="taskList.CameraId"></el-input>
        </el-form-item>
        <el-form-item label="抽帧间隔">
          <el-input v-model="taskList.Frame"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align:center;margin-top:20px">
        <el-button type="primary" icon="el-icon-plus">{{ btnTitle }}</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "editTask",
  components: {},
  props: {},
  data() {
    return {
      title: "",
      btnTitle: "",
      listLoading: false,
      taskList: {},
      labelValue: "",
      labelData: [
        { value: "1", label: "标签1" },
        { value: "2", label: "标签2" },
        { value: "3", label: "标签3" }
      ],
      value: "",
      videoType: [
        { value: "1", label: "视频流" },
        { value: "2", label: "音乐流" }
      ],
      rules: {
        name: [
          {
            trigger: "blur",
            required: true,
            message: "请输入名称"
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    // this.taskList = this.$route.query;
  },
  mounted() {
    this.title = `${this.$route.query.id ? "编辑" : "创建"}任务`;
    if (this.$route.query.id) {
      this.btnTitle = "更新";
      // 编辑
      this.taskList = this.$route.query;
    } else {
      // 创建
      this.btnTitle = "创建";
    }
  },
  methods: {
    currentSel(data) {
      console.log("当前选中项", data);
    }
  }
};
</script>

<style scoped lang="less">
.baseNews /deep/.el-form-item__label {
  width: 120px;
  font-weight: bold;
  font-size: 16px;
}
.createEdit {
  height: 580px;
  overflow: auto;
}
/deep/.el-input {
  width: 60%;
}
/deep/.el-textarea {
  width: 60%;
}
</style>
