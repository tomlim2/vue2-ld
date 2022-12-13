<template>
    <WidgetItemWrapper>
        <div class="widget-custom-type-D">
            widget-custom-type-D
        </div>
    </WidgetItemWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetItemWrapper from '@/components/og/components/widgets/WidgetItemWrapper.vue';
export default defineComponent({
    name: "widget-custom-type-D",
    display: "Widget Custom Type D",
    components: {
        WidgetItemWrapper
    }
});
</script>

<style scoped >
.widget-custom-type-D {
    height: 90px;
}
</style>