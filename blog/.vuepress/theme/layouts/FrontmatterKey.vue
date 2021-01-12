<template>
  <Special>
    <!-- <h1 style="margin-bottom: 2rem">
      <i class="el-icon-collection-tag"></i> 标签
    </h1> -->
    <CatSay content="标签" />
    <el-input
      placeholder="筛查标签"
      prefix-icon="el-icon-search"
      v-model="search"
    >
    </el-input>
    <div class="tags-wrapper">
      <TagList :tags="filtedTagList">
        <template v-slot="tag">
          <Tag :tag="hightLightKeyWord(tag)" />
        </template>
      </TagList>
    </div>
  </Special>
</template>

<script>
import TagList from "@theme/components/TagList.vue";
import Tag from "@theme/components/Tag.vue";

export default {
  name: "FrontmatterKey",

  data() {
    return {
      search: "",
    };
  },

  components: {
    TagList,
    Tag,
  },

  computed: {
    reg() {
      return new RegExp(`${this.search}`, "i");
    },
    filtedTagList() {
      let filtedList = [];
      const tags = this.$frontmatterKey.list;
      if (!(tags instanceof Array)) return [];
      tags.forEach((tag) => {
        const { name, pages, path } = tag;
        if (!this.isMatchQuery(name)) return;
        filtedList.push({
          name,
          pages: pages.length,
          path,
        });
      });
      return filtedList;
    },
  },

  methods: {
    hightLightKeyWord(tag) {
      if (!this.search) return tag;
      const raw = tag.name;
      let hl = raw.replace(
        this.reg,
        "<span style='background: yellow;'>$&</span>"
      );
      tag.name = hl;
      return tag;
    },
    isMatchQuery(word) {
      return word.search(this.reg) >= 0;
    },
  },
};
</script>

<style scoped>
.tags-wrapper {
  max-height: calc(100vh - 290px);
  overflow-y: auto;
  overflow-x: hidden;
  margin: 20px 0;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.tags-wrapper::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

.history {
  margin-bottom: 1rem;
}
.history > * {
  margin-right: 5px;
}
</style>
