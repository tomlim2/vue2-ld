<template>
    <div class="section-widget">
        <div class="head">
            <h3>Widgets</h3>
            <ButtonBasic :onClick="toggleEditMode" :activated="widgetEditMode">{{widgetEditMode ? 'Save' : 'Edit'}}</ButtonBasic>
        </div>
        <WidgetHub type="widget-list" :widgetList="availableWidgets" />
    </div>
</template>

<script lang="ts">
import WidgetHub from '@/components/og/components/widgets/WidgetHub.vue'
import ButtonBasic from '@/components/og/components/buttons/ButtonBasic.vue';
import store from '@/store';

export default {
    name: "section-widget",
    display: "Section Widget",
    components: {
        WidgetHub,
        ButtonBasic
    },
    computed:{
        widgetEditMode: () => { return store.state.widgetEditMode },
        availableWidgets: ()=> {
            return store.state.widgetList.available
        }
    },
    methods: {
        toggleEditMode: ()=>{   
            store.commit('toggleWidgetEditMode')
        }
    }
    
};
</script>

<style scoped>
.head {
    padding: 16px 12px 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>