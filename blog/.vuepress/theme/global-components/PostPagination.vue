<template>
  <Special>
    <CatSay :content="$frontmatter.title" />
    <Pagination
      :total="totalPagesLength"
      :current="1"
      :pages="3"
      :nextPath="$pagination.nextLink"
      :prePath="$pagination.prevLink"
    />
    <br />
    <PostList :posts="$pagination.pages" />
    <br />
    <Pagination
      :total="totalPagesLength"
      :current="1"
      :pages="3"
      :nextPath="$pagination.nextLink"
      :prePath="$pagination.prevLink"
    />
  </Special>
</template>

<script>
import PostList from "@theme/components/PostList.vue";
export default {
  name: "DirectoryPagination",

  components: { PostList },

  computed: {
    currentTag() {
      const tag = this.$route.path.split("/")[2];
      if (!tag || tag === "page" || tag === "post") return "所有文章";
      return tag;
    },
    totalPagesLength() {
      return this.$pagination._matchedPages.length;
    },
    currentPage() {
      return this.$pagination;
    },
  },

  methods: {
    nextPage() {},
  },
};
</script>
