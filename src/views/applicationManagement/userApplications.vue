<template>
  <div class="userApplications">
    用户应用

    <div>
      <p>
        计算属性
      </p>
      <p id="demo">{{ fullName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "userApplications",
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

<style scoped lang="less"></style>
