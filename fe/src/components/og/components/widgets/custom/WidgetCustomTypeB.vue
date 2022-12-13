<template>
    <WidgetItemWrapper>
        <div class="widget-custom-type-B">
            widget-custom-type-B
        </div>
    </WidgetItemWrapper>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetItemWrapper from '@/components/og/components/widgets/WidgetItemWrapper.vue';
export default defineComponent({
    name: "widget-custom-type-B",
    display: "Widget Custom Type B",
    components: {
        WidgetItemWrapper
    }
});
</script>

<style scoped >
.widget-custom-type-B {
    height: 90px;
}
</style>