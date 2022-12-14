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
import { defineComponent } from 'vue'

import LeftGlobalNavigation from '@/components/og/components/layouts/default/LeftGlobalNavigation.vue'
import RightGlobalNavigation from '@/components/og/components/layouts/default/RightGlobalNavigation.vue'

import axios from 'axios'

export default defineComponent({
    name: "layout-default",
    display: "Layout Default",
    components: {
        LeftGlobalNavigation,
        RightGlobalNavigation
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData: async () => {
            const hey = await axios.get('http://localhost:3000/api/hello')
            console.log(hey, 'hey');
        }
    }
});
</script>

<style scoped>
.main {
    margin-left: 72px;
    width: calc(100vw - 340px - 72px);
    min-height: 100vh;
}
</style>