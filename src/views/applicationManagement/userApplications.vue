<template>
  <div class="applicationManage">
    <el-card class="application-container">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>应用管理
      </div>
      <!--  -->
      <!-- 边缘节点数量部分 -->
      <div class="textItem">
        <div class="numberNode">
          <span class="el-icon-help"></span>
          <span>
            <p>
              边缘节点数量
            </p>
            <h3>3</h3>
          </span>
        </div>
        <div class="elButton">
          <el-button style="float:right" type="primary" @click="editItem"
            >新增</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "applicationManage",
  components: {},
  now: "",
  props: {},
  data() {
    return {
      message: "123456g",
      firstName: "Foo",
      lastName: "Bar333"
    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + "" + this.lastName;
      },
      // setter
      set(newValue) {
        console.log("setnewValue", newValue);
        var names = newValue.split("");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.textItem {
  display: flex;
  justify-content: space-between;
}
.numberNode {
  width: 196px;
  display: flex;
  justify-content: space-between;
}
.numberNode span:nth-child(2) p {
  margin-top: 6px;
}
.el-icon-help {
  font-size: 30px;
  color: #409eff;
}
</style>
