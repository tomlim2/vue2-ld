<template>
    <div class="layout">
        <LeftGlobalNavigation />
        <main class="main">
            <router-view />
        </main>
        <RightGlobalNavigation />
    </div>
</template>

<script lang="ts">
import LeftGlobalNavigation from '@/components/og/components/layouts/default/LeftGlobalNavigation.vue'
import RightGlobalNavigation from '@/components/og/components/layouts/default/RightGlobalNavigation.vue'

export default {
    name: "layout-default",
    display: "Layout Default",
    components: {
        LeftGlobalNavigation,
        RightGlobalNavigation
    }
};
</script>

<style scoped>
.main{
    margin-left: 72px;
    width: calc(100vw - 340px - 72px) ;
    min-height: 100vh;
}
</style>