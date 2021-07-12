<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <h4>
        <a
          :href="tag['path']"
          @click="saveHistory"
          v-html="tag['name']"
        ></a>
      </h4>
      <p class="number">{{ tag["pages"] }} 篇</p>
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
.number {
  font-size: 12px;
  color: lightgray;
  font-weight: bolder;
}
</style>
