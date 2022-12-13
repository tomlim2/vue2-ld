<template>
    <WidgetItemWrapper>
        <div class="widget-custom-type-C">
            widget-custom-type-C
        </div>
    </WidgetItemWrapper>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetItemWrapper from '@/components/og/components/widgets/WidgetItemWrapper.vue';
export default defineComponent({
    name: "widget-custom-type-C",
    display: "Widget Custom Type C",
    components: {
        WidgetItemWrapper
    }
});
</script>

<style scoped >
.widget-custom-type-C {
    height: 150px;
}
</style>