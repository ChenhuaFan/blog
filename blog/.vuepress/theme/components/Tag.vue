<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <h4>
        <a :href="tag['path']" @click="saveHistory">{{ tag["name"] }}</a>
      </h4>
      <p>
        <el-tag type="info">{{ tag["pages"] }} 篇</el-tag>
      </p>
    </el-card>
  </div>
</template>

<script>
import { saveTagHistoryToSessionStorage } from "../util";
export default {
  name: "Tag",
  props: ["tag"],
  methods: {
    saveHistory() {
      saveTagHistoryToSessionStorage(this.tag);
    },
  },
};
</script>

<style scoped>
</style>