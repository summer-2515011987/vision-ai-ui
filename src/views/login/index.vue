<template>
  <div class="login-container">
    <!-- <div class="login-box"> -->
    <el-card class="login-box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="loginRules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <h3>视觉AI系统</h3>

        <el-form-item label="" prop="username">
          <el-input
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            prefix-icon="el-icon-lock"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">登录系统</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- </div> -->
  </div>
</template>

<script>
// 在组件导入接口;

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      loading: false,
      ruleForm: {
        username: "admin",
        password: "123456",
        clientId: "007",
        clientSecret: "ADE753495BF07E2839EF1EA05BDE447B",
        code: "",
        sessionId: "2"
      },
      // 表单验证规则对象
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            len: 6,
            message: "请输入6位数字",
            trigger: "blur"
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
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return false;
        this.loading = false;
        this.$store
          .dispatch("Login", this.ruleForm)
          .then(() => {
            this.loading = true;
            this.$router.push("/home");
            this.loading = false;
          })
          .catch(reason => {
            this.loading = false;
            this.ruleForm.password = "";
          });
      });
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/images/login/loginBakg2.png") no-repeat
    center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    width: 380px;
    height: 340px;
    border: 6px solid #fff;
    // border-radius: 5%;
    // margin-right: 100px;
    // .el-form-item {
    //   width: 90%;
    // }
    h3 {
      text-align: center;
      font-size: 30px;
    }
    /deep/ .el-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 18px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
      font-weight: bold;
    }
    .el-button {
      width: 100%;
    }
  }
}
.el-icon-user-solid {
  width: 20px;
  height: 20px;
}
</style>
