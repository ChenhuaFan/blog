<template>
  <el-card class="box-card" shadow="hover">
    <h4>
      <a :href="post.path">{{ post.title }}</a>
    </h4>
    <div class="info">
      <p class="displayInline">
        <i class="el-icon-time"></i>
        {{ dateFormat("YYYY年mm月dd日", new Date(post.frontmatter.date)) }}
      </p>
      <ul class="displayInline">
        <li v-for="tag in post.frontmatter.tags">
          <el-tag type="info">{{ tag }}</el-tag>
        </li>
      </ul>
    </div>
  </el-card>
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
.info {
  padding: 0.5rem 0;
  font-size: 0.8rem;
}

.displayInline {
  display: inline;
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