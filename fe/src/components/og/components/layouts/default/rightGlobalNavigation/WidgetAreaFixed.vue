<template>
    <div class="widget-area-fixed">
        <h3>Fixed Widgets</h3>
        <div class="widget-component">
            Fixed widget 1
        </div>
        <div class="widget-component">
            Fixed widget 2
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "widget-area-fixed",
    display: "Widget Area Fixed",
};
</script>

<style scoped >
.widget-area-fixed {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

.widget-component {
    padding: 8px;
    width: 100%;
    height: 54px;
    background-color: mediumspringgreen;
    color: #000;
    border-radius: 10px;
    border: 2px solid #000;
}
</style>