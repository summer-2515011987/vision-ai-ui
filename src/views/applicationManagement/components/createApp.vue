<template>
  <div class="createApp">
    <el-card class="createAppCard">
      <div slot="header" class="clearfix">
        <el-page-header
          @back="$router.back()"
          content="创建容器应用"
        ></el-page-header>
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
        <el-divider></el-divider>
        <div v-if="fromDevlop">
          <el-form-item label="配置方式：">
            <el-radio-group v-model="radio1" size="small">
              <el-radio-button label="自定义配置"></el-radio-button>
              <el-radio-button
                label="模板配置"
                @click.native="tempconfig"
              ></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" size="small" @click="selectMirror"
              >选择镜像</el-button
            >
          </el-form-item>

          <el-divider></el-divider>
        </div>
        <el-form-item label="关联模板" class="baseNews"></el-form-item>
        <el-form-item label="容器镜像"></el-form-item>
        <el-form-item label="容器规格">
          <el-row style="margin-left:30px">
            <el-col :span="2">CPU配置</el-col>
            <el-col :span="2">
              <el-checkbox-group v-model="containerForm.type">
                <el-checkbox label="最高值" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-col>

            <el-col :span="4">
              <el-input v-model="containerForm.name"></el-input
            ></el-col>
            <el-col class="line" :span="4"> core</el-col>
          </el-row>
          <el-row style="margin-left:30px;margin-top:20px">
            <el-col :span="2">内存配置</el-col>
            <el-col :span="2">
              <el-checkbox-group v-model="containerForm.type">
                <el-checkbox label="最高值" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-col>

            <el-col :span="4">
              <el-input v-model="containerForm.name"></el-input
            ></el-col>
            <el-col class="line" :span="4">MB</el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="启动命令" class="startCommand">
          <div
            @click="explicit"
            class="el-icon-arrow-down"
            :class="[isShow ? 'el-icon-arrow-down' : 'el-icon-arrow-right']"
          ></div>
          注意：deployment
          command会明文展示所输入信息，请不要填入敏感信息，防止信息泄露。传递给容器的Docker
          CMD。有关更多信息，请参阅Docker运行参考
          <div v-if="isShow" class="implicit">
            <el-form-item label="命令配置">
              <el-input v-model="list.comConfig"></el-input>
            </el-form-item>
            <el-form-item label="参数配置" style="margin-top:10px">
              <el-input v-model="list.paramConfig" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="示例">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="二进制方式" name="first" class="firstTab"
                  ><el-form-item label="命令配置">
                    <el-input v-model="list.commandConfig"></el-input>
                  </el-form-item>
                  <el-form-item label="参数配置" style="margin-top:10px">
                    <el-input v-model="list.parameterconfig"></el-input>
                  </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="bash方式" name="second" class="firstTab">
                  <el-form-item label="命令配置">
                    <el-input v-model="list.commandConfig"></el-input>
                  </el-form-item>
                  <el-form-item label="参数配置" style="margin-top:10px">
                    <el-input v-model="list.parameterconfig"></el-input>
                  </el-form-item>
                </el-tab-pane>
              </el-tabs>
            </el-form-item>
          </div>
        </el-form-item>
        <!-- 选项配置 -->
        <el-form-item label="选项配置" class="startCommand">
          <div
            @click="optionConfig"
            class="el-icon-arrow-down"
            :class="[
              isShowConfig ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
            ]"
          ></div>
          支持设置权限配置，重启策略，容器网络配置，端口映射
          <div v-if="isShowConfig" class="privilege">
            <el-form-item label="特权配置">
              <el-checkbox-group v-model="containerForm.type">
                <el-checkbox
                  label="允许容器访问主机设备，例如容器访问GPU,FPGA"
                  name="type"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="重启策略" style="margin-bottom:10px">
              <el-button type="primary" size="small">总是重启</el-button>
            </el-form-item>
            <el-form-item label="容器网络">
              <el-radio-group v-model="networkradio1" size="small">
                <el-radio-button label="主机网络"></el-radio-button>
                <el-radio-button label="端口映射"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-form-item>
        <!-- 环境变量配置 -->
        <el-form-item label="环境变量配置" class="startCommand">
          <div
            @click="environment"
            class="el-icon-arrow-down"
            :class="[
              isShowenviron ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
            ]"
          ></div>
          容器运行环境中设定的一个变量。可以在应用部署后修改，为应用提供极大的灵活性。设置容器运行环境中的系统环境变量。
          <div v-if="isShowenviron" class="environment">
            <el-form-item label="手动输入">
              <!-- 环境变量配置表 -->
              <el-table :data="environmentData" class="kong-box">
                <el-table-column prop="aaa" label="变量名称">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.variableName
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.variableName"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="aaa" label="变量值">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.variableValue
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.variableValue"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="200px">
                  <template slot-scope="scope">
                    <el-link type="danger" @click="deleteit(scope.row)"
                      >删除</el-link
                    >
                  </template>
                </el-table-column>
              </el-table>

              <div class="addziduan">
                <el-button type="text" @click="addziduan">添加变量</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <!-- 卷配置-->
        <el-form-item label="卷配置" class="startCommand">
          <div
            @click="volumIcon"
            class="el-icon-arrow-down"
            :class="[
              isShowvolum ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
            ]"
          ></div>
          支持挂在本地卷到容器中，以实现数据文件的持久化存储
          <div v-if="isShowvolum" class="volumConfig">
            <el-form-item label="本地卷">
              <!-- 环境变量配置表 -->
              <el-table :data="localVolumeData" class="kong-box">
                <el-table-column prop="aaa" label="本地卷名称">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.localVolumeName
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.localVolumeName"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="aaa" label="数组机目录">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.arrayDirectory
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.arrayDirectory"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="aaa" label="挂载目录">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.mountDirectory
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.mountDirectory"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="aaa" label="权限">
                  <template slot-scope="scope">
                    <!-- <span v-if="scope.row.vVisible">{{
                      scope.row.readWrite
                    }}</span> -->
                    <el-select v-model="scope.row.readWrite" placeholder="读写">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="200px">
                  <template slot-scope="scope">
                    <el-link type="danger" @click="deleteVolume(scope.row)"
                      >删除</el-link
                    >
                  </template>
                </el-table-column>
              </el-table>

              <div class="addziduan">
                <el-button type="text" @click="addVolume">添加变量</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <!-- host配置 -->
        <el-form-item label="host配置" class="startCommand">
          <div
            @click="hostConfig"
            class="el-icon-arrow-down"
            :class="[isShowhost ? 'el-icon-arrow-down' : 'el-icon-arrow-right']"
          ></div>
          支持配置容器默认host
          <div v-if="isShowhost" class="environment">
            <el-form-item label="容器host">
              <!-- 环境变量配置表 -->
              <el-table :data="hostData" class="kong-box">
                <el-table-column prop="aaa" label="IP地址">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.ipAddress
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.ipAddress"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="aaa" label="域名">
                  <template slot-scope="scope">
                    <span v-if="scope.row.vVisible">{{
                      scope.row.domainName
                    }}</span>
                    <el-input
                      v-else
                      ref="marker1"
                      v-model="scope.row.domainName"
                      class="inputheight"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="200px">
                  <template slot-scope="scope">
                    <el-link type="danger" @click="deleteHost(scope.row)"
                      >删除</el-link
                    >
                  </template>
                </el-table-column>
              </el-table>

              <div class="addziduan">
                <el-button type="text" @click="addHost">添加变量</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <!-- 健康检查 -->
        <el-form-item label="健康检查" class="startCommand">
          <div
            @click="healthExamin"
            class="el-icon-arrow-down"
            :class="[
              isShowhealth ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
            ]"
          ></div>

          <div v-if="isShowhealth" class="environment">
            <el-form-item label="应用存活探针">
              <el-radio-group v-model="networkradio2" size="small">
                <el-radio-button label="不检查"></el-radio-button>
                <el-radio-button label="执行命令检查"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="primary" class="el-icon-plus">创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 选择镜像 -->
    <selectMirror
      :visible="detailState"
      @cancel="detailState = false"
    ></selectMirror>
    <!-- 模板配置 -->
    <tempconfig
      :visible="configVisible"
      @cancel="configVisible = false"
    ></tempconfig>
  </div>
</template>

<script>
// import DetailTab from "@/components/DetailTab";
import selectMirror from "../dialog/selectMirror";
import tempconfig from "../dialog/tempconfig";
export default {
  name: "createApp",
  components: {
    // DetailTab,
    selectMirror,
    tempconfig
  },
  props: {},
  data() {
    return {
      fromDevlop: true,
      networkradio2: "不检查",
      activeName: "first",
      isShow: true,
      isShowConfig: true,
      isShowenviron: true,
      isShowvolum: true,
      isShowhost: true,
      isShowhealth: true,
      // host配置数据
      hostData: [
        {
          ipAddress: "127.3.29.8080",
          domainName: "333",
          isNull: false,
          vVisible: true
        }
      ],
      //卷配置数据
      localVolumeData: [
        {
          localVolumeName: "111",
          arrayDirectory: "22",
          mountDirectory: "33",
          readWrite: "",
          isNull: false,
          vVisible: true
        }
      ],
      // 环境变量配置表
      environmentData: [
        {
          variableName: "zs",
          variableValue: "12",
          isNull: false,
          vVisible: true
        }
      ],
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],
      containerForm: {
        type: []
      },
      detailState: false,
      configVisible: false,
      radio1: "自定义配置",
      networkradio1: "主机网络",
      deplopList: [{ deploymentNode: "", containerName: "" }],
      detailsoptions: [
        {
          value: "111",
          label: "选项1"
        },
        {
          value: "222",
          label: "选项2"
        },
        {
          value: "333",
          table: "选项3"
        }
      ],

      listLoading: false,
      list: {
        commandConfig: "/run/start",
        parameterconfig: "--port=8080"
      },
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
  mounted() {
    if (this.$route.query.fromDevlop == "") {
      this.fromDevlop = "";
    }
  },
  methods: {
    // 健康检查开始---
    healthExamin() {
      this.isShowhealth = !this.isShowhealth;
    },
    // 健康检查结束---

    // host配置开始---
    hostConfig() {
      this.isShowhost = !this.isShowhost;
    },
    addHost() {
      this.hostData.push({
        index: this.hostData.length,
        ipAddress: "",
        domainName: "",
        isNull: false,
        vVisible: false
      });
    },
    deleteHost(row) {
      this.hostData.splice(row.index, 1);
    },
    // host配置结束---

    // 卷配置开始---
    volumIcon() {
      this.isShowvolum = !this.isShowvolum;
    },
    addVolume() {
      this.localVolumeData.push({
        index: this.localVolumeData.length,
        localVolumeName: "",
        arrayDirectory: "",
        mountDirectory: "",
        readWrite: "",
        isNull: false,
        vVisible: false
      });
    },
    deleteVolume(row) {
      this.localVolumeData.splice(row.index, 1);
    },
    // 卷配置结束---

    // 添加变量
    addziduan() {
      // 向表格数组中数据添加一行
      this.environmentData.push({
        index: this.environmentData.length,
        variableName: "",
        variableValue: "",
        isNull: false,
        vVisible: false
      });
    },
    deleteit(row) {
      this.environmentData.splice(row.index, 1);
    },
    handleClick(tab) {
      console.log(tab.label);
    },
    // 创建正式代码开始
    Adddevlop() {
      this.deplopList.push({
        deploymentNode: "",
        containerName: ""
      });
    },
    deletedevelop(index) {
      this.deplopList.splice(index, 1);
    },
    // 创建正式代码结束
    selectMirror() {
      this.detailState = true;
    },
    tempconfig() {
      console.log("111");
      this.configVisible = true;
    },
    explicit() {
      this.isShow = !this.isShow;
    },
    optionConfig() {
      this.isShowConfig = !this.isShowConfig;
    },
    environment() {
      this.isShowenviron = !this.isShowenviron;
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
.createAppCard {
  height: 580px;
  overflow: auto;
}
.line {
  margin-left: 10px;
}
.implicit {
  height: 270px;
}
.privilege {
  height: 150px;
}
.startCommand {
  background: #f4f5f6;
}
.firstTab {
  margin-left: -52px;
}

.addziduan {
  text-align: center;
}
.kong-box {
  margin: 10px;
  width: 90%;
  margin-left: 50px;
}
</style>
