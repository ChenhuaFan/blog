<template>
  <span>{{ time }}</span>
</template>

<script>
export default {
  computed: {
    time: () => {
      const now = new Date();
      const start = new Date(2019, 3, 1);
      return Math.floor((now.getTime() - start.getTime())/(1000*60*60*24));
    },
  },
};
</script>

<style scoped>
</style>