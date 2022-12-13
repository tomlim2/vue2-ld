<template>
    <div class="widget-wrapper">
        <slot/>
    </div>
</template>

<script lang="ts">
export default {
    name: "widget-wrapper",
    display: "Widget Wrapper",
};
</script>

<style scoped >
.widget-wrapper {
    border: 2px #252525 solid;
    border-radius: 10px;
    padding: 4px;   
    background-color: #ededed;
}
</style>