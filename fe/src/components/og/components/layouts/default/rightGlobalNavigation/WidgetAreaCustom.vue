<template>
    <div class="widget-area">
        <div class="head">
            <h3>Widgets</h3>
            <ButtonBasic :onClick="toggleEditMode" :activated="widgetEditMode">{{widgetEditMode ? 'Save' : 'Edit'}}</ButtonBasic>
        </div>

        <WidgetHub :widgetList="inUsedWidgets" />
    </div>
</template>

<script lang="ts">
import WidgetHub from '@/components/og/components/widgets/WidgetHub.vue'
import ButtonBasic from '../../../buttons/ButtonBasic.vue';
import store from '@/store';
import router from '@/router';

export default {
    name: "widget-area",
    display: "Widget Area",
    components: {
        WidgetHub,
        ButtonBasic
    },
    computed:{
        widgetEditMode: () => { return store.state.widgetEditMode },
        inUsedWidgets: ()=> {
            return store.state.widgetList.using
        }
    },
    methods: {
        toggleEditMode: ()=>{   
            store.commit('toggleWidgetEditMode')

            if(store.state.widgetEditMode && router.currentRoute.name !== 'widget'){
                console.log(router.currentRoute.name !== 'widget');
                
                router.push('/widget')
                
            }
        }
    }
};
</script>

<style scoped>
.widget-area {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-top: 18px;
    transition: all 250ms ease-in-out;
}

.head {
    display: flex;
    justify-content: space-between;
}
</style>