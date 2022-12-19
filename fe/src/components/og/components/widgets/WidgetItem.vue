<template>
    <div class="widget-item">
        <WidgetItemWrapper :removeItem="onRemoveButtonClick" :type="type">
            <TextTitle usage="list">{{ widgetSingleData.name }}</TextTitle> 
            <div>
                <WidgetCustomTypeA v-if="widgetSingleData.type == 'typeA'" />
                <WidgetCustomTypeB v-if="widgetSingleData.type == 'typeB'" />
                <WidgetCustomTypeC v-if="widgetSingleData.type == 'typeC'" />
                <WidgetCustomTypeD v-if="widgetSingleData.type == 'typeD'" />
            </div>
        </WidgetItemWrapper>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import WidgetItemWrapper from '@/components/og/components/widgets/WidgetItemWrapper.vue';
import WidgetCustomTypeA from '@/components/og/components/widgets/custom/WidgetCustomTypeA.vue';
import WidgetCustomTypeB from '@/components/og/components/widgets/custom/WidgetCustomTypeB.vue';
import WidgetCustomTypeC from '@/components/og/components/widgets/custom/WidgetCustomTypeC.vue';
import WidgetCustomTypeD from '@/components/og/components/widgets/custom/WidgetCustomTypeD.vue';
import TextTitle from '../texts/TextTitle.vue';

type WidgetType = 'widget-list' | 'widget-user' | undefined

interface Widget {
    name: string
    widgetUid: number | string
    type: string
    apiUrl: string
    feId: number
}

export default defineComponent({
    name: "widget-item",
    display: "Widget-item",
    components: {
    WidgetItemWrapper,
    WidgetCustomTypeA,
    WidgetCustomTypeB,
    WidgetCustomTypeC,
    WidgetCustomTypeD,
    TextTitle
},
    props: {
        type: {
            type: String as PropType<WidgetType>,
            default: undefined
        },
        widgetSingleData: {
            type: Object as PropType<Widget>,
            required: true
        },
        onRemoveButtonClick: {
            type: Function,
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