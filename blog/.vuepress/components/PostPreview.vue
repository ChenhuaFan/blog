<template>
  <div class="post-preview">
    <a class="title" :href="path">{{ title }}</a>
    <div class="info">
      <p class="displayInline time">{{ formatTime }}</p>
      <ul class="displayInline">
        <li v-for="tag in tags">🏷 {{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
function dateFormat(fmt, date) {
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
}

export default {
  props: ["title", "path", "tags", "time"],
  computed: {
    formatTime() {
      if (this.time === undefined) return "";
      return dateFormat("YYYY年mm月dd日", new Date(this.time));
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
}

.displayInline {
  display: inline;
}

.time {
  font-size: 0.8rem;
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