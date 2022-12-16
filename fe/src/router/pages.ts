import LayoutDefault from '@/components/og/layouts/LayoutDefault.vue'

import PageListenerChecker from '@/components/og/pages/PageListenerChecker.vue'
import PageWidget from '@/components/og/pages/PageWidget.vue'
import PageHome from "@/components/og/pages/PageHome.vue"
import PagePopcorn from "@/components/og/pages/PagePopcorn.vue"
import PageImageCrop from "@/components/og/pages/PageImageCrop.vue"

const pages = {
    widget: PageWidget,
    home: PageHome,
    listenerChecker: PageListenerChecker,
    popcorn: PagePopcorn,
    imageCrop: PageImageCrop,
}

const layouts = {
    default: LayoutDefault
}

export { pages, layouts }