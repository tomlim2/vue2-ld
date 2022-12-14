<template>
    <router-link class="link" v-on:click.native="onLinkClick" :to="to">
        <slot />
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
    name: "text-link",
    display: "Text Link",
    props: {
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        onLinkClick() {
            store.commit('resetAppMode')
        }
    }
});
</script>

<style scoped>
.link {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: 150ms ease-in-out all;
}

.router-link-exact-active {
    color: blue;
}

.link:hover {
    color: blue;
}
</style>