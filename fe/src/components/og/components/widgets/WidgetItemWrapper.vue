<template>
    <div class="widget-wrapper">
        <ButtonBasic v-if="type === 'widget-user' && widgetEditMode" class="remove-button" :on-click="removeThisItem">Remove</ButtonBasic>
        <slot />
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import ButtonBasic from '../buttons/ButtonBasic.vue';
import store from '@/store';

type WidgetType = 'widget-list' | 'widget-user' | undefined

export default defineComponent({
    name: "widget-wrapper",
    display: "Widget Wrapper",
    props: {
        type: {
            type: String as PropType<WidgetType>,
            default: undefined
        },
        removeItem: {
            type: Function,
            required: true
        }
    },
    components: { ButtonBasic },
    methods: {
        removeThisItem() {
            this.removeItem()
        }
    },
    computed: {
        widgetEditMode: () => {
            return store.state.widgetEditMode
        },
    },
});
</script>

<style scoped >
.widget-wrapper {
    position: relative;
    border: 2px #252525 solid;
    border-radius: 10px;
    padding: 4px;
    background-color: #ededed;
}

.remove-button {
    position: absolute;
    right: -5px;
    top: -5px;
}
</style>