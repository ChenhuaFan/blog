<template>
  <Special>
    <div>{{ $pagination.pages.length }}</div>
  </Special>
</template>

<script>
import Special from "@theme/layouts/Special.vue";

export default {
  name: "FrontmatterPagination",

  components: {
    Special,
  },
};
</script>
