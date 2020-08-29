<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :current-page="currentIndex"
    @prev-click="clickPreButton"
    @next-click="clickNextButton"
  ></el-pagination>
</template>

<script>
export default {
  props: ["total", "nextPath", "prePath"],

  computed: {
    currentIndex() {
      const curPath = this.$route.path.split("/");
      const index = Number(curPath[curPath.length - 2]);
      if (index === NaN) return 1;
      return index;
    },
  },

  methods: {
    jumpTo(page) {
      this.$router.push(page);
    },
    clickPreButton() {
      if (!this.prePath) return;
      this.jumpTo(this.prePath);
    },
    clickNextButton() {
      if (!this.nextPath) return;
      this.jumpTo(this.nextPath);
    },
  },
};
</script>

<style scoped>
</style>