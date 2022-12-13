<template>
    <draggable :v-model="widgetListInProgress" @change="log" :list="widgetListInProgress" :clone="cloneWidget"
        v-bind="dragOptions" @start="drag = true" @end="drag = false">
        <transition-group type="transition" :name="!drag ? 'flip-list' : null" :class="['widget-hub', type]">
            <WidgetItem v-for="(widget) in widgetListInProgress" :widgetSingleData="widget"
                :key='widget && widget.widgetId' />
        </transition-group>
    </draggable>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import draggable from "vuedraggable";
import WidgetItem from '@/components/og/components/widgets/WidgetItem.vue'
import store from '@/store';

let globalId = 1112

interface Widget {
    name: string
    type: string
    widgetId: number | string
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
            type: String,
            default: 'inUse'
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
        log: function (evt: any) {
            const valueArr = this.widgetListInProgress.map(function (item) { return item.name });
            const isDuplicate = valueArr.some(function (item, idx) {
                return valueArr.indexOf(item) != idx
            });


            if (isDuplicate) {
                this.widgetListInProgress.splice(evt.added.newIndex, 1)
                console.log(this.widgetListInProgress, 'this.widgetListInProgress');
            }
            // console.log(evt, 'evt');
        },
        cloneWidget(event: any) {
            console.log(event, 'clone');
            const cloned = {
                name: event.name,
                type: event.type,
                widgetId: globalId++,
            }
            console.log(cloned);


            return cloned
        }
    },
    computed: {
        widgetEditMode: () => {
            return store.state.widgetEditMode
        },
        dragOptions(): dragOptions {
            return {
                animation: 200,
                group: this.type == 'available' ? this.availableGroup : 'widgets',
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
.widget-hub {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 90px;
}

.available {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 12px;
}
</style>