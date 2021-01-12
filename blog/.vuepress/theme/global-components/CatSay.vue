<template>
  <h1 style="margin-bottom: 2rem;">
    <span class="cat">🐱</span>
    <span class="buble">"{{ content }}" Here!<span class="arrow"></span></span>
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
