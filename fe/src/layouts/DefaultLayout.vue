<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <div>
    <GNB></GNB>
    <main>
      <router-view /> <!-- Page -->
    </main>
    <RNB></RNB>
  </div>
</template>
