<template>
  <div class="applicationDetails" v-html="this.storeData.detail">应用详情</div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      storeData: {}
    };
  },
  computed: {},
  watch: {},
  created() {
    this.storeData = JSON.parse(sessionStorage.getItem("currentData"));
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
