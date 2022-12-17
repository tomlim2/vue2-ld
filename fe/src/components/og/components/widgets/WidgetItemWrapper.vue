<template>
    <div class="widget-wrapper">
        <transition name="pop">
            <ButtonBasic v-if="type === 'widget-user' && widgetEditMode" class="remove-button"
                :on-click="removeThisItem" backgroundColor='red'>Remove</ButtonBasic>
        </transition>

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
            return store.state.appMode == 'widget'
        },
    },
});
</script>

<style scoped >
@import '@/components/og/styles/transitions.css';

.widget-wrapper {
    position: relative;
    border: 2px #252525 solid;
    border-radius: 10px;
    padding: 8px;
    background-color: #ededed;
    overflow: hidden;
}

.remove-button {
    position: absolute;
    right: -2px;
    bottom: 4px;
}
</style>