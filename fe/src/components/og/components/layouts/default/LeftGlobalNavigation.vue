<template>
    <div class="left-global-navigation">
        <SvgLogo/>
        <TextLink to="/">Home</TextLink>
        <TextLink to="/widget">Widget</TextLink>
        <TextLink to="/listener-checker">Listener Checker</TextLink>
        <TextLink to="/popcorn">Popcorn</TextLink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store'
import TextLink from '@/components/og/components/texts/TextLink.vue';
import SvgLogo from '../../svgs/SvgLogo.vue';

export default defineComponent({
    name: "left-global-navigation",
    display: "Left Global Navigation",
    components:{
    TextLink,
    SvgLogo
},
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget' }
    }
});
</script>

<style scoped>
.left-global-navigation {
    display: flex;
    align-items: center;
    gap: 24px;
    position: fixed;
    left: 0;
    top: 0;
    writing-mode: vertical-lr;
    width: 72px;
    height: 100vh;
    padding-top: 22px;
    border-right: #252525 solid 2px;
    z-index: 999;
    background-color: white;
}

</style>