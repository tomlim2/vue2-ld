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
.pop-enter-active {
    /* transition: transform 150ms ease-in-out; */
    animation: enterWithPop 200ms linear forwards;
}

.pop-enter {
    /* transform: scale(0); */
}

.pop-leave-active {
    animation: leaveWithPop 200ms linear forwards;
}

.pop-leave-to {
    /* transform: scale(0); */
}

@keyframes enterWithPop {
    0% {
        transform: scale(0) ;
    }

    30% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(.9);
    }

    90% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes leaveWithPop {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(0);
    }
}

.widget-wrapper {
    position: relative;
    border: 2px #252525 solid;
    border-radius: 10px;
    padding: 8px;
    background-color: #ededed;
}

.remove-button {
    position: absolute;
    right: 4px;
    top: 2px;
}
</style>