<template>
    <div class="right-global-navigation">
        <WidgetAreaFixed/>
        <WidgetAreaCustom/>
    </div>
</template>

<script lang="ts">
import WidgetAreaFixed from './rightGlobalNavigation/WidgetAreaFixed.vue';
import WidgetAreaCustom from './rightGlobalNavigation/WidgetAreaCustom.vue';

export default {
    name: "right-global-navigation",
    display: "Right Global Navigation",
    components: { WidgetAreaCustom, WidgetAreaFixed }
};
</script>

<style scoped>
.right-global-navigation{
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-direction: column;
    width: 340px;   
    height: 100vh;
    padding: 16px;
    border-left: #252525 solid 2px;
    background-color: white;
}
</style>