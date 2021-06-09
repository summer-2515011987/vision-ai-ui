<template>
  <div class="top clearfix">
    <el-row type="flex" align="middle" style="height:60px;">
      <el-col :span="Array.isArray(buttonText) ? 17 : 20">
        <el-main>
          <div class="top_title_con">{{ titleText }}</div>
        </el-main>
      </el-col>
      <el-col
        class="btn"
        :span="Array.isArray(buttonText) ? 7 : 4"
        v-if="buttonText"
      >
        <div class="right" v-if="Array.isArray(buttonText)">
          <el-button type="primary" @click="createEvent">{{
            buttonText[0]
          }}</el-button>
          <el-button type="primary" @click="createEvent_Def">{{
            buttonText[1]
          }}</el-button>
        </div>
        <div class="right" v-else-if="buttonText == ''"></div>
        <div class="right" v-else>
          <el-button
            type="primary"
            v-permission="btnPermission"
            @click="createEvent"
            >{{ buttonText }}</el-button
          >
          <el-button
            v-if="buttonTexts"
            type="primary"
            @click="createStrategy"
            >{{ buttonTexts }}</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { setRegionId } from "@/utils/auth";
import Hub from "@/utils/VueEvent";
export default {
  props: {
    // isAble:[Boolean],
    name: [String],
    stack: "",
    btnPermission: [Array],
    buttonText: [String, Array],
    buttonTexts: [String],
    type: [String],
    titleText: [String],
    tip: [String]
    // regionData: [Array, Object],
    // currentIds: [String]
  },
  data() {
    return {
      cloud: this.$store.state.user.cloud,
      activeName: "first",
      // currentId: this.currentIds, // 天翼云资源池
      pibcurrentId: "",
      ctyunId: "",
      areas: this.$store.state.user.regionList,
      ctyunRegion: {},
      publicRegion: {}
    };
  },
  mounted() {
    Hub.$on("getUuid", info => {
      if (window.sessionStorage.getItem("activeName") === "私有云") {
        this.ctyunId = info;
        this.$store.commit("SET_UUID", this.ctyunId);
        setRegionId(this.ctyunId);
      } else if (window.sessionStorage.getItem("activeName") === "公有云") {
        this.pibcurrentId = info;
        this.$store.commit("SET_UUID", this.pibcurrentId);
        setRegionId(this.pibcurrentId);
      }
    });
    // Hub.$on("nowRegion", info => {});
  },
  created() {
    this.determineIsCtyun();
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    addEbs() {},
    createEvent(fun) {
      this.$emit("create", fun);
    },
    createEvent_Def(fun) {
      this.$emit("createDef", fun);
    },
    createStrategy() {
      this.$emit("strategy");
    },
    determineIsCtyun() {
      let region = this.$store.state.user.regionList;
      let regionA = [];
      let regionB = [];
      region.forEach(element => {
        if (element.type === 2) {
          regionA.push(element);
        } else {
          regionB.push(element);
        }
      });
      this.ctyunRegion = regionA[0];
      this.publicRegion = regionB[0];
    }
  },
  watch: {
    $route(to, from) {
      this.cloud = this.$store.state.user.cloud;
      // data数据操作
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  background: #ffffff;
  // border-bottom: 1px solid #f8f9fb;
  position: relative;
  // padding: 10px 30px 10px 10px;
  // border-bottom: 1px solid #e2e2e2;
  .top_title_con {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
  .addTitle {
    width: 1.2em;
    height: 1.2em;
    margin-right: 5px;
    vertical-align: sub;
  }
  .btn:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
  .areaButton {
    display: block;
    min-width: 90px;
    padding: 0 10px;
    height: 30px;
    margin-bottom: 15px;
    background: #f0f2f7;
    float: left;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /deep/ .el-main {
    padding: 0 20px;
  }
  /deep/ .areaButton-bg {
    background: #f9cd76;
    border-color: #f9cd76;
    color: #ffffff;
  }
  /deep/ .areaButton:hover {
    background: #f9cd76;
    border-color: #f9cd76;
    color: #ffffff;
  }
}
.clear {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.line {
  height: 10px;
  width: 100%;
  background: #f0f2f7;
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
.btn {
  float: right;
}
.right {
  float: right;
}
</style>
