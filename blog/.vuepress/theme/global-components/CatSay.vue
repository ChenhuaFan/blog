<template>
  <h1 style="display: flex;">
    <div class="cat"><span class="moving-cat">🐱</span></div>
    <div>
      <div class="buble">
        "{{ content }}"
        <span class="arrow"></span>
        <span class="meow">meow！</span>
      </div>
      <p class="sub-content" v-if="subText">{{ subText }}</p>
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    content: String,
    subText: String,
  },
};
</script>

<style scoped>
.cat {
  position: relative;
  align-items: center;
}
.buble {
  width: fit-content;
  background: rgb(102, 51, 153);
  color: white;
  margin: 0;
  border-radius: 10px;
  position: relative;
  left: 10px;
  padding: 10px 15px;
  font-size: 18px;
  margin-left: 6px;
  text-align: left;
}
.sub-content {
  font-size: 12px;
  margin: 0 16px;
  text-align: left;
  color: lightgray;
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
  top: 21px;
  transform: translateY(-50%);
}
.meow {
  color: rgb(117, 73, 161);
}
.moving-cat {
  position: relative;
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
