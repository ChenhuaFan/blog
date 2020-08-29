<template>
  <div class="animation-shake" style="display: inline-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.animation-shake {
  animation: shakeTopx 4s infinite;
}

@keyframes shakeTopx {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  5% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  10%,
  20%,
  30% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  15%,
  25%,
  35% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  40% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  45% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>