<template>
    <div class="layout">
        <LeftGlobalNavigation />
        <main class="main">
            <transition name="page-slide">
                <router-view />
            </transition>
        </main>
        <RightGlobalNavigation />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LeftGlobalNavigation from '@/components/og/components/layouts/default/LeftGlobalNavigation.vue'
import RightGlobalNavigation from '@/components/og/components/layouts/default/RightGlobalNavigation.vue'
import { useModel } from '@/models'
const model = useModel()

export default defineComponent({
    name: "layout-default",
    display: "Layout Default",
    components: {
        LeftGlobalNavigation,
        RightGlobalNavigation
    },
    methods: {
        getData: async () => {
            const hey = await model.test.getWidgets()
            console.log(hey, 'hey');
        }
    },
    mounted() {
        this.getData()
    },
});
</script>

<style scoped>
@import '@/components/og/styles/transitions.css';

.main {
    margin-left: 72px;
    width: calc(100vw - 340px - 72px);
    min-height: 100vh;
}
</style>