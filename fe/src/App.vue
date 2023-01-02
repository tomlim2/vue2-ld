<template>
  <div id="app">
    <router-view />
    <ModalArea />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalArea from "@/ModalArea.vue";

export default defineComponent({
  components: {
    ModalArea,
  },
});
</script>

<style lang="scss" scoped>
#app {
  display: block;
  max-width: none;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
</style>