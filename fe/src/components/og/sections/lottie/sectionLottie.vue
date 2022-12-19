<template>
    <div class="section-home">
        <TextTitle usage="page">lottie</TextTitle>
        <TextParagraph usage="page">hi</TextParagraph>
        <Lottie :options="defaultOptions" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TextTitle from '@/components/og/components/texts/TextTitle.vue';
import TextParagraph from '@/components/og/components/texts/TextParagraph.vue';
import store from '@/store'
import { useModel } from '@/models';
import Lottie from 'vue-lottie/src/lottie.vue';

const model = useModel()

export default defineComponent({
    name: "section-lottie",
    display: "Section Lottie",
    data: () => ({
        lottieRaindeerPath: require('@/assets/lotties/130538-reindeer.json'),
        lf2: require("@/assets/lotties/fellaz-empty.json"),
        defaultOptions: {animationData: require('@/assets/lotties/130538-reindeer.json')},
        animationSpeed: 1
    }),
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget'; },
        todos: () => { return store.state.todos; }
    },
    components: { TextTitle, TextParagraph, Lottie },
    methods: {
        getTodos: async () => {
            await model.test.getTodoList()
        }
    },
    mounted() {
        this.getTodos()
    }
})
</script>

<style scoped>

</style>