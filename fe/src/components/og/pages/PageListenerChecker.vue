<template>
    <div class="page-listener-checker">
        <SectionListenChecker/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'
import SectionListenChecker from '../sections/listenerChecker/sectionListenChecker.vue';

export default defineComponent({
    name: "page-home",
    display: "Page Home",
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget'; }
    },
    components: { SectionListenChecker }
})
</script>

<style scoped>
.page-listener-checker{
    color: red;
}
</style>