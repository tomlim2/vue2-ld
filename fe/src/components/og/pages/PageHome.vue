<template>
    <div>
        Home
        <div>
            widgetEditMode : {{ widgetEditMode }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

export default defineComponent({
    name: "page-home",
    display: "Page Home",
    computed: {
        widgetEditMode: () => { return store.state.widgetEditMode }
    }

})
</script>