<template>
    <h2 class="text-title">
        <slot />
    </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "text-title",
    display: "Widget Area",
});
</script>

<style scoped>
h2 {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 700;
}
</style>