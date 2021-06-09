<template>
  <div class="edgeNodeDetails">
    <el-row>
      <el-col :span="24"
        ><div class="rk">
          <h3>rk3340</h3>
          <el-link type="success">离线</el-link>
          <el-link type="primary">编辑</el-link>
          <el-link type="primary">边缘节点软件栈安装</el-link>
        </div>
        <!-- 2 -->
        <div class="version">
          <el-form
            ref="form"
            :model="form"
            label-width="110px"
            :label-position="labelPosition"
          >
            <el-form-item label="边缘节点ID :">
              <span>10052146</span>
              <el-link type="primary" class="copy">复制</el-link>
            </el-form-item>
            <el-form-item label="Device Secret :">
              <span>MTE3ZDM2NTAGNMYWRH</span
              ><el-link type="primary" class="copy">复制</el-link>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><ul class="upgrade">
          <li>
            <p>
              <span>内置应用版本 ： 5.2.3</span
              ><el-button type="primary" size="mini" style="margin-left:10px"
                >升级</el-button
              >
            </p>
            <p>操作系统信息 ：<span> Ubuntu 18.04,5</span></p>
            <p>规格 ：1 core | 1959 MB</p>
            <p>
              节点标签 :
              <el-link type="primary" style="vertical-align: baseline">
                编辑</el-link
              >
            </p>
          </li>
          <li>
            <p>容器版本 :<span> remote://20.10.6</span></p>
            <p>网卡信息 :<span> 192.168.1.158</span></p>
          </li>
          <li>
            <p>主机名 ：<span> bing-vm</span></p>
          </li>
        </ul></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "edgeNodeDetails",
  components: {},
  props: {},
  data() {
    return {
      labelPosition: "left",
      form: {}
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.edgeNodeDetails {
  padding: 20px;
}
.rk {
  display: flex;
  h3 {
    margin-right: 10px;
  }
}
.rk .el-link {
  margin-right: 10px;
}
.version .el-form {
  margin-top: 10px;
  display: flex;
  align-items: center;
  .el-form-item {
    width: 40%;
  }
}
.copy {
  vertical-align: baseline;
  margin-left: 24px;
}
.upgrade {
  display: flex;
}
.upgrade li {
  width: 33.3%;
  p {
    margin-top: 14px;
  }
}
</style>
