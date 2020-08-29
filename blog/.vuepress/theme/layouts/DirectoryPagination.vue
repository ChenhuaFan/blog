<template>
  <Special>
    <div>{{ $pagination['_matchedPages'].length }}</div>
  </Special>
</template>

<script>
import Special from "@theme/layouts/Special.vue";

export default {
  name: "DirectoryPagination",

  components: {
    Special,
  },
};
</script>
