<template>
  <Special>
    <h1 style="margin-bottom: 2rem;">
      <span class="cat">🐱</span>
      <span class="buble"
        >{{ $frontmatter.title }}<span class="arrow"></span
      ></span>
    </h1>
    <Pagination
      :total="totalPagesLength"
      :current="1"
      :pages="3"
      :nextPath="$pagination.nextLink"
      :prePath="$pagination.prevLink"
    />
    <br />
    <!-- <el-card class="box-card"> -->
    <PostList :posts="$pagination.pages" />
    <!-- </el-card> -->
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

  mounted() {
    console.log(this.$pagination);
    console.log(this.$route);
  },

  methods: {
    nextPage() {},
  },
};
</script>

<style scoped>
.cat {
}
.buble {
  display: inline-block;
  background: rgb(102, 51, 153);
  color: white;
  padding: 10px 20px;
  margin: 0;
  border-radius: 20px;
  position: relative;
  top: -6px;
  left: 10px;
  box-sizing: border-box;
  /* height: 40px; */
  padding: 10px inherit;
  font-size: 18px;
}
.arrow {
  width: 0;
  height: 0;
  border-bottom: 6px solid transparent; /* 下边框的高 */
  border-top: 6px solid transparent; /* 上方边框的高 */
  border-right: 14px solid rgb(102, 51, 153); /* 右边框的长度|宽度，以及背景色 */
  font-size: 0;
  line-height: 0;
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
}
.move {
  animation: pops 0.5s ease-in infinite alternate;
}
@keyframes pops {
  0% {
    left: 15px;
  }
  100% {
    left: 10px;
  }
}
</style>
