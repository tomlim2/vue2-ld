<template>
    <draggable :v-model="widgetListInProgress" @change="log" :list="widgetListInProgress" :clone="cloneWidget"
        v-bind="dragOptions" @start="drag = true" @end="drag = false">
        <transition-group type="transition" :name="!drag ? 'widget-draggable-list' : ''" :class="['widget-hub', type]">
            <WidgetItem v-for="(widget, index) in widgetListInProgress" :widgetSingleData="widget" :type="type"
                :key='widget.feId ?? index' :onRemoveButtonClick="() => onRemoveButtonClick(index)" />
        </transition-group>
    </draggable>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import draggable from "vuedraggable";
import WidgetItem from '@/components/og/components/widgets/WidgetItem.vue'
import store from '@/store';

let globalId = 1112

type WidgetType = 'widget-list' | 'widget-user' | undefined

interface Widget {
    name: string
    widgetUid: number | string
    type: string
    apiUrl: string
    feId: number
}

interface availableGroup {
    name: string
    pull: string
    put: boolean
}

interface dragOptions {
    animation: number
    group: string | availableGroup
    disabled: boolean
    ghostClass: string
}

export default defineComponent({
    name: "widget-hub",
    display: "Widget Hub",
    components: { WidgetItem, draggable },
    props: {
        type: {
            type: String as PropType<WidgetType>,
            default: 'widget-user'
        },
        widgetList: {
            type: Array as PropType<Widget[]>,
            required: true
        }
    },
    data() {
        return {
            enabled: false,
            drag: false,
            widgetListInProgress: [] as Widget[],
            availableGroup: { name: 'widgets', pull: 'clone', put: false }
        }
    },
    methods: {
        log(evt: any) {
            const valueArr = this.widgetListInProgress.map(function (item: any) { return item.name });
            const isDuplicate = valueArr.some(function (item: any, idx: number) {
                return valueArr.indexOf(item) != idx
            });
            if (isDuplicate) {
                this.widgetListInProgress.splice(evt.added.newIndex, 1)
            }
        },
        onRemoveButtonClick(index: number) {
            console.log(index);
            this.widgetListInProgress.splice(index, 1)
        },
        cloneWidget(event: any) {
            console.log(event, 'clone');
            const cloned = {
                name: event.name,
                type: event.type,
                widgetUid: globalId++,
                apiUrl: globalId++,
            }
            return cloned
        }
    },
    computed: {
        widgetEditMode: () => {
            return store.state.appMode == 'widget'
        },
        dragOptions(): dragOptions {
            return {
                animation: 200,
                group: this.type == 'widget-list' ? this.availableGroup : 'widgets',
                disabled: !this.widgetEditMode,
                ghostClass: "ghost"
            };
        }
    },
    mounted() {
        this.widgetListInProgress = this.widgetList
    },
});
</script>

<style>
@import '@/components/og/styles/transitions.css';

.widget-hub {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 90px;
}

.widget-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 12px;
}
</style>