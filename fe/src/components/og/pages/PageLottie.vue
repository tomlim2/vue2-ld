<template>
    <div class="page-home">
        <SectionLottie />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

import SectionLottie from '@/components/og/sections/lottie/sectionLottie.vue';

export default defineComponent({
    name: "page-lottie",
    display: "Page Lottie",
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget'; }
    },
    components: { SectionLottie }
})
</script>

<style scoped>
</style>