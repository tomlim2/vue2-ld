<template>
    <button class="button" :class="[{ activated }]" v-on:click="onButtonClick" :disabled="disabled">
        <div class="button__name" :style="{ backgroundColor, color}">
            <slot />
        </div>
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
    border: none;
    cursor: pointer;
    background-color: inherit;
}

.button__name {
    box-sizing: border-box;
    padding: 8px 10px;
    border: 2px black solid;
    border-radius: 5px;
    background-color: white;
    transition: all ease-in-out 150ms;
    color: black;
    font-weight: 600;
    pointer-events: none;
}

button:hover .button__name {
    transform: translate(-6px, -6px);
    filter: drop-shadow(6px 6px 0);
}

.activated .button__name{
    background-color: greenyellow;
}
</style>