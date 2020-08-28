<template>
  <div>
    <PostPreview
      :title="$site.pages[index]['title']"
      :path="$site.pages[index]['path']"
      :tags="$site.pages[index]['frontmatter']['tags']"
      :time="$site.pages[index]['frontmatter']['date']"
    />
    <!-- {{ $site.pages[index] }} -->
  </div>
</template>

<script>
export default {
  props: ["amount"],

  data() {
    return {
      index: parseInt(Math.random() * this.amount),
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 1.5rem;
}
</style>