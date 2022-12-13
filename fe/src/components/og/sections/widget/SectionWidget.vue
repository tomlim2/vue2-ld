<template>
    <div class="section-widget">
        <WidgetHub type="available" :widgetList="availableWidgets" />
    </div>
</template>

<script lang="ts">
import WidgetHub from '@/components/og/components/widgets/WidgetHub.vue'
import store from '@/store';

export default {
    name: "section-widget",
    display: "Section Widget",
    components: {
        WidgetHub
    },
    computed:{
        availableWidgets: ()=> {
            return store.state.widgetList.available
        }
    }
    
};
</script>