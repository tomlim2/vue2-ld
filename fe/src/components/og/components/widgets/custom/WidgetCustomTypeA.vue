<template>
    <WidgetItemWrapper>
        <div class="widget-custom-type-A">
            widget-custom-type-A
        </div>
    </WidgetItemWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetItemWrapper from '@/components/og/components/widgets/WidgetItemWrapper.vue';
export default defineComponent({
    name: "widget-custom-type-a",
    display: "Widget Custom Type A",
    components: {
        WidgetItemWrapper
    }
});
</script>

<style scoped >
.widget-custom-type-A {
    height: 60px;
}
</style>