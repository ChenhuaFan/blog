<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content" style="text-align: center">
      <CatSay :content="$page.title" />
    </div>

    <Content class="theme-default-content" />

    <div class="theme-default-content" id="comment-container"></div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
