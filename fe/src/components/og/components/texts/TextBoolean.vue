<template>
    <span :class="['boolean', {on: boolean}]">
        <slot />
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "text-boolean",
    display: "Text Boolean",
    props: {
        boolean: {
            type: Boolean,
            required: false
        }
    }
});
</script>

<style scoped>
.boolean {
    color: red;
    font-weight: 600;
    transition: 150ms ease-in-out all;
}
.on{
    color: green;
}
</style>