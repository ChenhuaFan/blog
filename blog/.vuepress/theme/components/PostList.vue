<template>
  <div>
    <ul>
      <li v-for="(post, i) in posts" :key="i">
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
  margin: 2rem 0;
}

/* li::-moz-list-bullet {
  color: rgb(179, 179, 179);
} */

li:first-child {
  margin: 0;
}
</style>
