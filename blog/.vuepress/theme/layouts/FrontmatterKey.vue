<template>
  <Special>
    <h1 style="margin-bottom: 2rem">
      <i class="el-icon-collection-tag"></i> 标签
    </h1>
    <!-- <div class="history">
      <el-tooltip
        v-for="(tag, i) in histories"
        :key="i"
        effect="dark"
        content="您在过去的一段时间内访问过这个标签"
        placement="top-start"
      >
        <RedirectTag :tag="tag.name || 'tag'" />
      </el-tooltip>
    </div> -->
    <el-input
      placeholder="筛查标签"
      prefix-icon="el-icon-search"
      v-model="search"
    >
    </el-input>
    <div class="tags-wrapper">
      <TagList :tags="filtedTagList" />
    </div>
  </Special>
</template>

<script>
import TagList from "@theme/components/TagList.vue";
// import { getTagHistoryFromSessionStorage } from "../util";

function isMatchQuery(word, query) {
  if (typeof word !== "string" || typeof query !== "string") return false;
  if (query === "") return true;
  return word.search(new RegExp(query, "i")) >= 0;
}

export default {
  name: "FrontmatterKey",

  data() {
    return {
      search: "",
      // histories: [],
    };
  },

  components: {
    TagList,
  },

  created() {
    // this.histories = getTagHistoryFromSessionStorage();
  },

  computed: {
    filtedTagList() {
      let filtedList = [];
      const tags = this.$frontmatterKey.list;
      if (!(tags instanceof Array)) return [];
      tags.forEach((tag) => {
        const { name, pages, path } = tag;
        if (!isMatchQuery(name, this.search)) return;
        filtedList.push({
          name,
          pages: pages.length,
          path,
        });
      });
      return filtedList;
    },
  },
};
</script>

<style scoped>
.tags-wrapper {
  max-height: calc(100vh - 320px);
  overflow-y: auto;
  overflow-x: hidden;
  margin: 20px 0;
}

.history {
  margin-bottom: 1rem;
}
.history > * {
  margin-right: 5px;
}
</style>
