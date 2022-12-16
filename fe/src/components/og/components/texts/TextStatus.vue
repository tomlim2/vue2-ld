<template>
    <span :class="['boolean', { on: boolean }]">
        {{boolean ? 'Done' : 'In progress'}}
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "text-boolean",
    display: "Text Boolean",
    props: {
        boolean: {
            type: Boolean,
            required: false
        }
    }
});
</script>

<style scoped>
.boolean {
    display: content;
    padding: 0;
    background-color: red;
    color: white;

    text-transform: uppercase;

    transition: 150ms ease-in-out all;
}

.on {
    background-color: blue;
}
</style>