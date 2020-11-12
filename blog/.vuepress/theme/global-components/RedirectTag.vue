<template>
  <el-tag type="info" style="margin-bottom: 5px">
    <el-link
      type="info"
      :href="`/tag/${tag}/`"
      :underline="false"
      icon="el-icon-collection-tag"
      >{{ tag }}</el-link
    >
  </el-tag>
</template>

<script>
export default {
    name: "RedirectTag",
    props: {
        tag: String
    }
}
</script>