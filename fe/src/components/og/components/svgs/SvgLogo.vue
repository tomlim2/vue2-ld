<template>
    <svg width="42" height="24" viewBox="0 0 42 24" class="logo" :fill="fillColor" xmlns="http://www.w3.org/2000/svg"
        v-on:click="backToHome">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M21 4.60114C18.8606 1.97175 15.6049 0.292969 11.9583 0.292969C5.51502 0.292969 0.291672 5.53451 0.291672 12.0003C0.291672 18.4661 5.51502 23.7076 11.9583 23.7076C15.6049 23.7076 18.8606 22.0288 21 19.3994C23.1394 22.0288 26.3952 23.7076 30.0417 23.7076C36.485 23.7076 41.7083 18.4661 41.7083 12.0003C41.7083 11.097 41.6059 10.2149 41.4112 9.36614H31.3542L28.7292 14.6344H35.8986C34.8953 16.8773 32.6503 18.4393 30.0417 18.4393C26.4978 18.4393 23.625 15.5565 23.625 12.0003C23.625 8.44411 26.4978 5.56126 30.0417 5.56126C31.0781 5.56126 32.0501 5.80589 32.9103 6.23835L35.2619 1.52809C33.6882 0.736969 31.9128 0.292969 30.0417 0.292969C26.3952 0.292969 23.1394 1.97175 21 4.60114ZM5.54167 12.0003C5.54167 8.44411 8.41451 5.56126 11.9583 5.56126C15.5022 5.56126 18.375 8.44411 18.375 12.0003C18.375 15.5565 15.5022 18.4393 11.9583 18.4393C8.41451 18.4393 5.54167 15.5565 5.54167 12.0003Z" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/index';
import router from '@/router';

interface Color {
    default: string;
    widget: string;
}

type AppMode = 'default' | 'widget'

const color: Color = {
    default: '#252525',
    widget: 'greenyellow'
}

export default defineComponent({
    name: "component-empty",
    display: "Component Empty",
    data() {
        return {
            message: 'hello!'
        }
    },
    components: {},
    methods: {
        backToHome() {
            store.commit('resetAppMode')
            router.push('/')
        }
    },
    mounted: () => { },
    computed: {
        appMode(): AppMode { return store.state.appMode },
        fillColor() {
            return color[this.appMode as AppMode]
        }
    }
});
</script>

<style scoped>
.logo {
    cursor: pointer;
    transition: all 150ms ease-in-out;

}

.logo:hover {
    fill: blue;
}
</style>