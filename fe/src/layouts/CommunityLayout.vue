<template>
  <div id="community-layout">
    <NavigationBar />
    <main id="main">
      <div class="layer">
        <router-view />
      </div>
      <div class="layer" v-if="isPostPage || isPostEditorPage">
        <PostPage v-if="isPostPage" />
        <PostEditorPage v-if="isPostEditorPage" />
      </div>
    </main>
    <SideBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import SideBar from "@/components/SideBar.vue";

import PostPage from "@/pages/community/PostPage.vue";
import PostEditorPage from "@/pages/community/PostEditorPage.vue";

export default defineComponent({
  components: {
    NavigationBar,
    SideBar,
    PostPage,
    PostEditorPage,
  },
  computed: {
    isPostPage() {
      return (
        this.$route.path.split("/")[1] == "post" &&
        this.$route.params.postId !== undefined
      );
    },
    isPostEditorPage() {
      return this.$route.path.split("/")[1] == "editor";
    },
  },
});
</script>


<style lang="scss" scoped>
#community-layout {
  position: relative;
  display: grid;
  grid-template-columns: 72px 1fr 320px;
  height: 100vh;
  width: 100vw;
  max-height: 100vw;
  overflow: hidden;

  #main {
    overflow: auto;
    position: relative;
    height: 100vh;

    .layer {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 100%;
      overflow: auto;
    }
  }
}
</style>