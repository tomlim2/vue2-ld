<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <div id="profile-page">
    <tabs :tabs="['playground']" />
    UserPage
    <router-view></router-view>
  </div>
</template>
