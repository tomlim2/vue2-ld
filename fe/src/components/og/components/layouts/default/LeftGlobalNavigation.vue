<template>
    <div class="left-global-navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/widget">Widget</router-link>
        <span class="status">widget edit mode : {{ widgetEditMode }}</span>
    </div>
</template>

<script lang="ts">
import store from '@/store'

export default {
    name: "left-global-navigation",
    display: "Left Global Navigation",
    computed:{
        widgetEditMode: () => { return store.state.widgetEditMode }
    }
};
</script>

<style scoped>
.left-global-navigation{
    display: flex;
    align-items: center;
    gap: 16px;
    position: fixed;
    left: 0;
    top: 0;
    writing-mode: vertical-lr;
    width: 72px;   
    height: 100vh;
    padding-top: 16px;
    border-right: #252525 solid 2px;
}
a,
.status{
    display: inline;
    text-decoration: none;
    color: black;
    font-weight: 600;
}
</style>