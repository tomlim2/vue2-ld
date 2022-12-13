<template>
    <div class="widget-area-fixed">
        <h3>Widget Fixed Part</h3>
        <div class="widget-component">
            widget fixed 1
        </div>
        <div class="widget-component">
            widget fixed 2
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
    width: 100%;
    height: 54px;
    background-color: #efefef;
    color: #252525;
    border-radius: 10px;
}
</style>