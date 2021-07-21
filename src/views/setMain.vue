<template>
  <el-container class="home-container">
    <el-header>
      <setHeaderTop></setHeaderTop>
    </el-header>
    <el-container>
      <el-aside class="my-aside" style="width:220px;">
        <sidebar></sidebar>
      </el-aside>
      <el-main class="main_div">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import setHeaderTop from "@/views/setHome/setHeaderTop";
// import setAsideLeft from "@/pages/sysSettingMgnt/setLayout/setAsideLeft";
import { Sidebar } from "./setHome";

export default {
  name: "Home",
  components: {
    setHeaderTop,
    Sidebar
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    sidebar() {}
  }
};
</script>

<style scoped lang="less">
.main_div {
  // padding: 10px;
  background: #e9effc75;
  // overflow: hidden;
}
.el-header[data-v-beb062de] {
  height: 100px !important;
  padding: 0;
}
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .my-aside {
    background-color: rgb(0, 24, 45);
  }
}
</style>
