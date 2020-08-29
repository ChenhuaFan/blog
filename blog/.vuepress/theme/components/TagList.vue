<template>
  <div style="text-align: center;">
    <el-row :gutter="20">
      <el-col
        style="margin: 10px 0;"
        v-for="tag in tags"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
      >
        <Tag :tag="tag" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  name: "TagList",

  components: {
    Tag,
  },

  props: ["tags"],
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
</style>