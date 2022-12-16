<template>
    <div class="page-home">
        <SectionHome />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

import SectionHome from '../sections/home/sectionHome.vue';

export default defineComponent({
    name: "page-home",
    display: "Page Home",
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget'; }
    },
    components: { SectionHome }
})
</script>

<style scoped>
</style>