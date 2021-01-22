<template>
  <h1 style="margin-bottom: 2rem; display: flex;">
    <span class="cat moving-cat">🐱</span>
    <div class="buble">"{{ content }}！"<span class="arrow"></span></div>
  </h1>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped>
.cat {
  position: relative;
}
.buble {
  width: fit-content;
  background: rgb(102, 51, 153);
  color: white;
  margin: 0;
  border-radius: 20px;
  position: relative;
  left: 10px;
  padding: 10px 15px;
  font-size: 18px;
  margin-left: 6px;
}
.arrow {
  width: 0;
  height: 0;
  border-bottom: 8px solid transparent; /* 下边框的高 */
  border-top: 8px solid transparent; /* 上方边框的高 */
  border-right: 14px solid rgb(102, 51, 153); /* 右边框的长度|宽度，以及背景色 */
  font-size: 0;
  line-height: 0;
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
}
.moving-cat {
  animation: pops 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite alternate;
}
@keyframes pops {
  0% {
    top: 0;
  }
  50% {
    top: -4px;
  }
  100% {
    top: 0;
  }
}
</style>
