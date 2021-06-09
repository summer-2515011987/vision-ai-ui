<template>
  <div class="edgeNodeConfig">
    <createBtn
      titleText="边缘节点配置"
      buttonText="刷新"
      :btnDisabled="!btnDisabled"
      @create="addHost"
    />
  </div>
</template>

<script>
import createBtn from "@/components/createBtn";
export default {
  name: "edgeNodeConfig",
  components: {
    createBtn
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
