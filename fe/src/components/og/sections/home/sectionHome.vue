<template>
    <div class="section-home">
        <TextTitle>
            HOME
        </TextTitle>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

import TextTitle from '@/components/og/components/texts/TextTitle.vue';

export default defineComponent({
    name: "section-home",
    display: "Section Home",
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget'; }
    },
    components: { TextTitle }
})
</script>

<style scoped>
.section-home {
    padding: 16px;
    color: black;
}
</style>