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
        <el-divider></el-divider>
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
            <el-form-item label="参数配置">
              <el-input v-model="list.paramConfig" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="示例"> </el-form-item>
          </div>
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
import selectMirror from "../dialog/selectMirror";
import tempconfig from "../dialog/tempconfig";
export default {
  name: "createApp",
  components: {
    selectMirror,
    tempconfig
  },
  props: {},
  data() {
    return {
      isShow: true,
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
  height: 300px;
}
.startCommand {
  background: #f4f5f6;
}
</style>
