<template>
  <div class="post-preview">
    <a class="title" :href="post.path">{{ post.title }}</a>
    <div class="info">
      <p class="displayInline time">{{ dateFormat("YYYY年mm月dd日", new Date(post.frontmatter.date)) }}</p>
      <ul class="displayInline">
        <li v-for="tag in post.frontmatter.tags">
          <el-tag type="info">
            <el-link
              type="info"
              :href="`/tag/${tag}/`"
              :underline="false"
              icon="el-icon-collection-tag"
            >{{ tag }}</el-link>
          </el-tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: ["post"],

  methods: {
    dateFormat: (fmt, date) => {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString(),
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
  },
};
</script>

<style scoped>
.post-preview {
  width: 100%;
  margin: 1rem 0;
}

.post-preview > a {
  font-size: 1.2rem;
  cursor: pointer;
}

.info {
  padding: 0.5rem 0;
  font-size: 0.8rem;
}

.displayInline {
  display: inline;
}

.time {
  color: rgb(179, 179, 179);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
}

ul > li {
  display: inline-block;
  padding: 0;
  margin: 0 0.5rem;
}
</style>