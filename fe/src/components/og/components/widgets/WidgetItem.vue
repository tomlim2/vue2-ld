<template>
    <div class="widget-item">
        <WidgetCustomTypeA v-if="widgetSingleData.type == 'typeA'" />
        <WidgetCustomTypeB v-if="widgetSingleData.type == 'typeB'" />
        <WidgetCustomTypeC v-if="widgetSingleData.type == 'typeC'" />
        <WidgetCustomTypeD v-if="widgetSingleData.type == 'typeD'" />
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import WidgetCustomTypeA from '@/components/og/components/widgets/custom/WidgetCustomTypeA.vue';
import WidgetCustomTypeB from '@/components/og/components/widgets/custom/WidgetCustomTypeB.vue';
import WidgetCustomTypeC from '@/components/og/components/widgets/custom/WidgetCustomTypeC.vue';
import WidgetCustomTypeD from '@/components/og/components/widgets/custom/WidgetCustomTypeD.vue';

interface Widget {
    name: string
    type: string
    widgetId: number | string
}

export default defineComponent({
    name: "widget-item",
    display: "Widget-item",
    components: {
        WidgetCustomTypeA,
        WidgetCustomTypeB,
        WidgetCustomTypeC,
        WidgetCustomTypeD
    },
    props: {
        widgetSingleData: {
            type: Object as PropType<Widget>,
            required: true
        }
    },
    methods: {
        log: function (evt: any) {
            window.console.log(evt);
        }
    }
});
</script>

<style>
.widget-item {
    width: 100%;
    color: #252525;
}
</style>