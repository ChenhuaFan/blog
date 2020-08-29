<template>
  <PostPreview :post="randomPost" />
</template>

<script>
export default {
  props: ["posts"],

  computed: {
    randomPost() {
      let rp = {};
      while (!rp.title) {
        rp = this.posts[Math.floor(Math.random() * this.posts.length)];
      }
      return rp;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.5rem;
}
</style>