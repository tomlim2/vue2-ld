<template>
    <div>
        empty
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/index';

export default defineComponent({
    name: "component-empty",
    display: "Component Empty",
    data() {
        return {
            message: 'hello!'
        }
    },
    components: {},
    props: {
        onClick: { type: Function, required: true }
    },
    methods: {},
    mounted: () => { },
    computed: {
        widgetEditMode: () => { return store.state.widgetEditMode }
    }
});
</script>