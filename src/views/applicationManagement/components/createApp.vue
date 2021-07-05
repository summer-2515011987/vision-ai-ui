<template>
  <div class="createApp">
    <el-card class="createAppCard">
      <div slot="header" class="clearfix">
        <el-page-header @back="$router.back()" content="创建"></el-page-header>
      </div>
      <el-form
        label-position="right"
        label-width="120px"
        :model="list"
        ref="ruleForm"
        :rules="rules"
        v-loading="listLoading"
      >
        <el-form-item label="基本信息" class="baseNews"></el-form-item>
        <el-form-item
          label="部署应用名称"
          prop="name"
          :rules="[
            {
              required: true,
              message:
                '请输入不超过128位的中文/字母/数字/下划线/中划线开头结尾不可有空格的内容',
              trigger: 'change'
            }
          ]"
          ><el-input
            class="name"
            v-model="list.name"
            placeholder="请输入不超过128位的中文/字母/数字/下划线/中划线开头结尾不可有空格的内容"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item
          label="部署描述"
          prop="deployDes"
          :rules="[
            { required: false, message: '请输入部署描述', trigger: 'change' }
          ]"
        >
          <el-input
            type="textarea"
            class="nodeName"
            v-model="list.deployDes"
            placeholder="请输入部署描述"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="部署对象" class="baseNews"></el-form-item>
        <el-row :gutter="20" v-for="(item, index) in deplopList" :key="index">
          <el-col :span="10"
            ><div class="grid-content bg-purple">
              <el-form-item label="选择部署节点：">
                <el-select
                  v-model="item.deploymentNode"
                  placeholder="请选择部署节点"
                >
                  <!-- <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option> -->
                  <el-option
                    v-for="item in detailsoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item></div
          ></el-col>
          <el-col :span="10"
            ><div class="grid-content bg-purple">
              <el-form-item label="容器名称：" prop="containerName">
                <el-input
                  class="nodeName"
                  v-model="item.containerName"
                  placeholder="请输入容器名称"
                  show-word-limit
                >
                </el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <!-- 添加一行 -->
              <el-button
                type="primary"
                icon="el-icon-plus"
                @click="Adddevlop"
                circle
              ></el-button>
              <!-- 删除一行 -->
              <el-button
                type="danger"
                icon="el-icon-minus"
                @click="deletedevelop(index)"
                v-if="index !== 0"
                circle
              ></el-button></div
          ></el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "createApp",
  components: {},
  props: {},
  data() {
    return {
      deplopList: [{ deploymentNode: "", containerName: "" }],

      detailsoptions: [
        {
          value: "xxx",
          label: "选项1"
        },
        {
          value: "xxx",
          label: "选项2"
        },
        {
          value: "xx",
          table: "选项3"
        }
      ],

      listLoading: false,
      list: {},
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
  created() {},
  mounted() {},
  methods: {
    // 创建正式代码开始
    Adddevlop() {
      this.deplopList.push({
        deploymentNode: "",
        containerName: ""
      });
    },
    deletedevelop(index) {
      this.deplopList.splice(index, 1);
    }
    // 创建正式代码结束
  }
};
</script>

<style scoped lang="less">
.baseNews /deep/.el-form-item__label {
  width: 120px;
  font-weight: bold;
  font-size: 16px;
}
.createAppCard {
  height: 580px;
  overflow: auto;
}
</style>
