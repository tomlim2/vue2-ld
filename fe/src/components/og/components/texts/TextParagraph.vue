<template>
    <p :class="['paragraph', usage]">
        <slot />
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "text-paragraph",
    display: "Text Paragraph",
    props: {
        usage: {
            type: String,
            default: 'page'
        }
    }
});
</script>

<style scoped>
.paragraph {}

ul {
    margin-top: 8px;
    padding-left: 0;
}

li {
    display: flex;
    align-items: center;
    margin-top: 4px;
}
</style>