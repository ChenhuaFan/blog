<template>
  <el-pagination
    class="pagination"
    background
    layout="pager"
    :total="total"
    :current-page="currentIndex"
    @current-change="clickPageButton"
  ></el-pagination>
</template>

<script>
export default {
  props: ["total", "nextPath", "prePath"],

  computed: {
    pathArray() {
      return (divider) => this.$route.path.split(divider);
    },
    currentIndex() {
      const curPath = this.pathArray("/"),
        curPathLen = curPath.length;
      const index = Number(curPath[curPathLen - 2]);
      if (index !== NaN && curPath[curPathLen - 3] === "page") return index;
      return 1;
    },
  },

  methods: {
    jumpTo(page) {
      this.$router.push(page);
    },
    clickPageButton(target) {
      console.log(this.currentIndex, target);
      if (this.currentIndex === target) return;
      let curPath = this.pathArray("page");
      if (target == 1) {
        this.jumpTo(`${curPath[0]}`);
      } else {
        this.jumpTo(`${curPath[0]}page/${target}/`);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-left: -10px;
}
</style>
