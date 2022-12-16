<template>
    <div :class="['title', usage]">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "text-title",
    display: "Widget Area",
    props: {
        usage: {
            type: String,
            default: 'page'
        }
    }
});
</script>

<style scoped>
.title {
    
}

.page {
    font-size: 1.8rem;
    font-weight: 700;
}

.main {
    font-size: 1.45rem;
    font-weight: 600;
}

.list {
    font-size: 1.25rem;
    font-weight: 600;
}
</style>