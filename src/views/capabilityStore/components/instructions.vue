<template>
  <div class="instructions" v-html="this.storeData.desc">使用说明</div>
</template>

<script>
export default {
  name: "instructions",
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
