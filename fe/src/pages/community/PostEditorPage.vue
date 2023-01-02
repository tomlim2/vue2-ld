<template>
  <div id="post-editor-page">
    PostEditorPage {{ isUpdate ? "Update" : "Create" }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    isUpdate() {
      return this.$route.params.postId !== undefined;
    },
  },
});
</script>

<style lang="scss" scoped>
#post-editor-page {
  background: navy;
}
</style>