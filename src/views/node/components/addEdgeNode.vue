<template>
  <el-dialog
    title="添加边缘节点"
    :visible="visible"
    width="40%"
    @close="$emit('cancel')"
  >
    <el-form
      label-position="left"
      label-width="96px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-if="visible"
      v-loading="listLoading"
    >
      <el-form-item
        label="节点名称"
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input class="nodeName" v-model="apForm.nodeName" show-word-limit>
        </el-input>
      </el-form-item>

      <el-form-item label="节点描述" prop="nodeDec">
        <el-input
          type="textarea"
          class="title"
          v-model="apForm.nodeDec"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item
        label="操作系统:"
        prop="sysStatus"
        :rules="[
          { required: true, message: '请选择操作系统', trigger: 'change' }
        ]"
      >
        <el-select v-model="apForm.sysStatus" placeholder="请选择操作系统">
          <el-option label="Linux" value="1"></el-option>
          <el-option label="arm" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="CPU架构:"
        prop="cpuArchitecture"
        :rules="[
          { required: true, message: '请选择CPU架构', trigger: 'change' }
        ]"
      >
        <el-select v-model="apForm.cpuArchitecture" placeholder="请选择CPU架构">
          <el-option label="Linux" value="1"></el-option>
          <el-option label="arm" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin: 0;text-align: center">
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="submit" :loading="btnLoading"
          >确认</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
// import { getRegionId } from "@/utils/auth";
// import { addFire, editFire } from "@/api/fusionCloud/firewall";
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
      listLoading: false,
      title: "",
      moduleSystemId: "",
      btnLoading: false,
      sysOptions: [],
      apForm: {},
      ct_user_id: "", //用户id
      os_id: "", //资源池id
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
  watch: {},
  created() {},
  methods: {
    submit() {
      this.$refs.ruleForm.validate(vaild => {
        if (!vaild) return false;

        this.$emit("cancel"); //关闭弹窗
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
