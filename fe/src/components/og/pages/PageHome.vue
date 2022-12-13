<template>
    <div>
        Home
        <div>
            widgetEditMode : {{ widgetEditMode }}
        </div>
    </div>
</template>

<script lang="ts">
//@ts-ignore
import store from '@/store/index'

export default {
    name: "page-home",
    display: "Page Home",
    computed: {
        widgetEditMode: () => { return store.state.widgetEditMode }
    }

}
</script>