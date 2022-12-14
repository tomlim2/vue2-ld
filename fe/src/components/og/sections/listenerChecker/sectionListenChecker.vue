<template>
    <div class="section-listener-checker">
        <TextTitle>
            Listener Checker
        </TextTitle>
        <div class="content">
            자동저장 조건
            <ul>
                <li>
                    조건1. out focus

                    <div>- back to profile 버튼 눌렀을 때 profile로 바로 안돌아감</div>
                    <div>- menu 건들었을때</div>
                    <div>- dropdown 목록 골랐을때</div>
                </li>
                <li>
                    의외1. 팀 입력란은 자동저장 안됨
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

import TextTitle from '@/components/og/components/texts/TextTitle.vue';

export default defineComponent({
    name: "section-home",
    display: "Section Home",
    components: {
        TextTitle
    },
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget' }
    }

})
</script>

<style scoped>
.section-listener-checker {
    padding: 16px;
    color: #252525;
}

.content{
    margin-top: 16px;
}
</style>