<template>
  <div style="text-align: center;">
    <el-row :gutter="20">
      <el-col
        style="margin: 10px 0;"
        v-for="tag in tags"
        :xs="12"
        :sm="8"
        :md="8"
        :lg="6"
        :xl="6"
      >
        <slot v-bind="tag"></slot>
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
