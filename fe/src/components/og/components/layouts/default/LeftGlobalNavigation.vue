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
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    gap: 4px;
    
    flex-direction: column;
    width: 72px;   
    height: 100vh;
    padding-top: 4px;
    background-color: rgba(0, 0, 0, .02);
}
a,
.status{
    padding-left: 4px;
    text-decoration: none;
    font-size: .75rem;
    color: black;
}
</style>