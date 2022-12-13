<template>
    <div class="widget-area">
        <h3>Widget Custom Part</h3>
        <WidgetHub />
    </div>
</template>

<script lang="ts">
import WidgetHub from '@/components/og/components/widgets/WidgetHub.vue'

export default {
    name: "widget-area",
    display: "Widget Area",
    components: {
        WidgetHub
    },
};
</script>

<style scoped>
.widget-area {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-top: 18px;
}
</style>