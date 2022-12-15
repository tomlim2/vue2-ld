<template>
    <div class="section-widget">
        <div class="head">
            <TextTitle>Widgets</TextTitle>
            <ButtonBasic :onClick="toggleEditMode" :activated="widgetEditMode">{{widgetEditMode ? 'Save' : 'Edit'}}</ButtonBasic>
        </div>
        <WidgetHub v-if="widgetsList"  type="widget-list" :widgetList="widgetsList" />
    </div>
</template>

<script lang="ts">
import WidgetHub from '@/components/og/components/widgets/WidgetHub.vue'
import ButtonBasic from '@/components/og/components/buttons/ButtonBasic.vue';
import store from '@/store';
import TextTitle from '../../components/texts/TextTitle.vue';

export default {
    name: "section-widget",
    display: "Section Widget",
    components: {
    WidgetHub,
    ButtonBasic,
    TextTitle
},
    computed:{
        widgetEditMode: () => { return store.state.appMode == 'widget' },
        widgetsList: ()=> {
            return store.state.widgets.list
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