<template>
  <Special>
    <h1 style="margin-bottom: 2rem;">
      <i class="el-icon-collection-tag"></i> 标签
    </h1>
    <el-switch v-model="isSortByName" active-text="按标签名排序" inactive-text="按篇数排序"></el-switch>
    <TagList :tags="getTagList" />
  </Special>
</template>

<script>
import Special from "@theme/layouts/Special.vue";
import TagList from "@theme/components/TagList.vue";

export default {
  name: "FrontmatterKey",

  data() {
    return {
      isSortByName: true,
      sort: {
        byName: undefined,
        byNumber: (a, b) => b["pages"] - a["pages"],
      },
    };
  },

  components: {
    Special,
    TagList,
  },

  computed: {
    getSortMethod() {
      return this.isSortByName ? undefined : this.sort["byNumber"];
    },

    getTagList() {
      return this.$frontmatterKey.list
        .map((item) => {
          return {
            name: item["name"],
            pages: item["pages"].length,
            path: item["path"],
          };
        })
        .sort(this.getSortMethod);
    },
  },
};
</script>
