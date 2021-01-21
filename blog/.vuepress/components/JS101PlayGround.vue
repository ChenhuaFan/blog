<template>
  <div class="playground">
    <div class="fixed-box">
      <span class="tag">JS 101 游乐场</span><span class="name">{{ name }}</span>
    </div>
    <component :is="now" />
  </div>
</template>

<script>
import ComponentsMap from "./JS101PlayGroundComponents";
export default {
  name: "JS101PlayGround",
  props: {
    type: String,
    name: String,
  },
  computed: {
    now() {
      return ComponentsMap[this.type];
    },
  },
};
</script>

<style scoped>
.playground {
  padding: 30px 16px 16px 16px;
  border: blueviolet 1px solid;
  position: relative;
  width: auto;
}
.fixed-box {
  position: absolute;
  top: -3px;
  left: 0;
}
.name {
  font-size: 12px;
  padding: 0;
  margin-left: 4px;
}
.tag {
  height: 16px;
  font-size: 12px;
  background: blueviolet;
  color: white;
  width: fit-content;
  padding: 2px 4px;
}
</style>
