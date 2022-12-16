<template>
    <button class="button" :class="[{ activated }]" v-on:click="onButtonClick" :disabled="disabled">
        <span class="name" :style="{ backgroundColor, color }">
            <slot />
        </span>
        <slot />
        <span class="base" />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "button-basic",
    display: "Button Basic",
    props: {
        onClick: { type: Function, required: true },
        activated: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        backgroundColor: { type: String, default: '' },
        color: { type: String, default: '' }
    },
    methods: {
        onButtonClick() {
            this.onClick()
        }
    }
});
</script>

<style scoped>
button {
    position: relative;
    padding: 10px 12px;
    border: none;
    cursor: pointer;
}

.name {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px 10px;
    border: 2px black solid;
    border-radius: 5px;
    color: black;
    background-color: white;
    z-index: 1;
    transition: all ease-in-out 150ms;
    font-weight: 600;
    pointer-events: none;
}

button:hover .name {
    top: -4px;
    left: -4px;
}

.base {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: black;
}

.activated .name {
    background-color: greenyellow;
}
</style>