<template>
  <header id="navigation-bar">
    <Logo
      :fillColor="'#fff'"
      :hoverColor="'#f00'"
    />
    <nav>Nav</nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/icons/Logo.vue";

export default defineComponent({
  components: {
    Logo,
  },
});
</script>

<style lang="scss" scoped>
#navigation-bar {
  height: 100vh;
  width: 72px;
  border-right: 1px solid black;
}
</style>