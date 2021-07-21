<template>
  <el-menu
    style="border-right: none"
    :default-active="$route.path"
    router
    background-color="#00182D"
    text-color="#566E96"
    active-text-color="#47C2FD"
    :collapse-transition="false"
  >
    <!-- <el-menu-item index="/home/Overview">
      <i class="el-icon-s-home"></i>
      <span slot="title">总览</span>
    </el-menu-item> -->
    <el-menu-item index="/home/node">
      <!-- <i class="el-icon-s-home"></i> -->
      <span slot="title">边缘节点</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>边缘应用</span>
      </template>
      <el-menu-item index="/home/userApplications">应用管理</el-menu-item>
      <el-menu-item index="/home/marketApplication">应用模板</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>分析任务</span>
      </template>
      <el-menu-item index="/home/applicationTem">任务管理</el-menu-item>
      <el-menu-item index="/home/containerApplication">任务告警</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>云边消息</span>
      </template>
      <el-menu-item index="/home/messageDistribution">消息下发</el-menu-item>
      <el-menu-item index="/home/newsReport">消息上报</el-menu-item>
    </el-submenu>
    <el-menu-item index="/home/dataAnalysis">
      <!-- <i class="el-icon-chat-dot-round"></i> -->
      <span slot="title">企业镜像</span>
    </el-menu-item>
    <!-- 能力商店 -->
    <el-menu-item index="/home/capabilityStore">
      <!-- <i class="el-icon-chat-dot-round"></i> -->
      <span slot="title">能力商店</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters(["routers", "sidebar"]),
    // routes() {
    //   // return this.routers;
    // },
    // isCollapse() {
    //   return false;
    // }
  },
  methods: {
    // hasOneShowingChildren(children) {
    //   const showingChildren = children.filter(item => {
    //     return !item.hidden;
    //   });
    //   return showingChildren.length === 1;
    // }
  }
};
</script>

<style scoped lang="less">
.el-menu-item {
  letter-spacing: 1.2px;
}
</style>
