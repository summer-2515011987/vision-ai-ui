<template>
  <el-header class="model-header">
    <el-container>
      <el-aside class="model-header-left-logo"> </el-aside>
      <el-main class="model-header-right">
        <span class="header-text">视频边缘智能平台</span>
        <el-dropdown style="float: right">
          <span class="el-dropdown-link">
            <img
              style="vertical-align: middle"
              width="80"
              src="../../assets/images/home/newUser.jpg"
              alt
            />
            <!-- <b style="vertical-align: middle; padding-left: 5px">{{ name }}</b> -->
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="handleCommand">
            <el-dropdown-item
              icon="el-icon-setting"
              command="setting"
              @click.native="updatePassword"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item
              icon="el-icon-unlock"
              command="logout"
              @click.native="returnSetLogin"
              >退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-main>
      <updatePassword
        :visible="detailState"
        @cancel="detailState = false"
      ></updatePassword>
    </el-container>
  </el-header>
</template>
<script>
import updatePassword from "./components/updatePassword";
import NProgress from "nprogress"; // Progress 进度条
// import store from "@/store";
export default {
  name: "headerTop",
  components: { updatePassword },
  data() {
    return {
      detailState: false
      // avatar: "../../assets/images/home/user.jpg"
    };
  },
  mounted() {},
  methods: {
    // 修改密码
    updatePassword() {
      this.detailState = true;
      console.log("修改密码");
    },
    handleCommand(command) {
      // command就是点击的选项中的command的值  setting/logout
      // console.log('command', command)
      this[command]();
      // command === setting ===> this.setting()
      // command === logout ===> this.logout()
    },
    returnSetLogin() {
      this.$alert("确定要退出系统吗？", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          sessionStorage.clear();
          localStorage.clear();
          // store.dispatch('LogOut').then(() => {
          NProgress.done();
          this.$router.push({
            path: "/"
          });
          // });
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.model-header {
  // background: url("../../assets/images/home/headerRightBack.png") no-repeat
  //   center/100% 100% #fff;
  background: #fff;
  border-bottom: 1px solid #ccc;
  height: 100px;
  .model-header-left-logo {
    height: 100px !important;
    width: 220px !important;
    border-bottom: none;
    background-image: url("../../assets/images/home/headerLeftNew.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    background-color: #0f4482;

    // margin-top: 10px;
  }
}

.header-text {
  position: absolute;
  left: 254px;
  top: 16px;
  width: 764px;
  height: 62px;
  text-align: left;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: #0f4482;
  line-height: 62px;
  letter-spacing: 2px;
  text-shadow: 3px 3px 0px rgb(0 0 0 / 13%);
}
</style>
