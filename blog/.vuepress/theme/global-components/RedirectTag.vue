<template>
  <!-- <el-tag type="info" style="margin-bottom: 5px">
    <el-link
      type="info"
      :href=""
      :underline="false"
      icon="el-icon-collection-tag"
      >{{ tag }}</el-link
    >
  </el-tag> -->
  <a class="tag" :href="`/tag/${tag}/`">{{ tag }}</a>
</template>

<script>
export default {
  name: "RedirectTag",
  props: {
    tag: String,
  },
};
</script>

<style scoped>
.tag {
  border-bottom: 1px rebeccapurple dotted;
  color: rebeccapurple;
  font-weight: bolder;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s;
}
.tag:hover,
.tag:active {
  color: purple;
}
</style>
