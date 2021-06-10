<template>
  <el-dialog
    title="日志储存策略"
    :visible="visible"
    width="28%"
    @close="$emit('cancel')"
  >
    <el-form
      label-position="right"
      label-width="120px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-if="visible"
      v-loading="listLoading"
    >
      <el-form-item
        label="日志保存时间:"
        prop="date"
        :rules="[
          { required: true, message: '请选择操作系统', trigger: 'change' }
        ]"
      >
        <el-select v-model="apForm.date" placeholder="请选择操作系统">
          <el-option label="1日" value="0"></el-option>
          <el-option label="7日" value="1"></el-option>
          <el-option label="30日" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="日志级别:"
        prop="cpuArchitecture"
        :rules="[
          { required: true, message: '请选择日志级别', trigger: 'change' }
        ]"
      >
        <el-select v-model="apForm.logLevel" placeholder="请选择日志级别">
          <el-option label="错误" value="2"></el-option>
          <el-option label="警告" value="0"></el-option>
          <el-option label="信息" value="1"></el-option>
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
  name: "storageStrategy",
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
      btnLoading: false,
      sysOptions: [],
      apForm: {},
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
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
