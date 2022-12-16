<template>
    <div class="section-listener-checker">
        <TextTitle>
            Popcorn
        </TextTitle>
        <TextParagraph>Twojs 라이브러리 호환 에러</TextParagraph>
        <div class="content">
            <div id="draw-shapes">draw-shapes</div>
        </div>
    </div>
</template>

<script>
import store from '@/store'

import TextTitle from '@/components/og/components/texts/TextTitle.vue';
import TextParagraph from '@/components/og/components/texts/TextParagraph.vue';

export default ({
    name: "section-popcorn",
    display: "Section Popcorn",
    components: {
        TextTitle,
        TextParagraph
    },
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget' }
    },
    data() {
        return ({

        })
    },
    methods: {

    },
    mounted() {

    }
})
</script>

<style scoped>
.section-listener-checker {
    padding: 16px;
    color: #252525;
}

.content {
    margin-top: 16px;
}
</style>