<template>
  <div class="parameterConfig">
    <!-- 容器规格 -->
    <div class="container">
      <h3>容器规格</h3>
      <el-table :data="containerData" style="width: 100%" border>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="highValue" label="最高值"> </el-table-column>
      </el-table>
    </div>
    <!-- 启动命令 -->
    <div class="container">
      <h3>启动命令</h3>
      <el-table :data="startData" style="width: 100%" border>
        <el-table-column prop="runCommand" label="运行命令"> </el-table-column>
        <el-table-column prop="operatingParam" label="运行参数">
        </el-table-column>
      </el-table>
    </div>
    <!-- 选项配置 -->
    <div class="container">
      <h3>选项配置</h3>
      <el-table :data="optionConfig" style="width: 100%" border>
        <el-table-column prop="optionName" label="选项名称"> </el-table-column>
        <el-table-column prop="privilegeConfig" label="运行参数">
        </el-table-column>
      </el-table>
    </div>
    <!-- 端口映射 -->
    <div class="container">
      <h3>端口映射</h3>
      <el-table :data="portMapping" style="width: 100%" border>
        <el-table-column prop="containerPort" label="容器端口">
        </el-table-column>
        <el-table-column prop="hostPort" label="主机端口"> </el-table-column>
      </el-table>
    </div>
    <!-- 环境变量配置 -->
    <div class="container">
      <h3>环境变量配置</h3>
      <el-table :data="environData" style="width: 100%" border>
        <el-table-column prop="variableName" label="变量名称">
        </el-table-column>
        <el-table-column prop="variableValue" label="变量值"> </el-table-column>
      </el-table>
    </div>
    <!-- 卷配置 -->
    <div class="container">
      <h3>卷配置</h3>
      <el-table :data="volumeData" style="width: 100%" border>
        <el-table-column prop="variableName" label="本地卷名称">
        </el-table-column>
        <el-table-column prop="variableValue" label="宿主机"> </el-table-column>
        <el-table-column prop="variableValue" label="挂载目录">
        </el-table-column>
      </el-table>
    </div>
    <!-- Host配置 -->
    <div class="container">
      <h3>Host配置</h3>
      <el-table :data="hostData" style="width: 100%" border>
        <el-table-column prop="variableName" label="IP地址"> </el-table-column>
        <el-table-column prop="variableValue" label="域名"> </el-table-column>
      </el-table>
    </div>
    <!-- 应用存活探针 -->
    <div class="container">
      <h3>应用存活探针</h3>
      <el-table :data="applicationData" style="width: 100%" border>
        <el-table-column prop="Inspection" label="检查方式"> </el-table-column>
        <el-table-column prop="variableValue" label="执行命令">
        </el-table-column>
        <el-table-column prop="variableName" label="间隔时间（秒）">
        </el-table-column>
        <el-table-column prop="variableValue" label="延迟时间（秒）">
        </el-table-column>
        <el-table-column prop="variableValue" label="超过时间（秒）">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "parameterConfig",
  components: {},
  props: {},
  data() {
    return {
      // 容器规格
      containerData: [
        { name: "CPU(core)", highValue: "2" },
        { name: "内存(MB)", highValue: "2048" }
      ],
      //   启动命令
      startData: [{ runCommand: "-", operatingParam: "-" }],
      // 选项配置
      optionConfig: [
        {
          optionName: "特权配置",
          privilegeConfig: "启用"
        }
      ],
      //端口映射
      portMapping: [
        //   { containerPort: "", hostPort: "" }
      ],
      //   环境变量配置
      environData: [],
      //   卷配置
      volumeData: [],
      //   host配置
      hostData: [],
      //   应用存活探针
      applicationData: [{ Inspection: "不检查" }]
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
.container {
  border: 1px solid #dcdee2;
  background: #eeeeee;
  margin-top: 20px;
  h3 {
    margin-left: 30px;
  }
}
/deep/.cell {
  margin-left: 20px;
}
</style>
