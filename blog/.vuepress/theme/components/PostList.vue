<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <PostPreview :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["posts"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
}
</style>